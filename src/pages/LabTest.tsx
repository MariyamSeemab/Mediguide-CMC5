import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { localizeNumber } from '../utils/numberLocalization';
import { patientDataService } from '../services/patientDataService';
import './LabTest.css';

interface LabTestItem {
  id: number;
  name: string;
  category: string;
  price: number;
  duration: string;
  description: string;
  preparation: string[];
  normalRange?: string;
  isPopular?: boolean;
}

interface LabResult {
  id: number;
  testName: string;
  result: string;
  normalRange: string;
  status: 'normal' | 'high' | 'low' | 'critical';
  date: string;
  labName: string;
  doctorName: string;
}

interface UploadedLabReport {
  id: string;
  userId: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  uploadDate: Date;
  aiAnalysis: {
    extractedData: {
      testName: string;
      value: string;
      unit: string;
      normalRange: string;
      status: 'normal' | 'high' | 'low' | 'critical';
    }[];
    precautions: string[];
    recommendations: string[];
    abnormalFindings: string[];
  };
  fileData?: string; // Base64 encoded file data
}

interface BookingData {
  testIds: number[];
  patientName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  address: string;
  homeCollection: boolean;
}

const LabTest: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const { t, currentLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<'tests' | 'results' | 'upload'>('tests');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTests, setSelectedTests] = useState<number[]>([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [selectedResult, setSelectedResult] = useState<LabResult | null>(null);
  const [uploadedReports, setUploadedReports] = useState<UploadedLabReport[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);
  const [currentAnalysis, setCurrentAnalysis] = useState<UploadedLabReport | null>(null);

  // Load uploaded reports on mount
  React.useEffect(() => {
    if (isAuthenticated && user) {
      const stored = localStorage.getItem(`mediguide_lab_reports_${user.id}`);
      if (stored) {
        const reports = JSON.parse(stored);
        setUploadedReports(reports.map((r: any) => ({
          ...r,
          uploadDate: new Date(r.uploadDate)
        })));
      }
    }
  }, [isAuthenticated, user]);

  const categories = [
    t('labTest.categories.all'),
    t('labTest.categories.bloodTests'),
    t('labTest.categories.urineTests'),
    t('labTest.categories.diabetes'),
    t('labTest.categories.heartHealth'),
    t('labTest.categories.liverFunction'),
    t('labTest.categories.kidneyFunction'),
    t('labTest.categories.thyroid'),
    t('labTest.categories.vitamins'),
    t('labTest.categories.hormones'),
    t('labTest.categories.infectionTests')
  ];

  const labTests: LabTestItem[] = [
    {
      id: 1,
      name: t('labTest.tests.cbc.name'),
      category: t('labTest.categories.bloodTests'),
      price: 300,
      duration: localizeNumber('4', currentLanguage) + '-' + localizeNumber('6', currentLanguage) + ' ' + t('common.hours'),
      description: t('labTest.tests.cbc.description'),
      preparation: [t('labTest.tests.cbc.preparation1'), t('labTest.tests.cbc.preparation2')],
      normalRange: t('labTest.tests.cbc.normalRange'),
      isPopular: true
    },
    {
      id: 2,
      name: t('labTest.tests.lipidProfile.name'),
      category: t('labTest.categories.heartHealth'),
      price: 450,
      duration: localizeNumber('6', currentLanguage) + '-' + localizeNumber('8', currentLanguage) + ' ' + t('common.hours'),
      description: t('labTest.tests.lipidProfile.description'),
      preparation: [t('labTest.tests.lipidProfile.preparation1'), t('labTest.tests.lipidProfile.preparation2')],
      normalRange: t('labTest.tests.lipidProfile.normalRange'),
      isPopular: true
    },
    {
      id: 3,
      name: t('labTest.tests.hba1c.name'),
      category: t('labTest.categories.diabetes'),
      price: 400,
      duration: localizeNumber('2', currentLanguage) + '-' + localizeNumber('4', currentLanguage) + ' ' + t('common.hours'),
      description: t('labTest.tests.hba1c.description'),
      preparation: [t('labTest.tests.hba1c.preparation1')],
      normalRange: t('labTest.tests.hba1c.normalRange'),
      isPopular: true
    },
    {
      id: 4,
      name: t('labTest.tests.lft.name'),
      category: t('labTest.categories.liverFunction'),
      price: 500,
      duration: localizeNumber('4', currentLanguage) + '-' + localizeNumber('6', currentLanguage) + ' ' + t('common.hours'),
      description: t('labTest.tests.lft.description'),
      preparation: [t('labTest.tests.lft.preparation1')],
      normalRange: t('labTest.tests.lft.normalRange')
    },
    {
      id: 5,
      name: t('labTest.tests.kft.name'),
      category: t('labTest.categories.kidneyFunction'),
      price: 400,
      duration: localizeNumber('4', currentLanguage) + '-' + localizeNumber('6', currentLanguage) + ' ' + t('common.hours'),
      description: t('labTest.tests.kft.description'),
      preparation: [t('labTest.tests.kft.preparation1')],
      normalRange: t('labTest.tests.kft.normalRange')
    },
    {
      id: 6,
      name: t('labTest.tests.thyroid.name'),
      category: t('labTest.categories.thyroid'),
      price: 600,
      duration: localizeNumber('6', currentLanguage) + '-' + localizeNumber('8', currentLanguage) + ' ' + t('common.hours'),
      description: t('labTest.tests.thyroid.description'),
      preparation: [t('labTest.tests.thyroid.preparation1'), t('labTest.tests.thyroid.preparation2')],
      normalRange: t('labTest.tests.thyroid.normalRange')
    },
    {
      id: 7,
      name: t('labTest.tests.vitaminD.name'),
      category: t('labTest.categories.vitamins'),
      price: 800,
      duration: localizeNumber('24', currentLanguage) + '-' + localizeNumber('48', currentLanguage) + ' ' + t('common.hours'),
      description: t('labTest.tests.vitaminD.description'),
      preparation: [t('labTest.tests.vitaminD.preparation1')],
      normalRange: t('labTest.tests.vitaminD.normalRange')
    },
    {
      id: 8,
      name: t('labTest.tests.urineRoutine.name'),
      category: t('labTest.categories.urineTests'),
      price: 200,
      duration: localizeNumber('2', currentLanguage) + '-' + localizeNumber('4', currentLanguage) + ' ' + t('common.hours'),
      description: t('labTest.tests.urineRoutine.description'),
      preparation: [t('labTest.tests.urineRoutine.preparation1')],
      normalRange: t('labTest.tests.urineRoutine.normalRange')
    }
  ];

  const labResults: LabResult[] = [
    {
      id: 1,
      testName: 'Complete Blood Count (CBC)',
      result: 'Hemoglobin: 14.2 g/dL, WBC: 7,200/μL, Platelets: 250,000/μL',
      normalRange: 'Hb: 12-16 g/dL, WBC: 4,000-11,000/μL',
      status: 'normal',
      date: '2024-01-10',
      labName: 'Apollo Diagnostics',
      doctorName: 'Dr. Rajesh Kumar'
    },
    {
      id: 2,
      testName: 'Lipid Profile',
      result: 'Total Cholesterol: 220 mg/dL, LDL: 140 mg/dL, HDL: 45 mg/dL',
      normalRange: 'Total: <200 mg/dL, LDL: <100 mg/dL, HDL: >40 mg/dL',
      status: 'high',
      date: '2024-01-08',
      labName: 'SRL Diagnostics',
      doctorName: 'Dr. Priya Sharma'
    },
    {
      id: 3,
      testName: 'HbA1c (Diabetes)',
      result: '6.8%',
      normalRange: '<5.7% (Normal), 5.7-6.4% (Prediabetes)',
      status: 'high',
      date: '2024-01-05',
      labName: 'Dr. Lal PathLabs',
      doctorName: 'Dr. Amit Patel'
    },
    {
      id: 4,
      testName: 'Thyroid Profile',
      result: 'TSH: 2.5 mIU/L, T3: 120 ng/dL, T4: 8.5 μg/dL',
      normalRange: 'TSH: 0.4-4.0 mIU/L, T3: 80-200 ng/dL',
      status: 'normal',
      date: '2024-01-03',
      labName: 'Metropolis Healthcare',
      doctorName: 'Dr. Sneha Reddy'
    }
  ];

  const filteredTests = labTests.filter(test => {
    const matchesCategory = selectedCategory === 'All' || test.category === selectedCategory;
    const matchesSearch = test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         test.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleTestSelection = (testId: number) => {
    setSelectedTests(prev => 
      prev.includes(testId) 
        ? prev.filter(id => id !== testId)
        : [...prev, testId]
    );
  };

  const handleBookNow = () => {
    if (selectedTests.length === 0) {
      alert(t('labTest.selectedTests.selectAtLeastOne'));
      return;
    }
    setShowBookingModal(true);
  };

  const handleBookingSubmit = (bookingData: BookingData) => {
    console.log('Booking submitted:', bookingData);
    alert(t('labTest.booking.success'));
    setShowBookingModal(false);
    setSelectedTests([]);
  };

  const getTotalPrice = () => {
    return selectedTests.reduce((total, testId) => {
      const test = labTests.find(t => t.id === testId);
      return total + (test?.price || 0);
    }, 0);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return '#28a745';
      case 'high': return '#dc3545';
      case 'low': return '#ffc107';
      case 'critical': return '#dc3545';
      default: return '#6c757d';
    }
  };

  // AI Analysis Function (Simulated)
  const analyzeLabReport = (fileName: string, fileType: string): UploadedLabReport['aiAnalysis'] => {
    // Simulated AI analysis - In production, this would call an actual AI service
    const mockAnalyses = [
      {
        extractedData: [
          { testName: 'Hemoglobin', value: '11.2', unit: 'g/dL', normalRange: '12-16 g/dL', status: 'low' as const },
          { testName: 'WBC Count', value: '7500', unit: '/μL', normalRange: '4000-11000 /μL', status: 'normal' as const },
          { testName: 'Platelet Count', value: '245000', unit: '/μL', normalRange: '150000-450000 /μL', status: 'normal' as const },
          { testName: 'Blood Sugar (Fasting)', value: '126', unit: 'mg/dL', normalRange: '70-100 mg/dL', status: 'high' as const }
        ],
        precautions: [
          'Low hemoglobin detected - Consider iron-rich diet including spinach, red meat, and lentils',
          'Elevated fasting blood sugar - Monitor carbohydrate intake and consider regular exercise',
          'Stay hydrated and maintain regular meal times',
          'Avoid skipping meals to maintain stable blood sugar levels'
        ],
        recommendations: [
          'Consult with your doctor about the low hemoglobin levels',
          'Consider iron supplementation as advised by healthcare provider',
          'Schedule a follow-up test in 4-6 weeks to monitor blood sugar levels',
          'Maintain a food diary to track dietary patterns'
        ],
        abnormalFindings: [
          'Hemoglobin: 11.2 g/dL (Below normal range)',
          'Fasting Blood Sugar: 126 mg/dL (Above normal range - Prediabetic range)'
        ]
      },
      {
        extractedData: [
          { testName: 'Total Cholesterol', value: '235', unit: 'mg/dL', normalRange: '<200 mg/dL', status: 'high' as const },
          { testName: 'LDL Cholesterol', value: '155', unit: 'mg/dL', normalRange: '<100 mg/dL', status: 'high' as const },
          { testName: 'HDL Cholesterol', value: '42', unit: 'mg/dL', normalRange: '>40 mg/dL', status: 'normal' as const },
          { testName: 'Triglycerides', value: '190', unit: 'mg/dL', normalRange: '<150 mg/dL', status: 'high' as const }
        ],
        precautions: [
          'Elevated cholesterol levels detected - Reduce saturated fat intake',
          'Increase physical activity to at least 30 minutes daily',
          'Include more fiber-rich foods like oats, beans, and vegetables',
          'Limit processed foods and trans fats'
        ],
        recommendations: [
          'Consult with a cardiologist or your primary care physician',
          'Consider lifestyle modifications before medication',
          'Regular cardiovascular exercise recommended',
          'Retest lipid profile after 3 months of lifestyle changes'
        ],
        abnormalFindings: [
          'Total Cholesterol: 235 mg/dL (Elevated)',
          'LDL Cholesterol: 155 mg/dL (High - Increased cardiovascular risk)',
          'Triglycerides: 190 mg/dL (Borderline high)'
        ]
      },
      {
        extractedData: [
          { testName: 'TSH', value: '6.8', unit: 'mIU/L', normalRange: '0.4-4.0 mIU/L', status: 'high' as const },
          { testName: 'T3', value: '95', unit: 'ng/dL', normalRange: '80-200 ng/dL', status: 'normal' as const },
          { testName: 'T4', value: '6.2', unit: 'μg/dL', normalRange: '5-12 μg/dL', status: 'normal' as const }
        ],
        precautions: [
          'Elevated TSH suggests possible hypothyroidism - Monitor energy levels and weight',
          'Ensure adequate iodine intake through iodized salt',
          'Avoid excessive consumption of goitrogenic foods (raw cruciferous vegetables)',
          'Maintain consistent sleep schedule'
        ],
        recommendations: [
          'Consult with an endocrinologist for thyroid evaluation',
          'May require thyroid hormone replacement therapy',
          'Retest thyroid function in 6-8 weeks',
          'Monitor symptoms like fatigue, weight gain, or cold intolerance'
        ],
        abnormalFindings: [
          'TSH: 6.8 mIU/L (Elevated - Possible subclinical hypothyroidism)'
        ]
      }
    ];

    // Randomly select one analysis for demonstration
    return mockAnalyses[Math.floor(Math.random() * mockAnalyses.length)];
  };

  // Handle file selection
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      alert(t('labTest.upload.fileValidation.invalidType'));
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert(t('labTest.upload.fileValidation.tooLarge'));
      return;
    }

    setSelectedFile(file);
  };

  // Handle file upload and analysis
  const handleUploadReport = async () => {
    if (!selectedFile || !user) {
      alert(t('labTest.upload.fileValidation.selectFile'));
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    // Read file as base64
    const reader = new FileReader();
    reader.onload = async (e) => {
      const fileData = e.target?.result as string;

      // Simulate AI analysis delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      clearInterval(progressInterval);
      setUploadProgress(100);

      // Perform AI analysis
      const analysis = analyzeLabReport(selectedFile.name, selectedFile.type);

      // Create report object
      const newReport: UploadedLabReport = {
        id: `LAB-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        userId: user.id,
        fileName: selectedFile.name,
        fileType: selectedFile.type,
        fileSize: selectedFile.size,
        uploadDate: new Date(),
        aiAnalysis: analysis,
        fileData: fileData
      };

      // Save to localStorage
      const updatedReports = [newReport, ...uploadedReports];
      setUploadedReports(updatedReports);
      localStorage.setItem(`mediguide_lab_reports_${user.id}`, JSON.stringify(updatedReports));

      // Add to patient data service for Doctor-Ready Report integration
      patientDataService.addSymptomCheckerEntry(user.id, {
        source: 'symptom-checker',
        timestamp: new Date(),
        data: {
          text: `Lab Report Uploaded: ${selectedFile.name}`,
          symptoms: analysis.abnormalFindings
        }
      });

      // Auto-generate report with lab findings
      patientDataService.autoGenerateReport(user.id, user.name);

      // Show analysis
      setCurrentAnalysis(newReport);
      setShowAnalysisModal(true);

      // Reset
      setIsUploading(false);
      setUploadProgress(0);
      setSelectedFile(null);
      
      // Reset file input
      const fileInput = document.getElementById('lab-report-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    };

    reader.readAsDataURL(selectedFile);
  };

  // Delete uploaded report
  const handleDeleteReport = (reportId: string) => {
    if (!user) return;
    
    if (window.confirm(t('labTest.upload.confirmDelete'))) {
      const updatedReports = uploadedReports.filter(r => r.id !== reportId);
      setUploadedReports(updatedReports);
      localStorage.setItem(`mediguide_lab_reports_${user.id}`, JSON.stringify(updatedReports));
    }
  };

  // Download report - Enhanced with proper file handling
  const handleDownloadReport = (report: UploadedLabReport) => {
    if (!report.fileData) {
      alert(t('labTest.upload.fileValidation.dataNotAvailable'));
      return;
    }

    try {
      const link = document.createElement('a');
      link.href = report.fileData;
      link.download = report.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download error:', error);
      alert(t('labTest.upload.fileValidation.downloadFailed'));
    }
  };

  // Print report - Generate printable version with analysis
  const handlePrintReport = (report: UploadedLabReport) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert(t('labTest.upload.fileValidation.allowPopups'));
      return;
    }

    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Lab Report - ${report.fileName}</title>
        <style>
          @media print {
            @page { margin: 1.5cm; }
            body { margin: 0; }
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            text-align: center;
            border-bottom: 3px solid #1977cc;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .header h1 {
            color: #1977cc;
            margin: 0 0 10px;
            font-size: 28px;
          }
          .header p {
            color: #666;
            margin: 5px 0;
            font-size: 14px;
          }
          .section {
            margin-bottom: 30px;
            page-break-inside: avoid;
          }
          .section h2 {
            color: #1977cc;
            font-size: 20px;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 10px;
            margin-bottom: 15px;
          }
          .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-bottom: 20px;
          }
          .info-item {
            padding: 10px;
            background: #f8fafc;
            border-radius: 8px;
          }
          .info-item strong {
            color: #0f172a;
            display: block;
            margin-bottom: 5px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #e2e8f0;
          }
          th {
            background: #1977cc;
            color: white;
            font-weight: 700;
          }
          .abnormal-row {
            background: #fef2f2;
          }
          .status-badge {
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
          }
          .status-normal { background: #d1fae5; color: #065f46; }
          .status-high, .status-low, .status-critical { background: #fee2e2; color: #991b1b; }
          .findings-list, .precautions-list, .recommendations-list {
            list-style: none;
            padding: 0;
          }
          .findings-list li, .precautions-list li, .recommendations-list li {
            padding: 10px;
            margin-bottom: 10px;
            background: #f8fafc;
            border-radius: 8px;
            border-left: 4px solid #1977cc;
          }
          .alert-box {
            background: #fef2f2;
            border-left: 4px solid #ef4444;
            padding: 15px;
            margin: 20px 0;
            border-radius: 8px;
          }
          .disclaimer {
            background: #eff6ff;
            border-left: 4px solid #3b82f6;
            padding: 15px;
            margin-top: 30px;
            border-radius: 8px;
            font-size: 14px;
          }
          .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #e2e8f0;
            color: #666;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Mediguide – Healthcare Platform</h1>
          <p>Laboratory Report Analysis</p>
          <p>Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
        </div>

        <div class="section">
          <h2>Report Information</h2>
          <div class="info-grid">
            <div class="info-item">
              <strong>File Name:</strong>
              ${report.fileName}
            </div>
            <div class="info-item">
              <strong>Upload Date:</strong>
              ${report.uploadDate.toLocaleDateString()} at ${report.uploadDate.toLocaleTimeString()}
            </div>
            <div class="info-item">
              <strong>Report ID:</strong>
              ${report.id}
            </div>
            <div class="info-item">
              <strong>File Size:</strong>
              ${(report.fileSize / 1024).toFixed(2)} KB
            </div>
          </div>
        </div>

        <div class="section">
          <h2>Extracted Test Results</h2>
          <table>
            <thead>
              <tr>
                <th>Test Name</th>
                <th>Value</th>
                <th>Normal Range</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${report.aiAnalysis.extractedData.map(test => `
                <tr class="${test.status !== 'normal' ? 'abnormal-row' : ''}">
                  <td>${test.testName}</td>
                  <td>${test.value} ${test.unit}</td>
                  <td>${test.normalRange}</td>
                  <td>
                    <span class="status-badge status-${test.status}">
                      ${test.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        ${report.aiAnalysis.abnormalFindings.length > 0 ? `
          <div class="section">
            <h2>Abnormal Findings</h2>
            <div class="alert-box">
              <ul class="findings-list">
                ${report.aiAnalysis.abnormalFindings.map(finding => `
                  <li>${finding}</li>
                `).join('')}
              </ul>
            </div>
          </div>
        ` : ''}

        <div class="section">
          <h2>Precautionary Guidance</h2>
          <ul class="precautions-list">
            ${report.aiAnalysis.precautions.map(precaution => `
              <li>${precaution}</li>
            `).join('')}
          </ul>
        </div>

        <div class="section">
          <h2>Recommendations</h2>
          <ul class="recommendations-list">
            ${report.aiAnalysis.recommendations.map(recommendation => `
              <li>${recommendation}</li>
            `).join('')}
          </ul>
        </div>

        <div class="disclaimer">
          <strong>Important Disclaimer:</strong> This AI analysis is for informational purposes only and does not constitute medical diagnosis. 
          Please consult with a qualified healthcare professional for proper medical advice and treatment.
        </div>

        <div class="footer">
          <p>Mediguide – Healthcare Platform</p>
          <p>This report is confidential and intended for medical use only.</p>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
    
    // Wait for content to load before printing
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  // Share report - Generate shareable link or email
  const handleShareReport = (report: UploadedLabReport) => {
    const shareText = `Lab Report: ${report.fileName}\nUploaded: ${report.uploadDate.toLocaleDateString()}\nReport ID: ${report.id}`;
    
    // Check if Web Share API is available
    if (navigator.share) {
      navigator.share({
        title: 'Lab Report',
        text: shareText,
        // Note: files parameter would require the actual file blob
      }).then(() => {
        console.log('Report shared successfully');
      }).catch((error) => {
        console.log('Error sharing:', error);
        fallbackShare(report);
      });
    } else {
      fallbackShare(report);
    }
  };

  // Fallback share method
  const fallbackShare = (report: UploadedLabReport) => {
    const shareData = {
      reportId: report.id,
      fileName: report.fileName,
      uploadDate: report.uploadDate.toISOString(),
      summary: `${report.aiAnalysis.extractedData.length} tests analyzed, ${report.aiAnalysis.abnormalFindings.length} abnormal findings`
    };

    // Copy to clipboard
    const shareText = `Lab Report Summary\n\nFile: ${shareData.fileName}\nReport ID: ${shareData.reportId}\nUploaded: ${new Date(shareData.uploadDate).toLocaleDateString()}\nSummary: ${shareData.summary}\n\nGenerated by Mediguide Healthcare Platform`;
    
    navigator.clipboard.writeText(shareText).then(() => {
      alert(t('labTest.upload.shareSuccess'));
    }).catch(() => {
      // If clipboard fails, show the text in a prompt
      prompt(t('labTest.upload.sharePrompt'), shareText);
    });
  };

  // Export report as PDF (enhanced version)
  const handleExportPDF = (report: UploadedLabReport) => {
    // For now, use print functionality which allows "Save as PDF"
    // In production, you would use a library like jsPDF or pdfmake
    alert(t('labTest.upload.exportPdfMessage'));
    handlePrintReport(report);
  };

  return (
    <div className="lab-test">
      {/* Header */}
      <div className="lab-header">
        <h1>{t('labTest.header.title')}</h1>
        <p>{t('labTest.header.subtitle')}</p>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button 
          className={`tab-btn ${activeTab === 'tests' ? 'active' : ''}`}
          onClick={() => setActiveTab('tests')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 11H7a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2h-2M9 11V9a2 2 0 112 0v2M9 11h6"/>
          </svg>
          {t('labTest.tabs.bookTests')}
        </button>
        <button 
          className={`tab-btn ${activeTab === 'upload' ? 'active' : ''}`}
          onClick={() => setActiveTab('upload')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
          {t('labTest.tabs.uploadReports')}
        </button>
        <button 
          className={`tab-btn ${activeTab === 'results' ? 'active' : ''}`}
          onClick={() => setActiveTab('results')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          {t('labTest.tabs.viewResults')}
        </button>
      </div>

      {activeTab === 'upload' && (
        <div className="upload-section">
          <div className="upload-container">
            <div className="upload-header">
              <h2>{t('labTest.upload.title')}</h2>
              <p>{t('labTest.upload.subtitle')}</p>
            </div>

            {/* Upload Area */}
            <div className="upload-area">
              <div className="upload-box">
                <div className="upload-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                </div>
                <h3>{t('labTest.upload.uploadTitle')}</h3>
                <p>{t('labTest.upload.supportedFormats')}</p>
                
                <input
                  type="file"
                  id="lab-report-upload"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={handleFileSelect}
                  style={{ display: 'none' }}
                />
                
                <label htmlFor="lab-report-upload" className="upload-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                  {t('labTest.upload.chooseFile')}
                </label>

                {selectedFile && (
                  <div className="selected-file">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    <div className="file-info">
                      <span className="file-name">{selectedFile.name}</span>
                      <span className="file-size">{(selectedFile.size / 1024).toFixed(2)} KB</span>
                    </div>
                    <button 
                      className="remove-file-btn"
                      onClick={() => setSelectedFile(null)}
                    >
                      ×
                    </button>
                  </div>
                )}

                {selectedFile && !isUploading && (
                  <button className="analyze-btn" onClick={handleUploadReport}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                    {t('labTest.upload.uploadAndAnalyze')}
                  </button>
                )}

                {isUploading && (
                  <div className="upload-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <p className="progress-text">
                      {uploadProgress < 90 ? t('labTest.upload.uploading') : t('labTest.upload.analyzing')} {localizeNumber(uploadProgress.toString(), currentLanguage)}%
                    </p>
                  </div>
                )}
              </div>

              {/* Info Cards */}
              <div className="upload-info-cards">
                <div className="info-card">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <h4>{t('labTest.upload.infoCards.secure.title')}</h4>
                  <p>{t('labTest.upload.infoCards.secure.description')}</p>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <h4>{t('labTest.upload.infoCards.instant.title')}</h4>
                  <p>{t('labTest.upload.infoCards.instant.description')}</p>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                  </div>
                  <h4>{t('labTest.upload.infoCards.autoIntegration.title')}</h4>
                  <p>{t('labTest.upload.infoCards.autoIntegration.description')}</p>
                </div>
              </div>
            </div>

            {/* Uploaded Reports List */}
            {uploadedReports.length > 0 && (
              <div className="uploaded-reports-section">
                <h3>{t('labTest.upload.uploadedReports')} ({localizeNumber(uploadedReports.length.toString(), currentLanguage)})</h3>
                <div className="uploaded-reports-grid">
                  {uploadedReports.map((report) => (
                    <div key={report.id} className="uploaded-report-card">
                      <div className="report-header">
                        <div className="report-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                          </svg>
                        </div>
                        <div className="report-info">
                          <h4>{report.fileName}</h4>
                          <p>{report.uploadDate.toLocaleDateString()} at {report.uploadDate.toLocaleTimeString()}</p>
                        </div>
                      </div>

                      <div className="report-summary">
                        <div className="summary-item">
                          <span className="label">{t('labTest.upload.testsAnalyzed')}:</span>
                          <span className="value">{localizeNumber(report.aiAnalysis.extractedData.length.toString(), currentLanguage)}</span>
                        </div>
                        <div className="summary-item">
                          <span className="label">{t('labTest.upload.abnormalFindings')}:</span>
                          <span className="value abnormal">{localizeNumber(report.aiAnalysis.abnormalFindings.length.toString(), currentLanguage)}</span>
                        </div>
                        <div className="summary-item">
                          <span className="label">{t('labTest.upload.precautions')}:</span>
                          <span className="value">{localizeNumber(report.aiAnalysis.precautions.length.toString(), currentLanguage)}</span>
                        </div>
                      </div>

                      <div className="report-actions">
                        <button 
                          className="view-analysis-btn"
                          onClick={() => {
                            setCurrentAnalysis(report);
                            setShowAnalysisModal(true);
                          }}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                          {t('labTest.upload.viewAnalysis')}
                        </button>
                        <button 
                          className="download-report-btn"
                          onClick={() => handleDownloadReport(report)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                            <polyline points="7 10 12 15 17 10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                          </svg>
                          {t('labTest.upload.download')}
                        </button>
                        <button 
                          className="print-report-btn"
                          onClick={() => handlePrintReport(report)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="6 9 6 2 18 2 18 9"/>
                            <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>
                            <rect x="6" y="14" width="12" height="8"/>
                          </svg>
                          {t('labTest.upload.print')}
                        </button>
                        <button 
                          className="share-report-btn"
                          onClick={() => handleShareReport(report)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="18" cy="5" r="3"/>
                            <circle cx="6" cy="12" r="3"/>
                            <circle cx="18" cy="19" r="3"/>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                          </svg>
                          {t('labTest.upload.share')}
                        </button>
                        <button 
                          className="delete-report-btn"
                          onClick={() => handleDeleteReport(report.id)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'tests' && (
        <div className="tests-section">
          {/* Search and Filter */}
          <div className="search-filter-section">
            <div className="search-container">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder={t('labTest.search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Tests Summary */}
          {selectedTests.length > 0 && (
            <div className="selected-tests-summary">
              <div className="summary-content">
                <h3>{t('labTest.selectedTests.title')} ({localizeNumber(selectedTests.length.toString(), currentLanguage)})</h3>
                <p className="total-price">{t('labTest.selectedTests.total')}: ₹{localizeNumber(getTotalPrice().toString(), currentLanguage)}</p>
              </div>
              <button className="book-now-btn" onClick={handleBookNow}>
                {t('labTest.selectedTests.bookNow')}
              </button>
            </div>
          )}

          {/* Tests Grid */}
          <div className="tests-grid">
            {filteredTests.map((test) => (
              <div key={test.id} className={`test-card ${selectedTests.includes(test.id) ? 'selected' : ''}`}>
                {test.isPopular && <div className="popular-badge">{t('labTest.testCard.popular')}</div>}
                
                <div className="test-header">
                  <h3>{test.name}</h3>
                  <label className="test-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedTests.includes(test.id)}
                      onChange={() => handleTestSelection(test.id)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>

                <div className="test-info">
                  <p className="category">{test.category}</p>
                  <p className="description">{test.description}</p>
                  
                  <div className="test-details">
                    <div className="detail-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                      <span>{t('labTest.testCard.duration')}: {test.duration}</span>
                    </div>
                    
                    <div className="detail-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="1" x2="12" y2="23"/>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                      <span className="price">₹{localizeNumber(test.price.toString(), currentLanguage)}</span>
                    </div>
                  </div>

                  <div className="preparation">
                    <h4>{t('labTest.testCard.preparation')}:</h4>
                    <ul>
                      {test.preparation.map((prep, index) => (
                        <li key={index}>{prep}</li>
                      ))}
                    </ul>
                  </div>

                  {test.normalRange && (
                    <div className="normal-range">
                      <strong>{t('labTest.testCard.normalRange')}:</strong> {test.normalRange}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'results' && (
        <div className="results-section">
          <div className="results-header">
            <h2>{t('labTest.results.title')}</h2>
            {uploadedReports.length > 0 && (
              <button 
                className="download-all-btn"
                onClick={() => {
                  uploadedReports.forEach(report => handleDownloadReport(report));
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                {t('labTest.results.downloadAll')}
              </button>
            )}
          </div>

          {uploadedReports.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="12" y1="18" x2="12" y2="12"/>
                  <line x1="9" y1="15" x2="15" y2="15"/>
                </svg>
              </div>
              <h3>{t('labTest.results.emptyState.title')}</h3>
              <p>{t('labTest.results.emptyState.description')}</p>
              <button 
                className="upload-now-btn"
                onClick={() => setActiveTab('upload')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                {t('labTest.results.emptyState.uploadNow')}
              </button>
            </div>
          ) : (
            <div className="results-grid">
              {uploadedReports.map((report) => {
                // Determine status based on abnormal findings
                const hasAbnormal = report.aiAnalysis.abnormalFindings.length > 0;
                const status = hasAbnormal ? 'abnormal' : 'normal';
                const statusText = hasAbnormal ? t('labTest.results.status.abnormal') : t('labTest.results.status.normal');
                
                // Calculate days since upload
                const daysSinceUpload = Math.floor((new Date().getTime() - report.uploadDate.getTime()) / (1000 * 60 * 60 * 24));
                const isNew = daysSinceUpload <= 7;

                return (
                  <div key={report.id} className="result-card">
                    <div className="result-header">
                      <div className="result-title-section">
                        <h3>{report.fileName}</h3>
                        <div className="status-badges">
                          {isNew && <span className="status-badge new">{t('labTest.results.status.new')}</span>}
                          <span className={`status-badge ${status}`}>
                            {statusText}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="result-info">
                      <div className="result-meta-grid">
                        <div className="meta-item">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                          </svg>
                          <div className="meta-content">
                            <span className="meta-label">{t('labTest.results.meta.uploadDate')}</span>
                            <span className="meta-value">{report.uploadDate.toLocaleDateString()}</span>
                          </div>
                        </div>
                        
                        <div className="meta-item">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                          </svg>
                          <div className="meta-content">
                            <span className="meta-label">{t('labTest.results.meta.uploadTime')}</span>
                            <span className="meta-value">{report.uploadDate.toLocaleTimeString()}</span>
                          </div>
                        </div>
                        
                        <div className="meta-item">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 11H7a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2h-2M9 11V9a2 2 0 112 0v2M9 11h6"/>
                          </svg>
                          <div className="meta-content">
                            <span className="meta-label">{t('labTest.results.meta.testsAnalyzed')}</span>
                            <span className="meta-value">{localizeNumber(report.aiAnalysis.extractedData.length.toString(), currentLanguage)}</span>
                          </div>
                        </div>
                        
                        <div className="meta-item">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                            <line x1="12" y1="9" x2="12" y2="13"/>
                            <line x1="12" y1="17" x2="12.01" y2="17"/>
                          </svg>
                          <div className="meta-content">
                            <span className="meta-label">{t('labTest.results.meta.abnormalFindings')}</span>
                            <span className={`meta-value ${hasAbnormal ? 'abnormal' : ''}`}>
                              {localizeNumber(report.aiAnalysis.abnormalFindings.length.toString(), currentLanguage)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Quick Summary */}
                      <div className="result-summary">
                        <h4>{t('labTest.results.quickSummary')}</h4>
                        <div className="summary-stats">
                          <div className="stat-item">
                            <span className="stat-value">{localizeNumber(report.aiAnalysis.extractedData.filter(t => t.status === 'normal').length.toString(), currentLanguage)}</span>
                            <span className="stat-label">{t('labTest.results.status.normal')}</span>
                          </div>
                          <div className="stat-item warning">
                            <span className="stat-value">{localizeNumber(report.aiAnalysis.extractedData.filter(t => t.status !== 'normal').length.toString(), currentLanguage)}</span>
                            <span className="stat-label">{t('labTest.results.status.abnormal')}</span>
                          </div>
                          <div className="stat-item">
                            <span className="stat-value">{localizeNumber(report.aiAnalysis.precautions.length.toString(), currentLanguage)}</span>
                            <span className="stat-label">{t('labTest.upload.precautions')}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="result-actions">
                      <button 
                        className="view-details-btn"
                        onClick={() => {
                          setCurrentAnalysis(report);
                          setShowAnalysisModal(true);
                        }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                        {t('labTest.results.viewFullReport')}
                      </button>
                      <button 
                        className="download-btn"
                        onClick={() => handleDownloadReport(report)}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                        </svg>
                        {t('labTest.upload.download')}
                      </button>
                      <button 
                        className="print-btn"
                        onClick={() => handlePrintReport(report)}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="6 9 6 2 18 2 18 9"/>
                          <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>
                          <rect x="6" y="14" width="12" height="8"/>
                        </svg>
                        {t('labTest.upload.print')}
                      </button>
                      <button 
                        className="share-btn"
                        onClick={() => handleShareReport(report)}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="18" cy="5" r="3"/>
                          <circle cx="6" cy="12" r="3"/>
                          <circle cx="18" cy="19" r="3"/>
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                        </svg>
                        {t('labTest.upload.share')}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal
          selectedTests={selectedTests.map(id => labTests.find(t => t.id === id)!)}
          onClose={() => setShowBookingModal(false)}
          onSubmit={handleBookingSubmit}
        />
      )}

      {/* Result Details Modal */}
      {showResultModal && selectedResult && (
        <ResultDetailsModal
          result={selectedResult}
          onClose={() => {
            setShowResultModal(false);
            setSelectedResult(null);
          }}
        />
      )}

      {/* AI Analysis Modal */}
      {showAnalysisModal && currentAnalysis && (
        <AIAnalysisModal
          report={currentAnalysis}
          onClose={() => {
            setShowAnalysisModal(false);
            setCurrentAnalysis(null);
          }}
        />
      )}
    </div>
  );
};

// Booking Modal Component
const BookingModal: React.FC<{
  selectedTests: LabTestItem[];
  onClose: () => void;
  onSubmit: (data: BookingData) => void;
}> = ({ selectedTests, onClose, onSubmit }) => {
  const { t, currentLanguage } = useLanguage();
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    address: '',
    homeCollection: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      testIds: selectedTests.map(t => t.id),
      ...formData
    });
  };

  const totalPrice = selectedTests.reduce((sum, test) => sum + test.price, 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{t('labTest.booking.title')}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-content">
          <div className="selected-tests-list">
            <h3>{t('labTest.booking.selectedTests')} ({localizeNumber(selectedTests.length.toString(), currentLanguage)})</h3>
            {selectedTests.map(test => (
              <div key={test.id} className="test-item">
                <span>{test.name}</span>
                <span>₹{localizeNumber(test.price.toString(), currentLanguage)}</span>
              </div>
            ))}
            <div className="total-amount">
              <strong>{t('labTest.booking.totalAmount')}: ₹{localizeNumber(totalPrice.toString(), currentLanguage)}</strong>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-group">
              <label>{t('labTest.booking.patientName')} *</label>
              <input
                type="text"
                required
                value={formData.patientName}
                onChange={(e) => setFormData({...formData, patientName: e.target.value})}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t('labTest.booking.phoneNumber')} *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>{t('labTest.booking.email')}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t('labTest.booking.preferredDate')} *</label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>{t('labTest.booking.preferredTime')} *</label>
                <select
                  required
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                >
                  <option value="">{t('labTest.booking.selectTime')}</option>
                  <option value="6:00 AM - 8:00 AM">{t('labTest.booking.timeSlots.morning1')}</option>
                  <option value="8:00 AM - 10:00 AM">{t('labTest.booking.timeSlots.morning2')}</option>
                  <option value="10:00 AM - 12:00 PM">{t('labTest.booking.timeSlots.morning3')}</option>
                  <option value="2:00 PM - 4:00 PM">{t('labTest.booking.timeSlots.afternoon1')}</option>
                  <option value="4:00 PM - 6:00 PM">{t('labTest.booking.timeSlots.afternoon2')}</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.homeCollection}
                  onChange={(e) => setFormData({...formData, homeCollection: e.target.checked})}
                />
                <span className="checkmark"></span>
                {t('labTest.booking.homeCollection')} (+₹{localizeNumber('100', currentLanguage)})
              </label>
            </div>

            {formData.homeCollection && (
              <div className="form-group">
                <label>{t('labTest.booking.address')} *</label>
                <textarea
                  required
                  rows={3}
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  placeholder={t('labTest.booking.addressPlaceholder')}
                />
              </div>
            )}

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={onClose}>
                {t('labTest.booking.cancel')}
              </button>
              <button type="submit" className="confirm-btn">
                {t('labTest.booking.confirmBooking')} - ₹{localizeNumber((totalPrice + (formData.homeCollection ? 100 : 0)).toString(), currentLanguage)}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Result Details Modal Component
const ResultDetailsModal: React.FC<{
  result: LabResult;
  onClose: () => void;
}> = ({ result, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="result-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Lab Result Details</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-content">
          <div className="result-details">
            <h3>{result.testName}</h3>
            
            <div className="detail-section">
              <h4>Test Result</h4>
              <p className="result-value">{result.result}</p>
            </div>

            <div className="detail-section">
              <h4>Normal Range</h4>
              <p>{result.normalRange}</p>
            </div>

            <div className="detail-section">
              <h4>Status</h4>
              <span 
                className={`status-badge ${result.status}`}
                style={{ backgroundColor: result.status === 'normal' ? '#28a745' : '#dc3545' }}
              >
                {result.status.toUpperCase()}
              </span>
            </div>

            <div className="detail-section">
              <h4>Test Information</h4>
              <div className="info-grid">
                <div className="info-item">
                  <strong>Date:</strong> {new Date(result.date).toLocaleDateString()}
                </div>
                <div className="info-item">
                  <strong>Lab:</strong> {result.labName}
                </div>
                <div className="info-item">
                  <strong>Doctor:</strong> {result.doctorName}
                </div>
              </div>
            </div>

            {result.status !== 'normal' && (
              <div className="detail-section recommendations">
                <h4>Recommendations</h4>
                <ul>
                  <li>Consult with your doctor about these results</li>
                  <li>Follow up with recommended lifestyle changes</li>
                  <li>Consider retesting as advised by your healthcare provider</li>
                </ul>
              </div>
            )}
          </div>

          <div className="modal-actions">
            <button className="download-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download Report
            </button>
            <button className="share-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/>
              </svg>
              Share with Doctor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// AI Analysis Modal Component
const AIAnalysisModal: React.FC<{
  report: UploadedLabReport;
  onClose: () => void;
}> = ({ report, onClose }) => {
  const { t, currentLanguage } = useLanguage();
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="analysis-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{t('labTest.analysis.title')}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-content">
          {/* Report Info */}
          <div className="analysis-section">
            <div className="section-header">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              <h3>{t('labTest.analysis.reportInfo')}</h3>
            </div>
            <div className="info-grid">
              <div className="info-item">
                <strong>{t('labTest.analysis.fileName')}:</strong> {report.fileName}
              </div>
              <div className="info-item">
                <strong>{t('labTest.analysis.uploadDate')}:</strong> {report.uploadDate.toLocaleDateString()} at {report.uploadDate.toLocaleTimeString()}
              </div>
              <div className="info-item">
                <strong>{t('labTest.analysis.reportId')}:</strong> {report.id}
              </div>
            </div>
          </div>

          {/* Extracted Test Results */}
          <div className="analysis-section">
            <div className="section-header">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11H7a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2h-2M9 11V9a2 2 0 112 0v2M9 11h6"/>
              </svg>
              <h3>{t('labTest.analysis.extractedResults')}</h3>
            </div>
            <div className="test-results-table">
              <table>
                <thead>
                  <tr>
                    <th>{t('labTest.analysis.testName')}</th>
                    <th>{t('labTest.analysis.value')}</th>
                    <th>{t('labTest.analysis.normalRange')}</th>
                    <th>{t('labTest.analysis.status')}</th>
                  </tr>
                </thead>
                <tbody>
                  {report.aiAnalysis.extractedData.map((test, index) => (
                    <tr key={index} className={test.status !== 'normal' ? 'abnormal-row' : ''}>
                      <td>{test.testName}</td>
                      <td>{test.value} {test.unit}</td>
                      <td>{test.normalRange}</td>
                      <td>
                        <span className={`status-badge ${test.status}`}>
                          {test.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Abnormal Findings */}
          {report.aiAnalysis.abnormalFindings.length > 0 && (
            <div className="analysis-section alert-section">
              <div className="section-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <h3>{t('labTest.analysis.abnormalFindings')}</h3>
              </div>
              <ul className="findings-list">
                {report.aiAnalysis.abnormalFindings.map((finding, index) => (
                  <li key={index} className="finding-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    {finding}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Precautions */}
          <div className="analysis-section">
            <div className="section-header">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <h3>{t('labTest.analysis.precautionaryGuidance')}</h3>
            </div>
            <ul className="precautions-list">
              {report.aiAnalysis.precautions.map((precaution, index) => (
                <li key={index} className="precaution-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {precaution}
                </li>
              ))}
            </ul>
          </div>

          {/* Recommendations */}
          <div className="analysis-section">
            <div className="section-header">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <h3>{t('labTest.analysis.recommendations')}</h3>
            </div>
            <ul className="recommendations-list">
              {report.aiAnalysis.recommendations.map((recommendation, index) => (
                <li key={index} className="recommendation-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  {recommendation}
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="analysis-disclaimer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            <p>
              {t('labTest.analysis.disclaimer')}
            </p>
          </div>

          {/* Integration Notice */}
          <div className="integration-notice">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <p>
              {t('labTest.analysis.integrationNotice')}
            </p>
          </div>
        </div>

        <div className="modal-actions">
          <button className="btn-primary" onClick={onClose}>
            {t('labTest.analysis.close')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LabTest;