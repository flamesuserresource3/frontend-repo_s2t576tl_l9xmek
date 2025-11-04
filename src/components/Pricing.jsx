import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    caption: 'For hobby projects and early testing',
    features: ['Basic analytics', 'Community support', 'Up to 1k payments/mo'],
    cta: 'Get started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$29',
    caption: 'For small teams scaling revenue',
    features: ['Advanced analytics', 'Priority support', 'Up to 50k payments/mo'],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    name: 'Scale',
    price: '$99',
    caption: 'For established businesses',
    features: ['Custom SLA', 'Dedicated success', 'Unlimited volume'],
    cta: 'Contact sales',
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-gradient-to-b from-blue-50 to-teal-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">No hidden fees. Change or cancel anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border ${
                tier.highlight ? 'border-indigo-300 bg-white shadow-xl shadow-indigo-100' : 'border-slate-200 bg-white/80 shadow-sm'
              } p-6 transition`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                <span className="text-sm text-slate-500">{tier.caption}</span>
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-extrabold text-slate-900">{tier.price}</span>
                {tier.price !== 'Free' && <span className="text-slate-500">/mo</span>}
              </div>

              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-xl px-4 py-2 text-sm font-semibold shadow-sm transition ${
                  tier.highlight
                    ? 'bg-indigo-600 text-white shadow-indigo-200 hover:bg-indigo-500'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-500">
          Prices are in USD and billed monthly. Taxes may apply. Contact sales for custom enterprise plans.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
