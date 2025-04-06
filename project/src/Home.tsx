import { ArrowRight, Scale, Shield, FileText, MessageSquare, Building2, Brain, Globe2 } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';


function Home() {
  const navigate = useNavigate();
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "AI Legal Assistant",
      description: "Get instant legal guidance in plain language through our advanced chatbot"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Tools",
      description: "Draft and review legal documents with AI-powered risk analysis"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Business Solutions",
      description: "Comprehensive B2B contract management and compliance monitoring"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Dispute Resolution",
      description: "Generate legal letters and get strategic resolution suggestions"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Smart Analysis",
      description: "Real-time document feedback with intelligent annotations"
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Multilingual Support",
      description: "Access legal services in multiple languages with instant translation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ApnaLawyer AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <button onClick={() => navigate('/chatDemo')} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Try Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Hero />

      <div id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Comprehensive Legal Solutions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Powerful tools to handle all your legal needs
            </p>
          </div>
          <FeatureGrid features={features} />
        </div>
      </div>

      <PricingSection />
      <Footer />
    </div>
  );
}

export default Home;