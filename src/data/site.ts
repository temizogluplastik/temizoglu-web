/**
 * Merkezi site/company yapilandirmasi.
 * Amac: iletisim, marka ve navigasyon bilgilerini tek yerde tutarak siteyi
 * veri-gudumlu ve genisletilebilir hale getirmek.
 *
 * NOT: Bu degerler template'ten alinmistir ve DOGRULANMAMIS placeholder olabilir.
 * Gercek sirket bilgileri geldiginde buradan guncellenmelidir.
 */
export const site = {
  name: 'Temizoğlu Plastik',
  legalName: 'Temizoğlu Plastik San. ve Tic. A.Ş.',
  tagline: 'Endüstriyel Polimer & Ambalaj',
  description:
    'Osmaniye OSB tesislerinde HDPE/LDPE endüstriyel polietilen ambalaj, baskılı poşet ve çöp torbası üretimi.',
  url: 'https://temizogluplastik.com',
  locale: 'tr',
} as const;

export const contact = {
  phoneDisplay: '+90 533 498 08 20',
  phoneRaw: '05334980820',
  whatsapp: '905334980820',
  email: 'temizogluplastik@gmail.com',
  address: 'Osmaniye Organize Sanayi Bölgesi, 3. Cadde No: 14, Toprakkale / Osmaniye',
} as const;

/** Header/Footer linkleri (su an template'teki anchor yapisi korunuyor;
 *  birincil "Urunler" linki ana sayfadaki kategori bolumune baglanir). */
export const nav = [
  { label: 'Ürünler', href: '/#urunler' },
  { label: 'Üretim Teknolojisi', href: '/#uretim-teknolojisi' },
  { label: 'Sürdürülebilirlik', href: '/#hakkimizda' },
  { label: 'Lojistik Ağı', href: '/#lojistik' },
  { label: 'Hakkımızda', href: '/#hakkimizda' },
] as const;

export const helpers = {
  tel: `tel:${contact.phoneRaw}`,
  mailto: `mailto:${contact.email}`,
  wa: `https://wa.me/${contact.whatsapp}`,
} as const;
