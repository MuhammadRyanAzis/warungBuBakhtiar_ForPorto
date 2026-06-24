// ================================================================
//  DATA — Menu items & types
//  Semua data menu dipusatkan di sini agar mudah diupdate
// ================================================================

export type MenuType = 'unggulan' | 'signature' | 'harian' | 'favorit';
export type TabType = 'semua' | MenuType;

export interface MenuItem {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  price: string;
  note: string;
  type: MenuType;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'soto-ayam',
    name: 'Soto Ayam',
    tagline: 'Warisan 3 Generasi',
    desc: 'Kuah kuning bening dari rebusan tulang ayam kampung selama empat jam. Rempah utuh, bukan bubuk.',
    price: 'Rp 25.000',
    note: 'Tersedia sejak kami buka',
    type: 'unggulan',
  },
  {
    id: 'rendang',
    name: 'Rendang Daging',
    tagline: 'Dimasak 6 Jam',
    desc: 'Daging sapi lokal, santan kelapa segar, 23 rempah. Tidak ada cara singkat untuk rendang yang benar.',
    price: 'Rp 35.000',
    note: 'Setiap hari mulai pukul 11.00',
    type: 'signature',
  },
  {
    id: 'bakso',
    name: 'Bakso Spesial',
    tagline: 'Dibuat Pagi Hari',
    desc: 'Daging sapi giling manual, kuah kaldu sapi segar. Disajikan dengan bihun dan tahu goreng homemade.',
    price: 'Rp 20.000',
    note: 'Stok terbatas setiap harinya',
    type: 'favorit',
  },
  {
    id: 'nasi-rames',
    name: 'Nasi Rames Bu Bak',
    tagline: 'Komplit & Puas',
    desc: 'Pilih 3 lauk dari meja prasmanan — selalu berganti setiap hari sesuai musim dan pasar.',
    price: 'Rp 18.000',
    note: 'Menu berganti setiap hari',
    type: 'harian',
  },
  {
    id: 'rawon',
    name: 'Rawon Daging',
    tagline: 'Kluwek Hitam Pilihan',
    desc: 'Kuah hitam pekat kaya rempah kluwek dengan irisan daging sapi empuk, tauge pendek, dan sambal terasi.',
    price: 'Rp 30.000',
    note: 'Tersedia mulai pukul 10.00',
    type: 'signature',
  },
  {
    id: 'ayam-penyet',
    name: 'Ayam Penyet',
    tagline: 'Sambal Bawang Segar',
    desc: 'Ayam goreng bumbu kuning yang dipenyet dengan sambal bawang super pedas. Disajikan dengan lalapan.',
    price: 'Rp 22.000',
    note: 'Tingkat kepedasan bisa disesuaikan',
    type: 'unggulan',
  },
  {
    id: 'nasi-goreng-jawa',
    name: 'Nasi Goreng Jawa',
    tagline: 'Bumbu Ulek Tradisional',
    desc: 'Dimasak dengan tungku arang, bumbu bawang ulek, suwiran ayam, dan telur bumbu kecap manis legit.',
    price: 'Rp 20.000',
    note: 'Aroma smokey khas arang',
    type: 'favorit',
  },
  {
    id: 'sate-ayam',
    name: 'Sate Ayam Madura',
    tagline: 'Bumbu Kacang Kental',
    desc: '10 tusuk sate ayam full daging tanpa kulit, dibakar dengan kecap manis dan bumbu kacang legit.',
    price: 'Rp 28.000',
    note: 'Cocok dengan lontong atau nasi',
    type: 'unggulan',
  },
  {
    id: 'mie-goreng',
    name: 'Mie Goreng Kampung',
    tagline: 'Resep Jadul',
    desc: 'Mie telor basah dimasak dengan kekian, bakso, sayur sawi, dan bumbu ebi wangi.',
    price: 'Rp 18.000',
    note: 'Tersedia setelah pukul 15.00',
    type: 'harian',
  },
  {
    id: 'tahu-campur',
    name: 'Tahu Campur',
    tagline: 'Petis Udang Asli',
    desc: 'Perpaduan tahu goreng, perkedel singkong, selada segar, daging sapi, dan kuah petis udang gurih manis.',
    price: 'Rp 24.000',
    note: 'Khas Jawa Timur sesungguhnya',
    type: 'signature',
  },
  {
    id: 'gado-gado',
    name: 'Gado-Gado Siram',
    tagline: 'Sayuran Segar',
    desc: 'Sayur rebus segar, kentang, tahu, tempe, telur, disiram kuah kacang legit dan taburan kerupuk.',
    price: 'Rp 18.000',
    note: 'Menu sehat favorit',
    type: 'favorit',
  },
  {
    id: 'es-teh',
    name: 'Es Teh Manis & Jeruk Peras',
    tagline: 'Pelepas Dahaga',
    desc: 'Teh tubruk wangi melati atau jeruk peras segar murni. Pemadam kepedasan paling tepat.',
    price: 'Mulai Rp 5.000',
    note: 'Es bisa di-request',
    type: 'harian',
  },
];

export const MENU_TABS: { key: TabType; label: string }[] = [
  { key: 'semua',     label: 'Semua' },
  { key: 'unggulan',  label: 'Unggulan' },
  { key: 'signature', label: 'Signature' },
  { key: 'favorit',  label: 'Favorit' },
  { key: 'harian',   label: 'Menu Harian' },
];
