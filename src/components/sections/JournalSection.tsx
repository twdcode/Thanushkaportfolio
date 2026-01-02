import React from 'react';

interface Article {
  category: string;
  title: string;
  description: string;
  readTime: string;
  link: string;
}

interface JournalSectionProps {
  heading: string;
  articles: Article[];
}

export function JournalSection({ heading, articles }: JournalSectionProps) {
  return (
    <section id="journal" className="mb-40">
      <h3 className="text-3xl font-syne font-bold mb-12">{heading}</h3>
      <div className="space-y-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="glass-card p-6 md:p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 group"
          >
            <div className="flex-grow">
              <div className="text-[10px] text-cyan-400 uppercase tracking-widest mb-2">
                {article.category}
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                {article.title}
              </h4>
              <p className="text-sm text-gray-500 font-light">{article.description}</p>
            </div>
            <div className="text-xs text-gray-500 font-mono">{article.readTime}</div>
            <a
              href={article.link}
              className="px-6 py-3 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-all"
            >
              Read Insight
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
