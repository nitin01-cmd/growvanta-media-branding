const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="font-heading text-xl text-foreground tracking-wider">
            GROWVANTA <span className="text-gold">MEDIA</span>
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-border">
        <p className="text-center font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Growvanta Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
