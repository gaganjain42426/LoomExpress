const SocialIcon = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/70 transition-all hover:border-[#C4735A] hover:bg-[#C4735A] hover:text-white"
  >
    {children}
  </a>
);

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => (
  <footer className="bg-[#2E4F7E] px-6 pt-16 pb-0 text-white">
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Col 1: Brand */}
        <div>
          <p className="font-serif text-[22px] font-light text-white">Vimla LoomCraft Experience</p>
          <p className="mt-1 font-sans text-[13px] text-[#D4A574]">A Vimla International Venture</p>
          <p className="mt-4 font-sans text-[13px] leading-relaxed text-white/60">
            Where 400 years of craft meets the curious traveller. A working artisan village 40km from Jaipur.
          </p>
          <div className="mt-6 flex gap-3">
            <SocialIcon href="https://instagram.com/vimlaloomcraft" label="Instagram">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://facebook.com" label="Facebook">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://youtube.com" label="YouTube">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://wa.me/91XXXXXXXXXX" label="WhatsApp">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.271c-1.477.816-2.768 1.988-3.736 3.42-1.02 1.54-1.557 3.294-1.557 5.129 0 1.312.226 2.59.67 3.802L2.98 19.47l4.239-1.111c1.7.886 3.6 1.354 5.534 1.354 2.82 0 5.464-.732 7.746-2.122 1.477-.816 2.768-1.988 3.736-3.42 1.02-1.54 1.557-3.294 1.557-5.129 0-1.312-.226-2.59-.67-3.802l1.228-4.26-4.239 1.111c-1.7-.886-3.6-1.354-5.534-1.354z"/></svg>
            </SocialIcon>
          </div>
        </div>

        {/* Col 2: Explore */}
        <div>
          <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-[#D4A574]">Explore</p>
          <div className="flex flex-col gap-2">
            {[
              { label: "Experiences", href: "#packages" },
              { label: "Itinerary", href: "#itinerary" },
              { label: "Gallery", href: "#gallery" },
              { label: "About Us", href: "#about" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="w-fit font-sans text-sm text-white/60 transition-colors hover:text-[#C4735A]"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Col 3: Experiences */}
        <div>
          <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-[#D4A574]">Our Experiences</p>
          <div className="flex flex-col gap-2">
            <button onClick={() => scrollTo("#packages")} className="w-fit text-left font-sans text-sm text-white/60 transition-colors hover:text-[#C4735A]">
              Artisan Introduction — 2–3 Hours
            </button>
            <button onClick={() => scrollTo("#packages")} className="w-fit text-left font-sans text-sm text-white/60 transition-colors hover:text-[#C4735A]">
              Full Village Immersion — 4–5 Hours
            </button>
            <p className="font-sans text-sm text-white/60">Hotel Pickup Available</p>
            <p className="font-sans text-sm text-white/60">Custom Rug Commissions</p>
          </div>
        </div>

        {/* Col 4: Get in Touch */}
        <div>
          <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-[#D4A574]">Get in Touch</p>
          <div className="flex flex-col gap-3">
            <p className="font-sans text-sm text-white/60">📍 Banskho Village, Rajasthan</p>
            <p className="font-sans text-sm text-white/60">📞 +91-XXXXXXXXXX</p>
            <p className="font-sans text-sm text-white/60">📧 bookings@vimlaloomcraft.com</p>
          </div>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded bg-[#25D366] px-4 py-2 font-sans text-xs font-medium text-white transition-all hover:bg-[#1ebe5a]"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.271c-1.477.816-2.768 1.988-3.736 3.42-1.02 1.54-1.557 3.294-1.557 5.129 0 1.312.226 2.59.67 3.802L2.98 19.47l4.239-1.111c1.7.886 3.6 1.354 5.534 1.354 2.82 0 5.464-.732 7.746-2.122 1.477-.816 2.768-1.988 3.736-3.42 1.02-1.54 1.557-3.294 1.557-5.129 0-1.312-.226-2.59-.67-3.802l1.228-4.26-4.239 1.111c-1.7-.886-3.6-1.354-5.534-1.354z"/></svg>
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-14 border-t border-[#D4A574]/30 py-8">
        <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <p className="font-sans text-[13px] text-white/40">
            © {new Date().getFullYear()} Vimla LoomCraft Experience. All rights reserved.
          </p>
          <p className="font-sans text-[13px] text-white/40">Designed with ♥ in Rajasthan</p>
          <div className="flex gap-4">
            <a href="#" className="font-sans text-[13px] text-white/40 hover:text-white/70">Privacy Policy</a>
            <a href="#" className="font-sans text-[13px] text-white/40 hover:text-white/70">Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
