import React from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              {feature.icon}
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">{feature.title}</h3>
            <p className="mt-2 text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;