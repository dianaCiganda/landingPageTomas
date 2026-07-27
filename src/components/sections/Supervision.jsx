import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Supervision.css';
import ProfileTemplate from '../layout/ProfileTemplate';

const Supervision = ({ supervision = [], publications = [] }) => {
  const navigate = useNavigate();

  const handleViewPDF = (pdfPath) => {
    if (pdfPath) {
      window.open(pdfPath, '_blank');
    }
  };

  const handlePublicationClick = (publicationId) => {
    if (publicationId) {
      navigate(`/publication-detail/${publicationId}`);
    }
  };

  const supervisionArray = Array.isArray(supervision) ? supervision : [];

  if (supervisionArray.length === 0) {
    return (
      <ProfileTemplate title="Tomás I. Marina">
        <div className="supervisions-section">
          <div className="no-supervisions">
            <p>No supervision records available.</p>
          </div>
        </div>
      </ProfileTemplate>
    );
  }

  const masterTheses = supervisionArray.filter(s => s.type === "Master's Thesis");
  const researchInternships = supervisionArray.filter(s => s.type === 'Research Internship');

  if (masterTheses.length === 0 && researchInternships.length === 0) {
    return (
      <ProfileTemplate title="Tomás I. Marina">
        <div className="supervisions-section">
          <div className="no-supervisions">
            <p>No supervision records found.</p>
          </div>
        </div>
      </ProfileTemplate>
    );
  }

  return (
    <ProfileTemplate title="Tomás I. Marina">
      <div className="supervisions-section">
        {masterTheses.length > 0 && (
          <>
            <h2 className="supervisions-title">Supervision of Master's Theses</h2>
            
            {masterTheses.map((sup) => (
              <div key={sup.id} className="supervision-item">
                <div className="supervision-details">
                  <p className="supervision-field">
                    <span className="supervision-label">Student</span>
                    <span className="supervision-value">{sup.student}</span>
                  </p>
                  
                  <p className="supervision-field">
                    <span className="supervision-label">Program</span>
                    <span className="supervision-value">{sup.program}</span>
                  </p>
                  
                  <p className="supervision-field">
                    <span className="supervision-label">Host Institution</span>
                    <span className="supervision-value">{sup.hostInstitution}</span>
                  </p>
                  
                  <p className="supervision-field">
                    <span className="supervision-label">Thesis Title</span>
                    <span className="supervision-value">{sup.title}</span>
                  </p>
                  
                  <p className="supervision-field">
                    <span className="supervision-label">Period</span>
                    <span className="supervision-value">{sup.period}</span>
                  </p>
                  
                  {sup.relatedPublication && (
                    <p className="supervision-field publication-field">
                      <span className="supervision-label">Related publication</span>
                      <span 
                        className="publication-link" 
                        onClick={() => handlePublicationClick(sup.relatedPublication.id)}
                      >
                        {sup.relatedPublication.title}
                      </span>
                    </p>
                  )}
                  
                  <button 
                    className="supervision-pdf-btn"
                    onClick={() => handleViewPDF(sup.pdf)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="12" y1="18" x2="12" y2="12"/>
                      <polyline points="9 15 12 18 15 15"/>
                    </svg>
                    View PDF
                  </button>
                </div>
              </div>
            ))}
          </>
        )}

        {researchInternships.length > 0 && (
          <>
            <h2 className="supervisions-title research-title">Supervision of Research Internships</h2>
            
            {researchInternships.map((sup) => (
              <div key={sup.id} className="supervision-item">
                <div className="supervision-details">
                  <p className="supervision-field">
                    <span className="supervision-label">Student</span>
                    <span className="supervision-value">{sup.student}</span>
                  </p>
                  
                  <p className="supervision-field">
                    <span className="supervision-label">Program</span>
                    <span className="supervision-value">{sup.program}</span>
                  </p>
                  
                  <p className="supervision-field">
                    <span className="supervision-label">Host Institution</span>
                    <span className="supervision-value">{sup.hostInstitution}</span>
                  </p>
                  
                  <p className="supervision-field">
                    <span className="supervision-label">Research Title</span>
                    <span className="supervision-value">{sup.title}</span>
                  </p>
                  
                  <p className="supervision-field">
                    <span className="supervision-label">Period</span>
                    <span className="supervision-value">{sup.period}</span>
                  </p>
                  
                  {sup.relatedPublication && (
                    <p className="supervision-field publication-field">
                      <span className="supervision-label">Related publication</span>
                      <span 
                        className="publication-link" 
                        onClick={() => handlePublicationClick(sup.relatedPublication.id)}
                      >
                        {sup.relatedPublication.title}
                      </span>
                    </p>
                  )}
                  
                  <button 
                    className="supervision-pdf-btn"
                    onClick={() => handleViewPDF(sup.pdf)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="12" y1="18" x2="12" y2="12"/>
                      <polyline points="9 15 12 18 15 15"/>
                    </svg>
                    View PDF
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </ProfileTemplate>
  );
};

export default Supervision;