import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import BlogPreview from './components/BlogPreview';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Pricing />
      <BlogPreview />
      <ContactForm />

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} PastelPay. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <a href="#pricing" className="hover:text-slate-900">Pricing</a>
              <a href="#blog" className="hover:text-slate-900">Blog</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
