/**
 * clone-template.mjs
 * template/ altindaki iki statik HTML sayfasindan (Ana Sayfa + Urun Katalogu)
 * Astro bilesen/sayfa dosyalarini uretir. Amac: uzun/kirik satirlarda bile
 * bayt-bayt sadik bir klon elde etmek (manuel transkripsiyon hatasini onlemek).
 *
 * Uretim:
 *   src/components/HeaderHome.astro, HeaderCatalog.astro
 *   src/components/FooterHome.astro, FooterCatalog.astro
 *   src/pages/index.astro, src/pages/urunler.astro
 *
 * Kullanim:  npm run clone-template
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(siteRoot, '..');
const tpl = path.join(repoRoot, 'template');

const HOME_FILE = path.join(tpl, 'temizo_lu_plastik_kurumsal_b2b_ambalaj_po_et_retimi', 'code.html');
const CAT_FILE = path.join(tpl, 'temizo_lu_plastik_r_n_katalo_u_kategori_detay', 'code.html');

const HOME_BODY_CLASS =
  'bg-background text-on-surface antialiased font-body-md selection:bg-secondary selection:text-on-primary';
const CAT_BODY_CLASS =
  'bg-surface text-on-surface antialiased font-body-md selection:bg-secondary-fixed selection:text-on-secondary-fixed';

function readBody(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/<body[^>]*>([\s\S]*)<\/body>/);
  if (!m) throw new Error('body bulunamadi: ' + file);
  return m[1];
}

function slice(body, tag) {
  const m = body.match(new RegExp('<' + tag + '[\\s\\S]*?</' + tag + '>'));
  if (!m) throw new Error(tag + ' bulunamadi');
  return m[0];
}

/** Ilk 'href="#urunler"' -> '/urunler' (birincil Urunler nav linkini katalog sayfasina baglar). */
function wireProductsLink(html) {
  return html.replace('href="#urunler"', 'href="/urunler"');
}

// --- Home ---
const homeBody = readBody(HOME_FILE);
let homeHeader = wireProductsLink(slice(homeBody, 'header'));
let homeMain = slice(homeBody, 'main');
const homeFooter = slice(homeBody, 'footer');

// RFQ formu: inline onsubmit -> ayri <script> (Astro uyumu)
const RFQ_MSG =
  'Teklif talebiniz fabrikamıza iletildi. Satış temsilcimiz 15 dakika içinde iletişime geçecektir.';
homeMain = homeMain.replace(/\sonsubmit="[^"]*"/, '');
homeMain = homeMain.replace(/<form\b/, '<form id="rfq-form"');

// --- Catalog ---
const catBody = readBody(CAT_FILE);
const catHeader = wireProductsLink(slice(catBody, 'header'));
let catMain = slice(catBody, 'main');
const catFooter = slice(catBody, 'footer');
// Breadcrumb "Ana Sayfa" -> /
catMain = catMain.replace('href="#">Ana Sayfa', 'href="/">Ana Sayfa');

// --- Yazma ---
const compDir = path.join(siteRoot, 'src', 'components');
const pagesDir = path.join(siteRoot, 'src', 'pages');
fs.mkdirSync(compDir, { recursive: true });
fs.mkdirSync(pagesDir, { recursive: true });

const write = (p, c) => {
  fs.writeFileSync(p, c, 'utf8');
  console.log('yazildi:', path.relative(siteRoot, p));
};

write(path.join(compDir, 'HeaderHome.astro'), homeHeader + '\n');
write(path.join(compDir, 'HeaderCatalog.astro'), catHeader + '\n');
write(path.join(compDir, 'FooterHome.astro'), homeFooter + '\n');
write(path.join(compDir, 'FooterCatalog.astro'), catFooter + '\n');

const indexAstro = [
  '---',
  "import BaseLayout from '../layouts/BaseLayout.astro';",
  '---',
  '',
  '<BaseLayout',
  '  title="Temizoğlu Plastik | Endüstriyel Ambalaj & Poşet Üretimi"',
  '  description="Osmaniye OSB tesislerinde HDPE/LDPE endüstriyel polietilen ambalaj, baskılı poşet ve çöp torbası üretimi. 81 ile ve ihracata toptan sevkiyat."',
  '  variant="home"',
  '  bodyClass="' + HOME_BODY_CLASS + '"',
  '>',
  homeMain,
  '</BaseLayout>',
  '',
  '<script>',
  "  const form = document.getElementById('rfq-form');",
  "  if (form) form.addEventListener('submit', (e) => {",
  '    e.preventDefault();',
  '    alert(' + JSON.stringify(RFQ_MSG) + ');',
  '  });',
  '</script>',
  '',
].join('\n');
write(path.join(pagesDir, 'index.astro'), indexAstro);

const urunlerAstro = [
  '---',
  "import BaseLayout from '../layouts/BaseLayout.astro';",
  '---',
  '',
  '<BaseLayout',
  '  title="Endüstriyel Ürün Kataloğu & Kategori Detayı - Temizoğlu Plastik"',
  '  description="Özel baskılı poşet, atlet kesim poşet, çöp torbası, shrink film ve geri dönüşüm granül ürün kataloğu. Teknik özellikler ve toptan teklif."',
  '  variant="catalog"',
  '  bodyClass="' + CAT_BODY_CLASS + '"',
  '>',
  catMain,
  '</BaseLayout>',
  '',
].join('\n');
write(path.join(pagesDir, 'urunler.astro'), urunlerAstro);

console.log('\nKlon tamamlandi. Simdi: npm install && npm run build');
