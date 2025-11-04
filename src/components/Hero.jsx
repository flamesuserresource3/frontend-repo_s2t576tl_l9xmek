import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, User } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-pink-50 via-indigo-50 to-blue-50">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/70" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        {/* Top navigation */}
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 shadow-sm">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold text-slate-800">PastelPay</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#pricing" className="text-sm font-medium text-slate-700 hover:text-slate-900">Pricing</a>
            <a href="#blog" className="text-sm font-medium text-slate-700 hover:text-slate-900">Blog</a>
            <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-slate-900">Contact</a>
            <button className="hidden rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:shadow md:block">
              Sign in
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-500">
              <User className="h-4 w-4" />
              Start free trial
            </button>
          </div>
        </div>

        {/* Hero text */}
        <div className="relative z-10 mt-6 flex flex-1 flex-col items-center justify-center text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur">
            Modern fintech infrastructure
          </span>
          <h1 className="mx-auto max-w-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-700 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
            Simple, secure payments for growing businesses
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:mt-6 sm:text-lg">
            Launch faster with a minimalist, pastel design. Powerful APIs, beautiful dashboards, and delightful developer experience.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#pricing"
              className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-500"
            >
              See pricing
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:shadow"
            >
              Talk to sales
            </a>
          </div>
          <div className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {["PCI-ready", "99.99% Uptime", "SOC2", "EU GDPR"].map((badge) => (
              <div
                key={badge}
                className="rounded-lg bg-white/70 p-2 text-center text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-200 backdrop-blur"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
