import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { User, Mail, Phone, MapPin, Briefcase, Edit2, Camera, Lock, Key, Bell, UserCircle, LogOut } from 'lucide-react';

// Profile interface
interface Profile {
  name: string;
  email: string;
  phone: string;
  address: string;
  occupation: string;
  bio: string;
}

// Setting interface
interface Setting {
  emailNotifications: boolean;
  smsNotifications: boolean;
  twoFactorAuth: boolean;
  darkMode: boolean;
  language: string;
}

const Profile: React.FC = () => {
  // Active tab state
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'preferences'>('profile');

  // Profile state
  const [profile, setProfile] = useState<Profile>({
    name: 'Rajiv Mahato',
    email: 'rajiv.mahato@example.com',
    phone: '+91 98765 43210',
    address: 'New Delhi, India',
    occupation: 'Software Engineer',
    bio: 'I am a software engineer with interest in legal tech and AI solutions. I believe in making legal services accessible to everyone through technology.'
  });

  // Settings state
  const [settings, setSettings] = useState<Setting>({
    emailNotifications: true,
    smsNotifications: false,
    twoFactorAuth: false,
    darkMode: false,
    language: 'english'
  });

  // Edit mode state
  const [editMode, setEditMode] = useState<boolean>(false);

  // Handle profile edit
  const handleProfileEdit = () => {
    setEditMode(true);
  };

  // Handle profile save
  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    setEditMode(false);
    // In a real app, you would save the profile to a backend here
  };

  // Handle profile field change
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle setting toggle
  const handleSettingToggle = (setting: keyof Setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  // Handle language change
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings(prev => ({
      ...prev,
      language: e.target.value
    }));
  };

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <h1>My Profile</h1>

        {activeTab === 'profile' && !editMode && (
          <button className="btn btn-primary" onClick={handleProfileEdit}>
            <Edit2 size={18} />
            Edit Profile
          </button>
        )}
      </div>

      <div className="dashboard-content">
        <div className="profile-header">
          <div className="profile-avatar">
            <UserCircle size={64} />
            <div className="avatar-edit-button">
              <Camera size={16} />
            </div>
          </div>

          <div className="profile-info">
            <h2>{profile.name}</h2>
            <p>{profile.occupation}</p>
          </div>
        </div>

        <div className="profile-tabs">
          <div
            className={`profile-tab ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </div>
          <div
            className={`profile-tab ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            Security
          </div>
          <div
            className={`profile-tab ${activeTab === 'preferences' ? 'active' : ''}`}
            onClick={() => setActiveTab('preferences')}
          >
            Preferences
          </div>
        </div>

        {activeTab === 'profile' && (
          <div className="dashboard-card">
            {!editMode ? (
              <div className="profile-view">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="profile-field">
                    <div className="field-label">
                      <User size={18} />
                      <span>Full Name</span>
                    </div>
                    <div className="field-value">{profile.name}</div>
                  </div>

                  <div className="profile-field">
                    <div className="field-label">
                      <Mail size={18} />
                      <span>Email</span>
                    </div>
                    <div className="field-value">{profile.email}</div>
                  </div>

                  <div className="profile-field">
                    <div className="field-label">
                      <Phone size={18} />
                      <span>Phone</span>
                    </div>
                    <div className="field-value">{profile.phone}</div>
                  </div>

                  <div className="profile-field">
                    <div className="field-label">
                      <MapPin size={18} />
                      <span>Address</span>
                    </div>
                    <div className="field-value">{profile.address}</div>
                  </div>

                  <div className="profile-field">
                    <div className="field-label">
                      <Briefcase size={18} />
                      <span>Occupation</span>
                    </div>
                    <div className="field-value">{profile.occupation}</div>
                  </div>
                </div>

                <div className="profile-field mt-6">
                  <div className="field-label">
                    <User size={18} />
                    <span>Bio</span>
                  </div>
                  <div className="field-value">{profile.bio}</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleProfileSave}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={profile.name}
                      onChange={handleProfileChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={profile.phone}
                      onChange={handleProfileChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="address">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={profile.address}
                      onChange={handleProfileChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="occupation">
                      Occupation
                    </label>
                    <input
                      type="text"
                      id="occupation"
                      name="occupation"
                      value={profile.occupation}
                      onChange={handleProfileChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group mt-6">
                  <label className="form-label" htmlFor="bio">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={profile.bio}
                    onChange={handleProfileChange}
                    className="form-textarea"
                    rows={4}
                  ></textarea>
                </div>

                <div className="flex justify-end mt-6 space-x-2">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setEditMode(false)}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {activeTab === 'security' && (
          <div className="dashboard-card">
            <h2 className="text-xl font-semibold mb-6">Security Settings</h2>

            <div className="security-section mb-8">
              <h3 className="text-lg font-medium mb-4">Change Password</h3>

              <form>
                <div className="grid grid-cols-1 gap-4 max-w-md">
                  <div className="form-group">
                    <label className="form-label" htmlFor="currentPassword">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="currentPassword"
                        className="form-input pl-10"
                        placeholder="Enter current password"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Lock size={16} className="text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="newPassword">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="newPassword"
                        className="form-input pl-10"
                        placeholder="Enter new password"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Key size={16} className="text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="confirmPassword">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="confirmPassword"
                        className="form-input pl-10"
                        placeholder="Confirm new password"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Key size={16} className="text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <button type="submit" className="btn btn-primary">
                      Update Password
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="security-section">
              <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>

              <div className="flex items-center mb-4">
                <div className="form-check form-switch">
                  <input
                    type="checkbox"
                    id="twoFactorAuth"
                    className="form-check-input"
                    checked={settings.twoFactorAuth}
                    onChange={() => handleSettingToggle('twoFactorAuth')}
                  />
                  <label className="form-check-label" htmlFor="twoFactorAuth">
                    Enable Two-Factor Authentication
                  </label>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                Two-factor authentication adds an extra layer of security to your account by requiring more than just a password to sign in.
              </p>

              {!settings.twoFactorAuth && (
                <button className="btn btn-secondary">
                  Setup Two-Factor Authentication
                </button>
              )}
            </div>
          </div>
        )}

        {activeTab === 'preferences' && (
          <div className="dashboard-card">
            <h2 className="text-xl font-semibold mb-6">Preferences</h2>

            <div className="preferences-section mb-8">
              <h3 className="text-lg font-medium mb-4">Notifications</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Mail size={20} className="mr-3 text-gray-400" />
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-gray-500">Receive case updates and reminders via email</p>
                    </div>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      id="emailNotifications"
                      className="form-check-input"
                      checked={settings.emailNotifications}
                      onChange={() => handleSettingToggle('emailNotifications')}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Phone size={20} className="mr-3 text-gray-400" />
                    <div>
                      <p className="font-medium">SMS Notifications</p>
                      <p className="text-sm text-gray-500">Receive case updates and reminders via SMS</p>
                    </div>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      id="smsNotifications"
                      className="form-check-input"
                      checked={settings.smsNotifications}
                      onChange={() => handleSettingToggle('smsNotifications')}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="preferences-section mb-8">
              <h3 className="text-lg font-medium mb-4">Appearance</h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bell size={20} className="mr-3 text-gray-400" />
                  <div>
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-gray-500">Toggle dark mode on or off</p>
                  </div>
                </div>
                <div className="form-check form-switch">
                  <input
                    type="checkbox"
                    id="darkMode"
                    className="form-check-input"
                    checked={settings.darkMode}
                    onChange={() => handleSettingToggle('darkMode')}
                  />
                </div>
              </div>
            </div>

            <div className="preferences-section">
              <h3 className="text-lg font-medium mb-4">Language & Region</h3>

              <div className="form-group max-w-md">
                <label className="form-label" htmlFor="language">
                  Language
                </label>
                <select
                  id="language"
                  className="form-select"
                  value={settings.language}
                  onChange={handleLanguageChange}
                >
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="bengali">Bengali</option>
                  <option value="tamil">Tamil</option>
                  <option value="telugu">Telugu</option>
                  <option value="marathi">Marathi</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Profile;
