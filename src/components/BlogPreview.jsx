import React from 'react';
import { Rocket } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Designing Pastel-first Fintech Interfaces',
    excerpt: 'How soft palettes and generous whitespace can build trust in financial products.',
    tag: 'Design',
    date: 'Oct 2025',
  },
  {
    id: 2,
    title: 'Scaling Payments to Millions of Transactions',
    excerpt: 'A practical guide to architecting resilient, event-driven payment systems.',
    tag: 'Engineering',
    date: 'Oct 2025',
  },
  {
    id: 3,
    title: 'From MVP to Monetization: Pricing That Works',
    excerpt: 'Patterns for finding the right price points as your SaaS grows.',
    tag: 'Growth',
    date: 'Sep 2025',
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="w-full bg-gradient-to-b from-teal-50 to-pink-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Latest from our blog</h2>
          <p className="mt-3 text-slate-600">Insights on design, engineering, and growing modern SaaS products.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-2 text-xs font-medium text-indigo-700">
                <span className="inline-block rounded-full bg-indigo-100 px-2 py-1">{post.tag}</span>
                <span className="text-slate-500">{post.date}</span>
              </div>
              <h3 className="mt-4 line-clamp-2 bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-lg font-semibold text-transparent group-hover:from-indigo-900 group-hover:to-slate-800">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-slate-600">{post.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700">
                Read article
                <Rocket className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
