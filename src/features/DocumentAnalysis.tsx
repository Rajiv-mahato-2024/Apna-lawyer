import React, { useState, useRef } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { FileUp, X, FileText, AlertTriangle, Eye, Download, Trash2 } from 'lucide-react';

interface FileItem {
  id: string;
  name: string;
  size: string;
  uploadDate: string;
  status: 'processing' | 'analyzed' | 'error';
}

const DocumentAnalysis: React.FC = () => {
  const [files, setFiles] = useState<FileItem[]>([
    {
      id: '1',
      name: 'Rental_Agreement_Draft.pdf',
      size: '2.4 MB',
      uploadDate: '12 Apr 2025',
      status: 'analyzed'
    },
    {
      id: '2',
      name: 'Employee_Contract.docx',
      size: '1.8 MB',
      uploadDate: '10 Apr 2025',
      status: 'analyzed'
    }
  ]);

  const [dragActive, setDragActive] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [analysisResult, setAnalysisResult] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Generate a new file ID
    const newFileId = (files.length + 1).toString();

    // Format file size
    const sizeInMB = file.size / (1024 * 1024);
    const fileSize = sizeInMB.toFixed(2) + ' MB';

    // Format date
    const date = new Date();
    const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;

    // Create new file item
    const newFile: FileItem = {
      id: newFileId,
      name: file.name,
      size: fileSize,
      uploadDate: formattedDate,
      status: 'processing'
    };

    // Add to files list
    setFiles(prevFiles => [newFile, ...prevFiles]);

    // Simulate processing (would be an API call in a real application)
    setTimeout(() => {
      setFiles(prevFiles =>
        prevFiles.map(f =>
          f.id === newFileId ? { ...f, status: 'analyzed' } : f
        )
      );
    }, 2000);
  };

  const handleViewFile = (file: FileItem) => {
    setSelectedFile(file);

    // Mock analysis results
    if (file.status === 'analyzed') {
      if (file.name.includes('Rental')) {
        setAnalysisResult(`# Document Analysis: ${file.name}

## Risk Assessment
- **Overall Risk Level**: Medium
- **Legal Compliance**: 92%

## Key Issues Identified
1. **Clause 8.2**: The termination notice period of 7 days may not comply with local rental laws, which typically require 30 days notice.
2. **Clause 12.3**: The liability limitation conflicts with consumer protection laws in several jurisdictions.
3. **Missing clause**: No clear provision for security deposit return timeline.

## Recommendations
- Extend termination notice period to 30 days
- Remove or modify the liability limitation clause
- Add security deposit return timeline (typically 14-30 days)
- Include a dispute resolution mechanism

## Strengths
- Clear payment terms
- Well-defined maintenance responsibilities
- Properly structured renewal conditions`);
      } else {
        setAnalysisResult(`# Document Analysis: ${file.name}

## Risk Assessment
- **Overall Risk Level**: Low
- **Legal Compliance**: 97%

## Key Issues Identified
1. **Section 4.1**: Non-compete clause geographical scope may be too broad to be enforceable in some jurisdictions.
2. **Section 7.3**: Intellectual property assignment needs more specificity regarding pre-existing IP.

## Recommendations
- Limit non-compete geographical scope to regions where the company actually operates
- Add language to intellectual property clause clarifying treatment of pre-existing IP
- Consider adding more detail to the dispute resolution mechanism

## Strengths
- Comprehensive confidentiality provisions
- Clear compensation structure
- Well-defined term and termination conditions
- Compliance with labor laws`);
      }
    }
  };

  const handleRemoveFile = (id: string) => {
    setFiles(prevFiles => prevFiles.filter(file => file.id !== id));

    if (selectedFile && selectedFile.id === id) {
      setSelectedFile(null);
      setAnalysisResult('');
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <h1>Document Analysis</h1>

        <button className="btn btn-primary">
          <FileUp size={18} />
          New Analysis
        </button>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2 className="text-xl font-semibold mb-4">Upload Legal Document</h2>

          <div
            className={`file-upload ${dragActive ? 'border-primary-color' : ''}`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            onClick={onButtonClick}
          >
            <div className="file-upload-icon">
              <FileUp size={40} />
            </div>
            <p className="mb-2 font-medium">Drag and drop your file here</p>
            <p className="text-sm text-gray-500 mb-3">or click to browse your files</p>
            <p className="text-xs text-gray-400">Supported formats: PDF, DOCX, DOC, TXT (Max 10MB)</p>

            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleChange}
              accept=".pdf,.doc,.docx,.txt"
            />
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h2 className="text-xl font-semibold mb-4">Your Documents</h2>

            <div className="file-list">
              {files.length === 0 ? (
                <p className="text-center text-gray-500 py-4">No documents uploaded yet</p>
              ) : (
                files.map(file => (
                  <div key={file.id} className="file-item">
                    <div className="file-item-name">
                      <div className="file-item-icon">
                        <FileText size={20} />
                      </div>
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.size} • {file.uploadDate}</p>
                      </div>
                    </div>

                    <div className="file-item-status">
                      {file.status === 'processing' && (
                        <span className="text-yellow-500 text-sm flex items-center">
                          <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                          Processing
                        </span>
                      )}
                      {file.status === 'analyzed' && (
                        <span className="text-green-500 text-sm flex items-center">
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          Analyzed
                        </span>
                      )}
                      {file.status === 'error' && (
                        <span className="text-red-500 text-sm flex items-center">
                          <AlertTriangle size={14} className="mr-1" />
                          Error
                        </span>
                      )}
                    </div>

                    <div className="file-item-actions">
                      <button onClick={() => handleViewFile(file)} title="View analysis">
                        <Eye size={18} />
                      </button>
                      <button title="Download document">
                        <Download size={18} />
                      </button>
                      <button onClick={() => handleRemoveFile(file.id)} title="Delete document">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="dashboard-card">
            <h2 className="text-xl font-semibold mb-4">
              {selectedFile ? `Analysis: ${selectedFile.name}` : 'Document Analysis'}
            </h2>

            {selectedFile ? (
              <div className="analysis-result">
                {selectedFile.status === 'processing' ? (
                  <div className="text-center py-8">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-color mb-4"></div>
                    <p>Analyzing your document...</p>
                    <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
                  </div>
                ) : selectedFile.status === 'error' ? (
                  <div className="text-center py-8 text-red-500">
                    <AlertTriangle size={32} className="mx-auto mb-4" />
                    <p>Error analyzing document</p>
                    <p className="text-sm mt-2">Please try uploading the document again</p>
                  </div>
                ) : (
                  <div className="analysis-content">
                    <pre className="whitespace-pre-wrap text-sm font-mono bg-gray-50 p-4 rounded-lg overflow-auto max-h-[500px]">
                      {analysisResult}
                    </pre>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <FileText size={32} className="mx-auto mb-4 opacity-50" />
                <p>Select a document to view its analysis</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DocumentAnalysis;
