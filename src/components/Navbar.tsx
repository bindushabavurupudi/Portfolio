import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const navItems = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => ({
        id: item.toLowerCase(),
        el: document.getElementById(item.toLowerCase()),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-card' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          {/* Spacer for mobile to center nothing */}
          <div className="hidden md:block" />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 font-body ${
                  activeSection === item.toLowerCase()
                    ? 'text-primary neon-text'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a
              href="/Portfolio/Bindusha_Resume.pdf"
              className="flex glow-button items-center gap-2 text-xs !px-4 !py-2" target = "_blank"
            >
              <Download size={14} />
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-64 glass-card neon-border animate-[slide-in-right_0.3s_ease-out] flex flex-col p-6"
               style={{ animationName: 'none', transform: 'translateX(0)' }}>
            <button onClick={() => setIsOpen(false)} className="self-end mb-8 text-muted-foreground hover:text-foreground">
              <X size={24} />
            </button>
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`py-3 text-left text-lg font-medium transition-colors font-body ${
                  activeSection === item.toLowerCase() ? 'text-primary neon-text' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item}
              </button>
            ))}
            <a href="/Portfolio/Bindusha_Resume.pdf" className="glow-button mt-6 flex items-center justify-center gap-2 text-sm" target='_blank'>
              <Download size={14} /> Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
