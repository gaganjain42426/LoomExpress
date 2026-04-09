const Footer = () => {
  return (
    <footer className="bg-primary px-6 py-16 text-center">
      <p className="font-serif text-2xl font-light text-primary-foreground">
        Vimla LoomCraft Experience
      </p>
      <p className="mt-2 font-sans text-xs uppercase tracking-[0.15em] text-primary-foreground/60">
        A Vimla International Venture
      </p>
      <div className="mt-8 flex items-center justify-center gap-8">
        <a href="#" className="font-sans text-xs uppercase tracking-wider text-primary-foreground/50 transition-colors hover:text-primary-foreground">
          Instagram
        </a>
        <a href="#" className="font-sans text-xs uppercase tracking-wider text-primary-foreground/50 transition-colors hover:text-primary-foreground">
          Facebook
        </a>
        <a href="#" className="font-sans text-xs uppercase tracking-wider text-primary-foreground/50 transition-colors hover:text-primary-foreground">
          LinkedIn
        </a>
      </div>
      <p className="mt-8 font-sans text-xs text-primary-foreground/30">
        © {new Date().getFullYear()} Vimla International. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
