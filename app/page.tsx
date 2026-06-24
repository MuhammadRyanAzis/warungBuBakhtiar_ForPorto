import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import MarqueeSection from './components/sections/MarqueeSection';
import CeritaSection from './components/sections/CeritaSection';
import MenuSection from './components/sections/MenuSection';
import FilosofiSection from './components/sections/FilosofiSection';
import LokasiSection from './components/sections/LokasiSection';
import FooterSection from './components/sections/FooterSection';

export const metadata = {
  title: 'Warung Bu Bakhtiar — Masakan Rumahan Sejak 2015',
  description: 'Warung Bu Bakhtiar, Kota Pasuruan. Masakan rumahan autentik yang dimasak dari pagi. Soto ayam, rendang daging, bakso spesial — tidak ada campuran MSG, bahan segar dari pasar setiap hari.',
  keywords: 'warung makan kota pasuruan, soto ayam kampung, rendang tanpa MSG, masakan rumahan autentik, warung bu bakhtiar',
};

export default function Home() {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <CeritaSection />
      <MenuSection />
      <FilosofiSection />
      <LokasiSection />
      <FooterSection />
    </div>
  );
}
