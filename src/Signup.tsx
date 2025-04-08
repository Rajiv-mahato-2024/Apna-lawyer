import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Role = 'consumer' | 'lawyer' | 'student' | 'other' | null;

interface RoleOptionProps {
  icon: string;
  label: string;
  selected: boolean;
  onClick: () => void;
}

const RoleOption: React.FC<RoleOptionProps> = ({ icon, label, selected, onClick }) => {
  return (
    <div 
      className={`flex items-center justify-between p-4 border border-gray-300 rounded-full cursor-pointer hover:border-gray-400 ${selected ? 'border-gray-600' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <span className="text-xl">{icon}</span>
        <span className="ml-3 text-gray-800">{label}</span>
      </div>
      <div className={`w-5 h-5 border-2 rounded-full ${selected ? 'border-4 border-gray-600' : 'border-gray-300'}`}></div>
    </div>
  );
};

const Signup: React.FC = () => {
  const navigate = useNavigate();  
  const [selectedRole, setSelectedRole] = useState<Role>(null);
  
  const handleRoleSelection = (role: Role) => {
    setSelectedRole(role);
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome to AI Lawyer</h1>
          <p className="mt-2 text-lg text-gray-600">To create an account, choose your role</p>
        </div>
        
        <div className="mt-8 space-y-4">
          <RoleOption 
            icon="💻"
            label="I'm a legal consumer"
            selected={selectedRole === 'consumer'}
            onClick={() => handleRoleSelection('consumer')}
          />
          
          <RoleOption 
            icon="💼"
            label="I'm a lawyer"
            selected={selectedRole === 'lawyer'}
            onClick={() => handleRoleSelection('lawyer')}
          />
          
          <RoleOption 
            icon="📚"
            label="I'm a law student"
            selected={selectedRole === 'student'}
            onClick={() => handleRoleSelection('student')}
          />
          
          <RoleOption 
            icon="👤"
            label="Other"
            selected={selectedRole === 'other'}
            onClick={() => handleRoleSelection('other')}
          />
        </div>
        
        <button 
          onClick={() => navigate('/chatDemo')}
          className="w-full py-3 mt-8 text-white bg-black rounded-full hover:bg-gray-500 transition duration-300"
        >
          Choose and continue
        </button>
        
        <div className="mt-6 text-center">
          <span className="text-gray-600">Already have an account? </span>
          <a href="#" className="text-purple-500 hover:underline">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;