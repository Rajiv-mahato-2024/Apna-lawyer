import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  // Handle clicks on the backdrop (outside the modal content)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-lg w-full max-w-4xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-semibold text-gray-900">
            ApnaLawyer Demo Video
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5"
            onClick={onClose}
          >
            <X size={20} />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-6">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4 text-gray-600 text-sm">
            <p>This demo showcases the key features of ApnaLawyer AI, including:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>AI-powered legal assistant for instant guidance</li>
              <li>Document analysis with risk assessment</li>
              <li>Legal template generation</li>
              <li>Case tracking and management</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end p-4 border-t">
          <button
            type="button"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
            onClick={() => window.location.href = '/signup'}
          >
            Try It Yourself
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
