import ScrollReveal from '@/components/ScrollReveal';
import { User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-heading">
              About <span className="text-gradient-neon">Me</span>
            </h2>
            <p className="section-subheading">Get to know me</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="glass-card neon-border p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Photo placeholder */}
              <div className="shrink-0">
                <div className="w-52 h-52 md:w-60 md:h-60 rounded-full border-2 border-primary/30 bg-muted/50 flex items-center justify-center overflow-hidden shadow-[0_0_20px_hsl(var(--neon)/0.15)]">
                  {/* Replace the User icon with an <img src="your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" /> */}
                  <img src="src\Profile image.jpeg" alt="Bindusha Bavurupudi" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Text */}
              <div>
                <p className="text-foreground/90 leading-relaxed text-base md:text-lg mb-4">
                  I’m a passionate Full Stack MERN Developer skilled in MongoDB, Express.js, React, and Node.js. I enjoy building scalable, high-performance web applications with clean, efficient code and intuitive user experiences.
                </p>
                <p className="text-foreground/90 leading-relaxed text-base md:text-lg mb-4">
                  I have a solid foundation in Data Structures and Algorithms (DSA), which strengthens my problem-solving abilities and helps me write optimized, efficient code. I love tackling challenging coding problems and continuously improving my logical thinking skills.
                </p>
                <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
                  Coding is more than just a skill for me — it’s something I truly enjoy. I’m always exploring new technologies, refining my development practices, and striving to build modern, efficient, and future-ready solutions.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
