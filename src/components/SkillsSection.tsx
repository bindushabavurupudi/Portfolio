import ScrollReveal from '@/components/ScrollReveal';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const skillGroups = [
  {
    title: 'Technical Skills',
    skills: [
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
      { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
    ],
  },
  {
    title: 'Coding Profiles',
    skills: [
      { name: 'LeetCode', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg', link: 'https://leetcode.com/u/sha_2007/' },
      { name: 'GeeksforGeeks', logo: 'https://img.icons8.com/color/480/GeeksforGeeks.png', link: 'https://www.geeksforgeeks.org/profile/bindushabavurupudi' },
      { name: 'CodeChef', logo: 'https://img.icons8.com/color/480/codechef.png', link: 'https://www.codechef.com/users/bindusha07' },
      { name: 'Codeforces', logo: 'https://cdn.jsdelivr.net/gh/rahuldkjain/github-profile-readme-generator@master/src/images/icons/Social/codeforces.svg', link: 'https://codeforces.com/profile/bindushabavurupudi2006' },
      { name: 'HackerRank', logo: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/480/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png', link: 'https://www.hackerrank.com/profile/bindusha07' },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Technical <span className="text-gradient-neon">Skills</span>
            </h2>
            <p className="section-subheading">Technologies I work with</p>
          </div>
        </ScrollReveal>

        <TooltipProvider delayDuration={0}>
          <div className="space-y-12">
            {skillGroups.map((group, gi) => (
              <ScrollReveal key={group.title} delay={gi * 0.1}>
                <div>
                  <h3 className="text-lg font-heading font-semibold mb-6 text-center text-foreground tracking-wider">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-5">
                    {group.skills.map((skill, si) => (
                      <ScrollReveal key={skill.name} delay={gi * 0.1 + si * 0.05}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            {skill.link ? (
                              <a
                                href={skill.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative cursor-pointer"
                              >
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full glass-card flex items-center justify-center
                                  border border-border transition-all duration-300
                                  group-hover:neon-border-strong group-hover:scale-110
                                  group-hover:shadow-[0_0_20px_hsl(var(--neon)/0.3)]"
                                >
                                  <img
                                    src={skill.logo}
                                    alt={skill.name}
                                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                                    loading="lazy"
                                  />
                                </div>
                              </a>
                            ) : (
                              <div className="group relative cursor-pointer">
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full glass-card flex items-center justify-center
                                  border border-border transition-all duration-300
                                  group-hover:neon-border-strong group-hover:scale-110
                                  group-hover:shadow-[0_0_20px_hsl(var(--neon)/0.3)]"
                                >
                                  <img
                                    src={skill.logo}
                                    alt={skill.name}
                                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            )}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="font-medium">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default SkillsSection;
