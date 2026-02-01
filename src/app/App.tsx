import { BrowserRouter, Routes, Route } from 'react-router';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { WhatsAppButton } from './components/whatsapp-button';
import { HomePage } from './pages/home';
import { AboutPage } from './pages/about';
import { ProgramsPage } from './pages/programs';
import { TrainersPage } from './pages/trainers';
import { MembershipPage } from './pages/membership';
import { GalleryPage } from './pages/gallery';
import { TestimonialsPage } from './pages/testimonials';
import { BlogPage } from './pages/blog';
import { ContactPage } from './pages/contact';
import { ShopPage } from './pages/shop';
import { TermsPage } from './pages/terms';
import { PrivacyPage } from './pages/privacy';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/trainers" element={<TrainersPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}