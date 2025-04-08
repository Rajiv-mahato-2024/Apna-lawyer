import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Plus, Search, Calendar, Clock, User, FileText, Briefcase, Filter, ChevronDown, CheckCircle2 } from 'lucide-react';

interface Case {
  id: string;
  title: string;
  caseNumber: string;
  court: string;
  type: string;
  status: 'open' | 'in-progress' | 'closed';
  date: string;
  client: string;
  description: string;
  nextHearing?: string;
}

const CaseTracker: React.FC = () => {
  const [cases, setCases] = useState<Case[]>([
    {
      id: '1',
      title: 'Sharma v. Patel Property Dispute',
      caseNumber: 'CIV-2025-1234',
      court: 'Delhi High Court',
      type: 'Civil',
      status: 'open',
      date: '15 Mar 2025',
      client: 'Anil Sharma',
      description: 'Property boundary dispute in Dwarka Sector 12',
      nextHearing: '25 Apr 2025'
    },
    {
      id: '2',
      title: 'State v. Mehra',
      caseNumber: 'CRIM-2025-5678',
      court: 'Delhi District Court',
      type: 'Criminal',
      status: 'in-progress',
      date: '03 Feb 2025',
      client: 'Raj Mehra',
      description: 'Defense against charges of reckless driving'
    },
    {
      id: '3',
      title: 'Kumar Incorporation Contract Review',
      caseNumber: 'COM-2025-9012',
      court: 'N/A',
      type: 'Commercial',
      status: 'closed',
      date: '10 Jan 2025',
      client: 'Kumar Inc.',
      description: 'Review and amendment of supplier agreements'
    }
  ]);

  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [newCase, setNewCase] = useState<Omit<Case, 'id'>>({
    title: '',
    caseNumber: '',
    court: '',
    type: '',
    status: 'open',
    date: '',
    client: '',
    description: '',
    nextHearing: ''
  });

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewCase(prev => ({ ...prev, [name]: value }));
  };

  const handleAddCase = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate a new ID
    const newId = (cases.length + 1).toString();

    // Add the new case to the cases array
    setCases(prev => [
      {
        id: newId,
        ...newCase
      },
      ...prev
    ]);

    // Reset the form and hide it
    setNewCase({
      title: '',
      caseNumber: '',
      court: '',
      type: '',
      status: 'open',
      date: '',
      client: '',
      description: '',
      nextHearing: ''
    });
    setShowAddForm(false);
  };

  // Filter cases based on active filter and search query
  const filteredCases = cases.filter(caseItem => {
    // Filter by status
    if (activeFilter !== 'all' && caseItem.status !== activeFilter) {
      return false;
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        caseItem.title.toLowerCase().includes(query) ||
        caseItem.caseNumber.toLowerCase().includes(query) ||
        caseItem.client.toLowerCase().includes(query) ||
        caseItem.court.toLowerCase().includes(query)
      );
    }

    return true;
  });

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <h1>Case Tracker</h1>

        <button
          className="btn btn-primary"
          onClick={() => setShowAddForm(true)}
        >
          <Plus size={18} />
          Add New Case
        </button>
      </div>

      <div className="dashboard-content">
        {/* Stats Cards */}
        <div className="dashboard-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <FileText size={24} />
            </div>
            <h3>Total Cases</h3>
            <div className="stat-value">{cases.length}</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <Briefcase size={24} />
            </div>
            <h3>Active Cases</h3>
            <div className="stat-value">
              {cases.filter(c => c.status === 'open' || c.status === 'in-progress').length}
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <CheckCircle2 size={24} />
            </div>
            <h3>Closed Cases</h3>
            <div className="stat-value">
              {cases.filter(c => c.status === 'closed').length}
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <Calendar size={24} />
            </div>
            <h3>Upcoming Hearings</h3>
            <div className="stat-value">
              {cases.filter(c => c.nextHearing).length}
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex justify-between items-center mb-6">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeFilter === 'all'
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => handleFilterChange('all')}
            >
              All Cases
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                activeFilter === 'open'
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => handleFilterChange('open')}
            >
              Open
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                activeFilter === 'in-progress'
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => handleFilterChange('in-progress')}
            >
              In Progress
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeFilter === 'closed'
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => handleFilterChange('closed')}
            >
              Closed
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="Search cases"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Case List */}
        <div className="space-y-4">
          {filteredCases.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <FileText size={32} className="mx-auto mb-4 opacity-50" />
              <p>No cases found</p>
            </div>
          ) : (
            filteredCases.map(caseItem => (
              <div key={caseItem.id} className="case-item">
                <div className="case-header">
                  <h3 className="case-title">{caseItem.title}</h3>
                  <span className={`case-status status-${caseItem.status}`}>
                    {caseItem.status === 'in-progress' ? 'In Progress' : caseItem.status.charAt(0).toUpperCase() + caseItem.status.slice(1)}
                  </span>
                </div>

                <div className="case-info">
                  <div className="info-item">
                    <FileText size={16} />
                    <span>Case #: {caseItem.caseNumber}</span>
                  </div>

                  <div className="info-item">
                    <Briefcase size={16} />
                    <span>Type: {caseItem.type}</span>
                  </div>

                  <div className="info-item">
                    <User size={16} />
                    <span>Client: {caseItem.client}</span>
                  </div>

                  <div className="info-item">
                    <Calendar size={16} />
                    <span>Filed: {caseItem.date}</span>
                  </div>

                  {caseItem.nextHearing && (
                    <div className="info-item">
                      <Clock size={16} />
                      <span>Next Hearing: {caseItem.nextHearing}</span>
                    </div>
                  )}
                </div>

                <div className="case-description">
                  {caseItem.description}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Add Case Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4">Add New Case</h2>

              <form onSubmit={handleAddCase}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="form-group">
                    <label className="form-label" htmlFor="title">
                      Case Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={newCase.title}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="caseNumber">
                      Case Number
                    </label>
                    <input
                      type="text"
                      id="caseNumber"
                      name="caseNumber"
                      value={newCase.caseNumber}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="court">
                      Court
                    </label>
                    <input
                      type="text"
                      id="court"
                      name="court"
                      value={newCase.court}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="type">
                      Case Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={newCase.type}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="" disabled>Select case type</option>
                      <option value="Civil">Civil</option>
                      <option value="Criminal">Criminal</option>
                      <option value="Family">Family</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Tax">Tax</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="status">
                      Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      value={newCase.status}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="open">Open</option>
                      <option value="in-progress">In Progress</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="date">
                      Filing Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={newCase.date}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="client">
                      Client Name
                    </label>
                    <input
                      type="text"
                      id="client"
                      name="client"
                      value={newCase.client}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="nextHearing">
                      Next Hearing Date (optional)
                    </label>
                    <input
                      type="date"
                      id="nextHearing"
                      name="nextHearing"
                      value={newCase.nextHearing}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="description">
                    Case Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={newCase.description}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows={3}
                    required
                  ></textarea>
                </div>

                <div className="flex justify-end mt-6 space-x-2">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowAddForm(false)}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Add Case
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CaseTracker;
