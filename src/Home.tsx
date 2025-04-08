import { useState } from 'react';
import { ArrowRight, Scale, Shield, FileText, MessageSquare, Building2, Brain, Globe2, ChevronDown, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import { useAuth } from './context/AuthContext';

function Home() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Demo video URL - using a sample YouTube video about legal tech
  const demoVideoUrl = "https://youtu.be/-Z2vw8eE9P8?si=UBDGgYIrZ9DgAluc";

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  // Handle click on get started button
  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/chatDemo');
    } else {
      navigate('/login');
    }
  };

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
              <Scale className="h-8 w-8 text-blue-700" />
              <span className="ml-2 text-xl font-bold text-black">ApnaLawyer AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <div className="relative group">
                <button className="text-gray-600 hover:text-gray-900 flex items-center">
                  Tools <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                  <button onClick={() => navigate('/chatDemo')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                    AI Legal Chat
                  </button>
                  <button onClick={() => navigate('/document-analysis')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                    Document Analysis
                  </button>
                  <button onClick={() => navigate('/template-generator')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                    Template Generator
                  </button>
                  <button onClick={() => navigate('/case-tracker')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                    Case Tracker
                  </button>
                </div>
              </div>
              <button className="text-gray-600 hover:text-gray-900 flex items-center" onClick={openVideoModal}>
                <Play className="mr-1 h-4 w-4" />
                Watch Demo
              </button>
              {isAuthenticated ? (
                <button onClick={() => navigate('/chatDemo')} className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                  Dashboard
                </button>
              ) : (
                <div className="flex space-x-4">
                  <button onClick={() => navigate('/login')} className="text-blue-700 px-4 py-2 rounded-lg hover:text-blue-800 transition-colors">
                    Login
                  </button>
                  <button onClick={() => navigate('/signup')} className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Modified Hero component with getStarted handler */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Legal advice powered by</span>
                  <span className="block text-blue-700">artificial intelligence</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Get instant legal guidance, draft documents, and manage compliance with our AI-powered platform. Available 24/7, affordable, and tailored to your needs.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button
                      onClick={handleGetStarted}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      onClick={openVideoModal}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Watch demo
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            alt="Professional legal consultation"
          />
        </div>
      </div>

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

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoUrl={demoVideoUrl}
      />
    </div>
  );
}

export default Home;
