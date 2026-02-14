import { Github, Linkedin, Mail } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const contacts = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/bindushabavurupudi',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bindusha-bavurupudi',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'bindushabavurupudi2006@gmail.com',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="section-heading">
            Get In <span className="text-gradient-neon">Touch</span>
          </h2>
          <p className="section-subheading">Let's connect and build something great</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex justify-center gap-8 md:gap-12">
            {contacts.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full glass-card border border-border
                  flex items-center justify-center transition-all duration-300
                  group-hover:neon-border-strong group-hover:scale-110 group-hover:-translate-y-1
                  group-hover:shadow-[0_0_25px_hsl(var(--neon)/0.3)]"
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <span className="text-sm font-body text-muted-foreground group-hover:text-foreground transition-colors">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="mt-16 text-xs text-muted-foreground font-mono tracking-wider">
            © {new Date().getFullYear()} — Designed & Built with passion
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
