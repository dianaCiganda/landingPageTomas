import React, { useEffect, useState } from 'react';
import './Teaching.css';
import ProfileTemplate from "../layout/ProfileTemplate";

// Datos exactos del archivo Postgraduate Courses.txt
const coursesData = {
  postgraduate: [
    {
      id: 'analisis-redes',
      role: 'Head Professor',
      nombre: 'Análisis de Redes Tróficas Complejas en Ecosistemas Marinos',
      institucion: 'Centro de Investigación Científica y de Educación Superior de Ensenada (CICESE), México',
      periodo: '2025 - present (April - July)',
      language: 'Spanish',
      introductoryText: 'This postgraduate course is offered at the Centro de Investigación Científica y de Educación Superior de Ensenada (CICESE) in the Marine Ecology postgraduate program. It aims to train students in modeling, coding, and evaluating complex marine food webs using R.',
      overview: 'This theoretical-practical course introduces complex interaction networks in marine ecosystems. It covers the construction, structural complexity, and stability analysis of marine food webs, as well as the evaluation of species roles and quantitative interaction strengths. Through dedicated R programming laboratories, students work with public repositories to build network datasets and simulate ecosystem responses to perturbations.',
      url: 'https://posgrados.cicese.mx/ecologiamarina',
      pdfUrl: '/landingPageTomas/assets/teaching/Postgraduate 1.pdf'
    },
    {
      id: 'communicating-english',
      role: 'Assistant Professor',
      nombre: 'Communicating in English: Functional Academic English',
      institucion: 'Universidad Nacional de la Patagonia San Juan Bosco (UNPSJB), Argentina',
      periodo: '2025 - present (September - November)',
      language: 'English',
      introductoryText: 'This postgraduate course is taught at the Universidad Nacional de la Patagonia San Juan Bosco (UNPSJB, Puerto Madryn campus). It aims to enhance students\' productive writing and oral communication skills in international scientific contexts.',
      overview: 'This course equips postgraduate students and early-career researchers with the practical tools required for effective, correct scientific communication in English. Delivered through a hybrid model, it combines a virtual module on essential grammatical patterns and scientific vocabulary with an intensive in-person module focused on drafting manuscript sections, writing cover letters, responding to peer reviewers, and delivering professional oral presentations.',
      pdfUrl: '/landingPageTomas/assets/teaching/Postgraduate 2.pdf'
    }
  ],
  graduate: [
    {
      id: 'climate-change-sit',
      role: 'Invited Lecturer',
      nombre: 'Climate Change and Marine Biology in Southern Patagonia and Antarctica',
      institucion: 'School for International Training (SIT), USA',
      periodo: '2022 - present (every semester)',
      language: 'Spanish',
      introductoryText: 'Graduate course offered at SIT.',
      overview: 'Course on climate change impacts on marine ecosystems in Southern Patagonia and Antarctica, with an interdisciplinary approach.',
      url: 'https://studyabroad.sit.edu/program/spring-2027-argentina-people-environment-and-climate-change-in-patagonia-and-antarctica/'
    },
    {
      id: 'ecologia-comunidades',
      role: 'Invited Lecturer',
      nombre: 'Ecología de las Comunidades',
      institucion: 'Universidad Nacional de Tierra del Fuego, Antártida e Islas del Atlántico Sur (UNTDF), Argentina',
      periodo: '2018 - 2022',
      language: 'Spanish',
      introductoryText: 'Graduate course on community ecology.',
      overview: 'Study of ecological interactions, community structure, succession, and population dynamics in terrestrial and aquatic ecosystems.'
    },
    {
      id: 'ecologia-general-untdf',
      role: 'Invited Lecturer',
      nombre: 'Ecología General',
      institucion: 'Universidad Nacional de Tierra del Fuego, Antártida e Islas del Atlántico Sur (UNTDF), Argentina',
      periodo: '2018 - 2022',
      language: 'Spanish',
      introductoryText: 'Introductory ecology course for undergraduate programs.',
      overview: 'Fundamental ecological principles: energy flow, biogeochemical cycles, population and community dynamics, and adaptations to the environment.'
    },
    {
      id: 'ecologia-marina-unc',
      role: 'Invited Lecturer',
      nombre: 'Ecología Marina',
      institucion: 'Universidad Nacional de Córdoba (UNC), Argentina',
      periodo: '2020',
      language: 'Spanish',
      introductoryText: 'Undergraduate course on marine ecology.',
      overview: 'Study of marine ecosystems, primary productivity, food webs, biodiversity, and anthropogenic threats. Focus on the Southwestern Atlantic.'
    },
    {
      id: 'ecologia-general-unlu',
      role: 'Teaching Assistant',
      nombre: 'Ecología General',
      institucion: 'Universidad Nacional de Luján (UNLu), Argentina',
      periodo: '2016 - 2018',
      language: 'Spanish',
      introductoryText: 'Teaching assistant in General Ecology.',
      overview: 'Collaboration in practical classes, field trips, report correction, and student tutoring.'
    }
  ]
};

const Teaching = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedCourse(null), 300);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const handlePdfClick = (pdfUrl) => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  };

  // Renderizar tarjeta para cursos de posgrado
  const renderPostgraduateCard = (course) => (
    <div key={course.id} className="teaching-item">
      <div className="teaching-item-layout">
        <div className="teaching-item-content">
          <h3 className="teaching-title">{course.nombre}</h3>
          
          <div className="teaching-meta">
            <span className="role-badge">{course.role}</span>
            <span className="institution">{course.institucion}</span>
            <span className="period">{course.periodo}</span>
            <span className="language">{course.language}</span>
          </div>

          <div className="teaching-summary">
            <p>{course.introductoryText}</p>
          </div>

          <div className="teaching-actions">
            <button 
              className="view-teaching-btn"
              onClick={() => handleViewDetails(course)}
            >
              View Full Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Renderizar tarjeta para cursos de grado
  const renderGraduateCard = (course) => (
    <div key={course.id} className="teaching-item graduate-item">
      <div className="teaching-item-layout">
        <div className="teaching-item-content">
          <h3 className="teaching-title">{course.nombre}</h3>
          
          <div className="teaching-meta">
            <span className="role-badge">{course.role}</span>
            <span className="institution">{course.institucion}</span>
            <span className="period">{course.periodo}</span>
            <span className="language">{course.language}</span>
          </div>

          <div className="teaching-full-info">
            <p className="info-text">{course.introductoryText}</p>
            <p className="info-text">{course.overview}</p>
            {course.url && (
              <p className="info-text">
                <a href={course.url} target="_blank" rel="noopener noreferrer">
                  {course.url}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <ProfileTemplate title="Teaching Experience">
        <section className="teaching-page">
          <div className="container">
            {/* Sección: Postgraduate Courses */}
            <div className="section-group">
              <h2 className="section-subtitle">Postgraduate Courses</h2>
              <div className="teaching-list">
                {coursesData.postgraduate.map(course => renderPostgraduateCard(course))}
              </div>
            </div>

            {/* Sección: Graduate Courses */}
            <div className="section-group">
              <h2 className="section-subtitle">Graduate Courses / Invited Lecturer</h2>
              <div className="teaching-list">
                {coursesData.graduate.map(course => renderGraduateCard(course))}
              </div>
            </div>
          </div>
        </section>
      </ProfileTemplate>

      {/* Modal para mostrar los detalles completos */}
      {showModal && selectedCourse && (
        <div className="modal-overlay" onClick={handleModalClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>{selectedCourse.nombre}</h2>
              <button className="modal-close" onClick={handleCloseModal}>×</button>
            </div>
            <div className="modal-body">
              <div className="detail-item">
                <strong>Role:</strong> <span>{selectedCourse.role}</span>
              </div>
              <div className="detail-item">
                <strong>Institución:</strong> <span>{selectedCourse.institucion}</span>
              </div>
              <div className="detail-item">
                <strong>Periodo:</strong> <span>{selectedCourse.periodo}</span>
              </div>
              <div className="detail-item">
                <strong>Language:</strong> <span>{selectedCourse.language}</span>
              </div>
              <div className="detail-item">
                <strong>Introductory text:</strong> 
                <p>{selectedCourse.introductoryText}</p>
              </div>
              <div className="detail-item">
                <strong>Overview:</strong> 
                <p>{selectedCourse.overview}</p>
              </div>
              {selectedCourse.url && (
                <div className="detail-item">
                  <strong>URL:</strong> 
                  <a href={selectedCourse.url} target="_blank" rel="noopener noreferrer">
                    {selectedCourse.url}
                  </a>
                </div>
              )}
              {/* View PDF solo para los cursos que tienen pdfUrl */}
              {selectedCourse.pdfUrl && (
                <div className="detail-item pdf-detail-item">
                  <button 
                    className="modal-pdf-btn"
                    onClick={() => handlePdfClick(selectedCourse.pdfUrl)}
                  >
                    📄 View PDF
                  </button>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button className="modal-btn-close" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Teaching;