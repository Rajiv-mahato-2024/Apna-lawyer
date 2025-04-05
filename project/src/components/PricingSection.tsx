import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const tiers = [
    {
      name: 'Basic',
      price: 'Free',
      features: [
        'AI Legal Chat Assistant',
        'Document Templates',
        'Basic Legal Research',
        'Email Support'
      ]
    },
    {
      name: 'Professional',
      price: '$9.99',
      features: [
        'Everything in Basic',
        'Advanced Document Analysis',
        'Contract Management',
        'Priority Support',
        'Compliance Monitoring'
      ]
    },
    {
      name: 'Enterprise',
      price: '$19.99',
      features: [
        'Everything in Professional',
        'Custom Integration',
        'Team Collaboration',
        'Advanced Analytics',
        'Dedicated Account Manager',
        'Custom Contract Templates'
      ]
    }
  ];

  return (
    <div id="pricing" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  {tier.price !== 'Free' && <span className="text-gray-500">/month</span>}
                </p>
                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;