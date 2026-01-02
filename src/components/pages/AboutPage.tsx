import React from 'react';
import { 
  ChevronLeft, Linkedin, Mail, 
  Figma, Cpu, BarChart3, Sparkles, 
  GraduationCap, Scroll 
} from 'lucide-react';
import { aboutData } from '../../content/about-me';

interface AboutPageProps {
  aboutData: typeof aboutData;
  siteSettings: {
    name: string;
    copyright: string;
  };
  navigation: {
    label: string;
    href: string;
    external?: boolean;
  }[];
  social: {
    linkedin: string;
    github: string;
    twitter: string;
  };
}

export function AboutPage({ siteSettings, navigation, social }: AboutPageProps) {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'figma': return <Figma className="w-4 h-4 text-[#00F0FF]" />;
      case 'cpu': return <Cpu className="w-4 h-4 text-[#7000FF]" />;
      case 'bar-chart-3': return <BarChart3 className="w-4 h-4 text-[#00F0FF]" />;
      case 'sparkles': return <Sparkles className="w-4 h-4 text-[#7000FF]" />;
      case 'graduation-cap': return <GraduationCap className="text-[#00F0FF] mt-1" />;
      case 'scroll': return <Scroll className="text-[#7000FF] mt-1" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="font-inter min-h-screen text-[#E0E0E0] overflow-x-hidden selection:bg-cyan-500 selection:text-white">
      {/* Ambient Orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-cyan-900 top-[-10%] left-[-10%] animate-pulse"></div>
      <div className="glow-orb w-[600px] h-[600px] bg-purple-900 bottom-[-10%] right-[-10%]"></div>

      <div className="container mx-auto px-6 py-12 max-w-5xl relative z-10">
        {/* Navigation */}
        <nav className="mb-12 flex justify-between items-center">
          <a href="#/" className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            Return to homepage
          </a>
          <div className="flex gap-4">
            <a href={aboutData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00F0FF] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
           <a href={`mailto:${aboutData.socialLinks.email}`} className="text-gray-400 hover:text-[#00F0FF] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </nav>

        {/* Hero: Cinematic Video Section */}
        <section className="video-container glass-card">
          <div className="video-overlay"></div>
          <div className="video-glass-overlay"></div>
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-80">
            <source src={aboutData.videoManifestoUrl} type="video/mp4" />
          </video>
          <div className="absolute bottom-10 left-10 z-20">
            <div className="text-[10px] text-[#00F0FF] uppercase tracking-[0.5em] mb-1">Visual Manifesto</div>
            <div className="text-xs text-gray-500 font-light">Strategic Expression / 2026</div>
          </div>
        </section>

        {/* Experience: The Journey */}
        <section className="mb-40">
          <h2 className="text-xs uppercase tracking-[0.4em] text-[#00F0FF] mb-16">The Career Evolution</h2>
          <div className="relative pl-8 md:pl-0">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 vision-line hidden md:block"></div>
            {aboutData.experience.map((job, index) => (
              <div key={index} className={`relative mb-24 md:flex items-center justify-between ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                <div className="md:w-[45%] mb-8 md:mb-0">
                  <div className={`glass-card p-8 rounded-3xl ${job.highlight ? 'border-[#00F0FF]/30' : ''}`}>
                    <div className={`text-[10px] font-bold mb-2 uppercase ${job.highlight ? 'text-[#00F0FF]' : 'text-[#7000FF]'}`}>{job.period}</div>
                    <h3 className="text-2xl font-syne font-bold mb-2">{job.role}</h3>
                    <div className="text-sm font-bold text-gray-300 mb-4">{job.company}</div>
                    <p className="text-sm text-gray-400 leading-relaxed font-light">{job.description}</p>
                  </div>
                </div>
                <div className={`absolute left-[-32px] md:left-1/2 md:ml-[-8px] w-4 h-4 rounded-full z-10 ${job.highlight ? 'bg-[#00F0FF] shadow-[0_0_15px_#00F0FF]' : 'bg-[#7000FF] shadow-[0_0_15px_#7000FF]'}`}></div>
                <div className={`md:w-[45%] hidden md:block text-sm text-gray-500 font-light ${index % 2 === 1 ? 'text-left' : 'text-right'}`}>
                  {index === 0 ? "Leading end-to-end implementation for B2B RCM optimization." : "Global IT services expertise spanning Healthcare & Fintech."}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Specialization & Tools */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-40">
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-[#00F0FF] mb-10">Specialization</h2>
            <div className="flex flex-wrap gap-3">
              {aboutData.specialization.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-[#7000FF] mb-10">The Toolkit</h2>
            <div className="grid grid-cols-2 gap-6">
              {aboutData.toolkit.map((tool, i) => (
                <div key={i} className="glass-card p-4 rounded-2xl flex items-center gap-3">
                  {getIcon(tool.icon)}
                  <span className="text-xs font-bold">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-40">
          <h2 className="text-xs uppercase tracking-[0.4em] text-[#00F0FF] mb-12">Academic Foundation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutData.education.map((edu, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl flex items-start gap-6">
                {getIcon(edu.icon)}
                <div>
                  <h4 className="text-lg font-bold font-syne">{edu.degree}</h4>
                  <p className="text-sm text-gray-500 mb-1">{edu.school}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-600">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        {/* Footer */}
<footer className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 pb-12">
  <div className="text-center md:text-left">
    <h3 className="text-3xl font-syne font-bold gradient-text">Let's create solutions.</h3>
    <p className="text-sm text-gray-500 mt-2">Currently available for strategic collaborations.</p>
  </div>
  
  {/* UPDATED LINE BELOW: Now uses aboutData.socialLinks.email */}
  <a 
    href={`mailto:${aboutData.socialLinks.email}`} 
    className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-[#00F0FF] transition-all"
  >
    Get in Touch
  </a>
</footer>
      </div>
    </div>
  );
}
