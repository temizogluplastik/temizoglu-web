/**
 * Ürün katalogu verisi (veri-güdümlü).
 * - Liste sayfası (/urunler) kartları bu veriden üretir ve client-side filtreler.
 * - Her katalog kendi detay sayfasına sahiptir: /urunler/[slug]
 * - Ana sayfa (index.astro) "Ürün Kataloğunu İncele" butonları /urunler/[slug]'a bağlanır.
 *
 * Tüm içerik mevcut urunler.astro kartlarından birebir alınmıştır (gerçek veri).
 */
export interface Spec {
  label: string;
  value: string;
}
export interface MetricBadge {
  icon: string;
  title: string;
  sub: string;
}
export interface CardButton {
  icon: string;
  label: string;
}
export interface Catalog {
  /** URL parçası: /urunler/[slug] ve filtre anahtarı */
  slug: string;
  /** Filtre sekmesi + breadcrumb kısa adı */
  navLabel: string;
  model: string;
  /** Kart başlığı (h3) */
  title: string;
  /** Detay sayfası banner açıklaması */
  heroDesc: string;
  image: string;
  imageAlt: string;
  /** Görsel üzerindeki 2 rozet */
  imageBadges: [string, string];
  /** Kategori etiketi (uppercase) */
  category: string;
  /** Kalite/sertifika etiketi */
  pill: string;
  /** Teknik özellik satırları (4 adet) */
  specs: Spec[];
  /** Kart butonları (2 adet) */
  buttons: [CardButton, CardButton];
}

/** Banner altı ortak metrik rozetleri (fabrika kabiliyetleri — tüm sayfalarda aynı). */
export const metrics: MetricBadge[] = [
  { icon: 'palette', title: '8 Renk HD Flekso', sub: 'Canlı Renkler & Keskin Detay' },
  { icon: 'recycling', title: 'Bio & PCR Polimer', sub: 'Sıfır Karbon Hedefi' },
  { icon: 'precision_manufacturing', title: '15 - 150 Mikron', sub: 'Özel Kalınlık Skalası' },
  { icon: 'local_shipping', title: '81 İle Hızlı Sevk', sub: 'Paletli & Konteyner Yükleme' },
];

/** Banner üstü ortak tesis etiketi. */
export const facilityBadge =
  'Kadirli, Osmaniye Üretim Tesisi | Yüksek Tonajlı Üretim Kapasitesi';

export const catalogs: Catalog[] = [
  {
    slug: 'ozel-baskili-posetler',
    navLabel: 'Özel Baskılı Poşetler',
    model: 'TP-BP2025',
    title: 'Takviyeli & El Geçmeli Özel Baskılı Mağaza Poşeti',
    heroDesc:
      'Kurumsal markalar, mağazalar ve perakende zincirleri için yüksek çözünürlüklü flekso baskılı, takviyeli ve yumuşak saplı lüks polietilen poşet serileri.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA2VjkZ1YZduxHYd2y_rP1YpA6XtEqG_Tzw3mZE41Lbss8d4cQklrYhH1-jCZr1JsxEEKt7C4tvMy22H5lQUQtrdokUkYArKqTsyKDqoySORDBK8sS4ERnGvx5cqWYyp2qZK5shc_99ywf4D2m3OONZnuln3ax2XHmkS3zRzpZgRH9QK79pE1PH635O5yzCX8MG6qeTdRnInyJ6yDTQyfUfc6jFTVIfjCFto0fGmxIk9ILeOxAPU2BoZw',
    imageAlt: 'Özel Baskılı Takviyeli Mağaza Poşetleri',
    imageBadges: ['Özel Tasarım Baskı', 'Takviyeli Sap'],
    category: 'PERAKENDE & BUTİK ÖZEL SERİ',
    pill: 'ISO 9001 KALİTE',
    specs: [
      { label: 'Ölçü / Boyut:', value: '26x38 cm / 33x45 cm / 40x50 cm / 50x60 cm' },
      { label: 'Baskı Teknolojisi:', value: '1 - 8 Renk Tramlı HD Flekso Baskı' },
      { label: 'Koli / Paket İçi:', value: '500 Adet / 1.000 Adet (Özel Kutulu)' },
      { label: 'Hammadde Tipi:', value: 'Parlak LDPE & Orijinal Saf Polietilen' },
    ],
    buttons: [
      { icon: 'add_shopping_cart', label: 'Teklif Sepetine Ekle' },
      { icon: 'description', label: 'Baskı Şablonu İndir' },
    ],
  },
  {
    slug: 'dokme-agir-hizmet-torbalar',
    navLabel: 'Dökme & Ağır Hizmet Torbaları',
    model: 'TP-DK100120',
    title: 'Ulu-Eco Dökme Sanayi Tipi Çöp Torbası (Büyük / Hantal)',
    heroDesc:
      'Belediyeler, hastaneler, fabrikalar ve AVM\'ler için yüksek gramajlı, sızdırmaz taban kaynaklı, ağır hizmet tipi dökme sanayi çöp torbaları.',
    image:
      'https://lh3.googleusercontent.com/aida/AEtjO1VvLLOGpu5Fy4VM1TVEupkx8Ej5BGuQvaCv4Ew1cUT1pJnapTboUR9uVQQL2GEzFtuLQsz4RE38IIt4AVIAwIUrGD9nyF8-KPqbQnso7GkkDcdZgYLpRLpdIyiKOz3nLMxHhtwrCKCaxr1WxdU3F5somubCuk2wyp0SE9IidPVDsNthewDDCETRffUZcYkJrsvPy08F9DDNlVyXV7qgAnVDrgGIopcwKkCnQf9ucJvOBh4sJ6G6rlnyOJUd',
    imageAlt: 'Ulu-Eco Dökme Sanayi Tipi Çöp Torbası',
    imageBadges: ['Paletli Toptan Sevkiyat', 'Ekstra Kalın (Hantal)'],
    category: 'FABRİKA & ŞANTİYE AĞIR HİZMET',
    pill: '50+ KG MUKAVEMET',
    specs: [
      { label: 'Ölçü Seçenekleri:', value: '100 × 120 cm & 120 × 150 cm' },
      { label: 'Mikron Kalınlığı:', value: '100 - 140 Mikron Yüksek Mukavemet' },
      { label: 'Taşıma Kapasitesi:', value: '50+ kg Statik & Dinamik Yük' },
      { label: 'Ambalaj & Sevkiyat:', value: 'Çuvallı / 25 Kg Bağlar (Paletli Yük)' },
    ],
    buttons: [
      { icon: 'add_shopping_cart', label: 'Teklif Sepetine Ekle' },
      { icon: 'inventory', label: 'Numune Talep Et' },
    ],
  },
  {
    slug: 'atlet-kesim-posetler',
    navLabel: 'Atlet Kesim Poşetler',
    model: 'TP-AT3060',
    title: 'Baskılı & Baskısız Atlet Kesim Poşet (Küçük - Orta - Büyük)',
    heroDesc:
      'Market, perakende ve toptan ambalaj için yüksek taşıma mukavemetli, gıda ile temasa uygun baskılı ve baskısız atlet kesim market poşetleri.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC8x2yWDitJBM4BXeq7GN-oIpBDI5b7t-mZNdJFXTpE4oVYhBG2F9yzBLgGnlB6hY9i_IEpUSnxtKBiQNyQrBCPEBLpbJNOC2SzynXevxcOU6Um2LMTGKYok8-9ZGsjBKHRr3Ww2eQnBGqcKfUjuRsGzcHSU3V1fwEm8D4G4HF5g4qVl3DR_IW7GozYY3Nzr7Z6xQHW_U4XH73WbMKuDgwgQCHqTlW2P562nDMjoGgHSc1kvwnF_8Qj-g',
    imageAlt: 'Baskılı ve Baskısız Atlet Kesim Market Poşeti',
    imageBadges: ['Özel Flekso Baskı İmkanı', 'Yüksek Taşıma Mukavemeti'],
    category: 'PERAKENDE & TOPTAN AMBALAJ',
    pill: 'GIDA İLE TEMAS',
    specs: [
      { label: 'Standart Ebatlar:', value: '28×48 cm / 30×60 cm / 35×70 cm' },
      { label: 'Renk Seçenekleri:', value: 'Beyaz, Naturel Şeffaf veya Pantone' },
      { label: 'Film Kalınlığı:', value: '18 - 35 Mikron HDPE / LDPE' },
      { label: 'Paketleme Şekli:', value: '10 Kg Standart Karton Koli' },
    ],
    buttons: [
      { icon: 'add_shopping_cart', label: 'Teklif Sepetine Ekle' },
      { icon: 'upload_file', label: 'Baskı Tasarımı Gönder' },
    ],
  },
  {
    slug: 'plastik-granul',
    navLabel: 'Plastik Granül & Geri Dönüşüm',
    model: 'TP-GRN2025',
    title: 'Yüksek Saflıkta Geri Dönüşüm LDPE / HDPE Plastik Granül',
    heroDesc:
      'Çift kademeli filtrasyonla yüksek saflıkta üretilen, ISO 14001 belgeli %100 geri dönüşüm (PCR) LDPE / HDPE ikincil polimer granül hammadde.',
    image:
      'https://lh3.googleusercontent.com/aida/AEtjO1Vi-Ad7jfFJPcDKjA4mVX8AHIQB2z6lfxsG_6LgyAxYSQrtZm-CaVaXgaiXUtE6R7f9fkhKuZbqSZ1cW7N4-nqQQN5DdepfQ003x_8sv8XwoLSdhT3zJlcr4u44-FHVsR7VixvC4k_qdLG-c-PE1gOG4Li0-uw3TaZPy4S4XXyuT4HUxU00UlzDajpSt2CXgHQIn7C0AqJhMMAVfj1eG7PKQCPKNKJIZpbW8gv9nzgy2VeZTeAKIFroXPRZ',
    imageAlt: 'Yüksek Saflıkta Geri Dönüşüm LDPE HDPE Granül',
    imageBadges: ['%100 Geri Dönüşüm (PCR)', 'Çift Kademeli Filtrasyon'],
    category: 'İKİNCİL POLİMER HAMMADDE',
    pill: 'ISO 14001 BELGELİ',
    specs: [
      { label: 'Erime Akış İndeksi (MFI):', value: '0.8 - 1.2 g/10min (190°C/2.16kg)' },
      { label: 'Polimer Yoğunluğu:', value: '0.922 g/cm³' },
      { label: 'Renk Çeşitleri:', value: 'Şeffaf, Beyaz, Siyah, Yeşil, Mavi' },
      { label: 'Sevkiyat Formatı:', value: '25 Kg Valfli Torba & 1.000 Kg Big Bag' },
    ],
    buttons: [
      { icon: 'add_shopping_cart', label: 'Teklif Sepetine Ekle' },
      { icon: 'analytics', label: 'Laboratuvar Analiz Raporu' },
    ],
  },
];

