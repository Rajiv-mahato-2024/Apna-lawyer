import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { FileText, ChevronRight, Download, Copy, Edit } from 'lucide-react';

interface Template {
  id: string;
  title: string;
  description: string;
  category: 'business' | 'personal' | 'property' | 'employment' | 'intellectual';
  icon: React.ReactNode;
}

const TemplateGenerator: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [generatedDocument, setGeneratedDocument] = useState<string>('');

  const templates: Template[] = [
    {
      id: '1',
      title: 'Rental Agreement',
      description: 'Standard residential rental agreement template with customizable terms',
      category: 'property',
      icon: <FileText size={32} />
    },
    {
      id: '2',
      title: 'Employment Contract',
      description: 'General employment contract with standard clauses for hiring new employees',
      category: 'employment',
      icon: <FileText size={32} />
    },
    {
      id: '3',
      title: 'NDA Agreement',
      description: 'Non-disclosure agreement to protect confidential information',
      category: 'business',
      icon: <FileText size={32} />
    },
    {
      id: '4',
      title: 'Power of Attorney',
      description: 'Authorization for someone to act on your behalf in legal matters',
      category: 'personal',
      icon: <FileText size={32} />
    },
    {
      id: '5',
      title: 'Terms of Service',
      description: 'Website or application terms of service agreement template',
      category: 'business',
      icon: <FileText size={32} />
    },
    {
      id: '6',
      title: 'Privacy Policy',
      description: 'Standard privacy policy template for websites and applications',
      category: 'business',
      icon: <FileText size={32} />
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Templates' },
    { id: 'business', label: 'Business' },
    { id: 'personal', label: 'Personal' },
    { id: 'property', label: 'Property' },
    { id: 'employment', label: 'Employment' },
    { id: 'intellectual', label: 'Intellectual Property' }
  ];

  const filteredTemplates = activeCategory === 'all'
    ? templates
    : templates.filter(template => template.category === activeCategory);

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    setFormData({});
    setShowPreview(false);

    // Reset form data with template specific fields
    if (template.id === '1') { // Rental Agreement
      setFormData({
        landlordName: '',
        tenantName: '',
        propertyAddress: '',
        rentAmount: '',
        leaseStartDate: '',
        leaseDuration: '',
        securityDeposit: ''
      });
    } else if (template.id === '2') { // Employment Contract
      setFormData({
        employerName: '',
        employeeName: '',
        position: '',
        startDate: '',
        salary: '',
        workHours: '',
        benefits: ''
      });
    } else if (template.id === '3') { // NDA
      setFormData({
        disclosingParty: '',
        receivingParty: '',
        purpose: '',
        effectiveDate: '',
        durationMonths: '',
        governingLaw: ''
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerateDocument = () => {
    // In a real application, this would call an API to generate the document
    // Here we'll just simulate document generation with template strings

    let documentText = '';

    if (selectedTemplate?.id === '1') { // Rental Agreement
      documentText = `RESIDENTIAL RENTAL AGREEMENT

THIS RENTAL AGREEMENT ("Agreement") is made and entered into on ${new Date().toLocaleDateString()}, by and between ${formData.landlordName} ("Landlord") and ${formData.tenantName} ("Tenant").

1. PROPERTY
   Landlord rents to Tenant and Tenant rents from Landlord, for residential purposes only, the premises located at ${formData.propertyAddress} ("the Premises").

2. TERM
   The term of this Agreement shall begin on ${formData.leaseStartDate} and shall be for a period of ${formData.leaseDuration} months.

3. RENT
   Tenant shall pay to Landlord as rent for the Premises the sum of ₹${formData.rentAmount} per month, due and payable monthly in advance on the first day of each month.

4. SECURITY DEPOSIT
   Upon execution of this Agreement, Tenant shall deposit with Landlord the sum of ₹${formData.securityDeposit} as a security deposit.

5. UTILITIES
   Tenant shall be responsible for the payment of all utilities and services, except for the following which shall be paid by Landlord: None.

6. MAINTENANCE
   Tenant shall keep and maintain the Premises in good and sanitary condition during the term of this Agreement.

7. ALTERATIONS
   Tenant shall not make any alterations, additions, or improvements to the Premises without the prior written consent of Landlord.

8. TERMINATION
   Either party may terminate this Agreement at the end of the term by giving at least 30 days written notice prior to the end of the term.

9. GOVERNING LAW
   This Agreement shall be governed by and construed in accordance with the laws of India.

IN WITNESS WHEREOF, the parties hereto have executed this Agreement on the date first above written.

__________________________
${formData.landlordName}, Landlord

__________________________
${formData.tenantName}, Tenant`;
    } else if (selectedTemplate?.id === '2') { // Employment Contract
      documentText = `EMPLOYMENT AGREEMENT

THIS EMPLOYMENT AGREEMENT ("Agreement") is made and entered into as of ${new Date().toLocaleDateString()} by and between ${formData.employerName} ("Employer") and ${formData.employeeName} ("Employee").

1. POSITION AND DUTIES
   Employer hereby employs Employee as ${formData.position}, and Employee hereby accepts such employment, on the terms and conditions set forth herein.

2. TERM
   The term of this Agreement shall commence on ${formData.startDate} and shall continue until terminated as provided herein.

3. COMPENSATION
   As compensation for the services to be performed by Employee, Employer shall pay Employee a base salary at the rate of ₹${formData.salary} per annum, payable in accordance with Employer's normal payroll procedures.

4. WORKING HOURS
   Employee shall work ${formData.workHours} hours per week, Monday through Friday, with such additional hours as may be reasonably necessary to perform Employee's duties.

5. BENEFITS
   Employee shall be entitled to the following benefits: ${formData.benefits}

6. TERMINATION
   This Agreement may be terminated by either party upon thirty (30) days written notice to the other party.

7. GOVERNING LAW
   This Agreement shall be governed by and construed in accordance with the laws of India.

IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the date first above written.

__________________________
${formData.employerName}, Employer

__________________________
${formData.employeeName}, Employee`;
    } else if (selectedTemplate?.id === '3') { // NDA
      documentText = `NON-DISCLOSURE AGREEMENT

THIS NON-DISCLOSURE AGREEMENT ("Agreement") is made and entered into as of ${formData.effectiveDate} by and between ${formData.disclosingParty} ("Disclosing Party") and ${formData.receivingParty} ("Receiving Party").

1. PURPOSE
   The parties wish to explore a business opportunity of mutual interest, specifically: ${formData.purpose}

2. CONFIDENTIAL INFORMATION
   "Confidential Information" means any information disclosed by Disclosing Party to Receiving Party, either directly or indirectly, in writing, orally or by inspection of tangible objects, that is designated as "Confidential," "Proprietary" or some similar designation.

3. NON-DISCLOSURE
   Receiving Party agrees not to use any Confidential Information for any purpose except to evaluate and engage in discussions concerning a potential business relationship between the parties.

4. TERM
   This Agreement shall remain in effect for a period of ${formData.durationMonths} months from the Effective Date.

5. GOVERNING LAW
   This Agreement shall be governed by and construed in accordance with the laws of ${formData.governingLaw}.

IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the date first above written.

__________________________
${formData.disclosingParty}, Disclosing Party

__________________________
${formData.receivingParty}, Receiving Party`;
    }

    setGeneratedDocument(documentText);
    setShowPreview(true);
  };

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <h1>Legal Document Templates</h1>
      </div>

      <div className="dashboard-content">
        {!selectedTemplate ? (
          <>
            <div className="template-categories mb-6">
              <div className="flex space-x-4 overflow-x-auto pb-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full text-sm ${
                      activeCategory === category.id
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="dashboard-grid">
              {filteredTemplates.map(template => (
                <div
                  key={template.id}
                  className="template-card"
                  onClick={() => handleTemplateSelect(template)}
                >
                  <div className="template-img">
                    {template.icon}
                  </div>
                  <div className="template-content">
                    <h3 className="template-title">{template.title}</h3>
                    <p className="template-description">{template.description}</p>
                    <button className="text-blue-600 text-sm flex items-center">
                      Use template <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="template-form">
            <button
              className="mb-6 text-blue-600 flex items-center"
              onClick={() => setSelectedTemplate(null)}
            >
              <ChevronRight className="rotate-180 mr-1" size={16} />
              Back to templates
            </button>

            {!showPreview ? (
              <div className="dashboard-card">
                <h2 className="text-xl font-semibold mb-6">{selectedTemplate.title}</h2>

                <div className="mb-6">
                  <p className="text-gray-600">{selectedTemplate.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.keys(formData).map(key => (
                    <div key={key} className="form-group">
                      <label className="form-label" htmlFor={key}>
                        {key.replace(/([A-Z])/g, ' $1')
                          .replace(/^./, str => str.toUpperCase())
                          .replace(/([a-z])([A-Z])/g, '$1 $2')}
                      </label>
                      <input
                        type={key.includes('date') ? 'date' : (key.includes('amount') || key.includes('salary') || key.includes('deposit') ? 'number' : 'text')}
                        id={key}
                        name={key}
                        value={formData[key]}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={handleGenerateDocument}
                  >
                    Generate Document
                  </button>
                </div>
              </div>
            ) : (
              <div className="dashboard-card">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">{selectedTemplate.title} Preview</h2>
                  <div className="flex space-x-2">
                    <button className="btn btn-secondary">
                      <Edit size={16} />
                      Edit
                    </button>
                    <button className="btn btn-secondary">
                      <Copy size={16} />
                      Copy
                    </button>
                    <button className="btn btn-primary">
                      <Download size={16} />
                      Download
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <pre className="whitespace-pre-wrap font-mono text-sm">
                    {generatedDocument}
                  </pre>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default TemplateGenerator;
