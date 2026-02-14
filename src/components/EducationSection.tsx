import ScrollReveal from '@/components/ScrollReveal';

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Gayatri Vidya Parishad College Of Engineering',
    duration: '2023 – Present',
    // description: 'Focused on software engineering, data structures, algorithms, and full stack development.',
  },
    {
    degree: 'Full Stack Web Development',
    institution: 'Masai School',
    duration: '2025 – Present',
    description: 'Currently pursuing Full Stack Web Development at Masai School, focusing on the MERN stack',
  },
  {
    degree: 'Senior Secondary Education',
    institution: 'Jawahar Navodaya Vidyalaya',
    duration: '2021 – 2023',
    // description: 'Specialized in Mathematics and Computer Science. Achieved distinction in board examinations.',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-heading">
              <span className="text-gradient-neon">Education</span>
            </h2>
            <p className="section-subheading">My academic journey</p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          {education.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className={`relative flex flex-col md:flex-row mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary neon-border-strong -translate-x-1.5 md:-translate-x-2 mt-8 animate-glow-pulse z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card neon-border p-6">
                    <span className="text-xs font-mono text-primary tracking-wider">{item.duration}</span>
                    <h3 className="text-lg font-heading font-semibold mt-2 mb-1 text-foreground">{item.degree}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.institution}</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
