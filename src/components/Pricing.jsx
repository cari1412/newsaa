import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Basic',
      description: 'A basic plan for startups and individual users',
      price: { monthly: 10, annual: 8 },
      features: [
        'AI-powered analytics',
        'Basic support',
        '5 projects limit',
        'Access to basic AI tools',
      ],
      highlighted: false,
    },
    {
      name: 'Premium',
      description: 'A premium plan for growing businesses',
      price: { monthly: 20, annual: 16 },
      features: [
        'Advanced AI insights',
        'Priority support',
        'Unlimited projects',
        'Access to all AI tools',
        'Custom integrations',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'An enterprise plan with advanced features for large organizations',
      price: { monthly: 50, annual: 40 },
      features: [
        'Custom AI solutions',
        '24/7 dedicated support',
        'Unlimited projects',
        'Access to all AI tools',
        'Custom integrations',
        'Data security and compliance',
      ],
      highlighted: false,
    },
    {
      name: 'Ultimate',
      description: 'The ultimate plan with all features for industry leaders',
      price: { monthly: 80, annual: 64 },
      features: [
        'Bespoke AI development',
        'White-glove support',
        'Unlimited projects',
        'Priority access to new AI tools',
        'Custom integrations',
        'Highest data security and compliance',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Simple pricing for everyone.
          </p>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-8">
            Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center mb-8 space-x-3">
            <span className={`${!isAnnual ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`${isAnnual ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                <Sparkles className="w-3 h-3" />
                <span>2 MONTHS FREE</span>
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-purple-500 to-pink-500 p-[2px]'
                  : 'border border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <div className={`h-full rounded-2xl p-6 ${
                plan.highlighted
                  ? 'bg-white dark:bg-gray-900'
                  : 'bg-gray-50 dark:bg-gray-800'
              }`}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">
                    / month
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-full font-medium transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transform hover:scale-105'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;