import ScrollReveal from '@/components/ScrollReveal';
import TypeWriter from '@/components/TypeWriter';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-3xl mx-auto text-center z-10">
        <ScrollReveal>
          <div className="glass-card neon-border p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient-neon">Bindusha Bavurupudi</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-body mb-6">
              Full Stack Web Developer
            </h2>
            <div className="text-primary text-lg md:text-xl mb-8 h-8">
              <TypeWriter
                words={[
                'Building scalable web apps',
                'Strengthening problem-solving skills through DSA',
                'MERN stack enthusiast']
                } />

            </div>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_hsl(var(--neon)/0.3)] transition-all duration-300 animate-float"
              aria-label="Scroll down">

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>);

};

export default HeroSection;