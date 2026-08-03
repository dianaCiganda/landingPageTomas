import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Mapamundi.css";
import { publications } from "../data/publicationsData";
import { projects } from "../data/projectsData";
import { useNavigate } from "react-router-dom";

// =================================
// ICONO PERSONALIZADO LEAFLET
// =================================
const markerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// =================================
// ENCUADRE INICIAL CON MEJOR ZOOM
// =================================
function InitialWorldView() {
  const map = useMap();

  useEffect(() => {
    map.invalidateSize();
    // Cambio: centrar en el Atlántico Norte para ver mejor Europa y Sudamérica
    map.setView([20, -10], 2);
  }, [map]);

  return null;
}

// =================================
// COMPONENTE DE BANDERA CON IMAGEN
// =================================
const Flag = ({ countryCode, size = 24 }) => {
  const flagUrl = `https://flagcdn.com/${countryCode.toLowerCase()}.svg`;
  
  return (
    <img 
      src={flagUrl} 
      alt={`Bandera de ${countryCode}`}
      style={{ 
        width: size, 
        height: size * 0.75,
        display: 'inline-block',
        verticalAlign: 'middle',
        marginLeft: '4px'
      }}
    />
  );
};

const Mapamundi = () => {
  const [selectedCollaborator, setSelectedCollaborator] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // =================================
  // DATOS DE COLABORACIONES
  // =================================
  const collaborations = [
    {
      id: 1,
      coordinates: [-53.1638, -70.917],
      title: "Punta Arenas",
      country: "Chile",
      countryEn: "Chile",
      countryCode: "CL",
      name: "Claudia D. Andrade, Ph.D.",
      institution: "Universidad de Magallanes",
      city: "Punta Arenas",
      address: "Av. Pdte. Manuel Bulnes 01855, 6210427 Punta Arenas, Magallanes y la Antártica Chilena, Chile",
      collaboration: "Marine trophic architecture and hidden ecological connections in the Strait of Magellan: keystone species and ecosystem resilience.",
      period: "05.2024 - present",
      type: "publication",
      publicationId: 5
    },
    {
      id: 2,
      coordinates: [59.8333, 22.9667], // Hanko, Finlandia
      title: "Hanko",
      country: "Finland",
      countryEn: "Finland",
      countryCode: "FI",
      name: "Susanne Kortsch, Ph.D.",
      institution: "University of Helsinki",
      city: "Hanko",
      address: "J.A. Palménin tie 260, 10900 Hanko, Finland",
      collaboration: "Featured Pub: The response of trophic interaction networks to multiple stressors along a large-scale latitudinal range in the Southern Hemisphere.\nPub: New insights into the Weddell Sea ecosystem applying a quantitative network approach.\nProy: What are the effects of anthropogenic environmental changes on trophic interactions in marine communities along the Southwest Atlantic - Antarctica latitudinal gradient?",
      period: "01.2022 - present",
      type: "multiple",
      publicationIds: [3, 8],
      projectId: 2
    },
    {
      id: 3,
      coordinates: [53.0833, 8.8],
      title: "Bremen",
      country: "Germany",
      countryEn: "Germany",
      countryCode: "DE",
      name: "Charlotte Havermans, Ph.D.",
      institution: "University of Bremen",
      city: "Bremen",
      address: "Bibliothekstraße 1, 28359 Bremen-Horn-Lehe, Germany",
      collaboration: "GLACIER-WEB – Glacier retreat and changing food webs: a bipolar eDNA assessment in fjord ecosystems.",
      period: "01.2026 - present",
      type: "project",
      projectId: 1
    },
    {
      id: 4,
      coordinates: [51.05, 3.7333],
      title: "Ghent",
      country: "Belgium",
      countryEn: "Belgium",
      countryCode: "BE",
      name: "Ulrike Braeckman, Ph.D.",
      institution: "Ghent University",
      city: "Ghent",
      address: "Sint-Pietersnieuwstraat 33, 9000 Ghent, Belgium",
      collaboration: "GLACIER-WEB – Glacier retreat and changing food webs: a bipolar eDNA assessment in fjord ecosystems.",
      period: "01.2026 - present",
      type: "project",
      projectId: 1
    },
    {
      id: 5,
      coordinates: [40.4167, -3.7033],
      title: "Madrid",
      country: "Spain",
      countryEn: "Spain",
      countryCode: "ES",
      name: "Francesco Polazzo & Andreu Rico",
      institution: "Institutos Madrileño de Estudios Avanzados (IMDEA) Agua",
      city: "Madrid",
      address: "Av. Punto Com, 2, 28805 Alcalá de Henares, Madrid, Spain",
      collaboration: "Food web rewiring drives long-term compositional differences and late-disturbance interactions at the community level.",
      period: "01.2021 - 04.2022",
      type: "publication",
      publicationId: 13
    }
  ];

  const getPublicationById = (id) => publications.find(pub => pub.id === id);
  const getProjectById = (id) => projects.find(proj => proj.id === id);

  const handleMarkerClick = (collab) => {
    setSelectedCollaborator(collab);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCollaborator(null);
  };

  const navigateToPublication = (id) => navigate(`/publication-detail/${id}`);
  const navigateToProject = (id) => navigate(`/project-detail/${id}`);

  const renderPublicationButtons = (publicationIds) => {
    if (!publicationIds || publicationIds.length === 0) return null;
    return publicationIds.map(id => {
      const pub = getPublicationById(id);
      if (!pub) return null;
      return (
        <button 
          key={id} 
          onClick={() => navigateToPublication(id)} 
          className="modal-link-btn"
        >
          📜 {pub.title.substring(0, 60)}...
        </button>
      );
    });
  };

  const renderProjectButton = (projectId) => {
    if (!projectId) return null;
    const project = getProjectById(projectId);
    if (!project) return null;
    return (
      <button 
        onClick={() => navigateToProject(projectId)} 
        className="modal-link-btn"
      >
        📊 {project.title.substring(0, 60)}...
      </button>
    );
  };

  return (
    <div className="map-real-container">
      <MapContainer
        center={[20, -10]} // ← Centrado en el Atlántico Norte
        zoom={2}            // ← Zoom más cercano para ver mejor Europa
        minZoom={1}
        maxZoom={8}
        scrollWheelZoom={true}
        dragging={true}
        bounceAtZoomLimits={false}
        worldCopyJump={false}
        className="leaflet-map"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          subdomains={["a", "b", "c"]}
          attribution="© OpenStreetMap"
          className="dark-blue-tiles"
        />

        {collaborations.map((collab) => (
          <Marker
            key={collab.id}
            position={collab.coordinates}
            icon={markerIcon}
            eventHandlers={{
              click: () => handleMarkerClick(collab)
            }}
          />
        ))}

        <InitialWorldView />
      </MapContainer>

      {/* MODAL DE COLABORACIONES */}
      {showModal && selectedCollaborator && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <h2 className="modal-name">{selectedCollaborator.name}</h2>

            <div className="modal-body">
              <div className="modal-info">
                <p className="modal-institution">
                  {selectedCollaborator.institution}
                  <span>,</span>
                  <span> {selectedCollaborator.city}</span>
                  <span>,</span>
                  <span> {selectedCollaborator.country}</span>
                  <Flag countryCode={selectedCollaborator.countryCode} size={16} />
                </p>
                
                <p className="modal-period">{selectedCollaborator.period}</p>
              </div>

              {selectedCollaborator.publicationIds && selectedCollaborator.publicationIds.length > 0 && (
                <div className="modal-links">
                  <p><strong>📜 Related Publications:</strong></p>
                  {renderPublicationButtons(selectedCollaborator.publicationIds)}
                </div>
              )}

              {selectedCollaborator.publicationId && !selectedCollaborator.publicationIds && (
                <div className="modal-links">
                  <p><strong>📜 Related Publication:</strong></p>
                  {renderPublicationButtons([selectedCollaborator.publicationId])}
                </div>
              )}

              {selectedCollaborator.projectId && (
                <div className="modal-links">
                  <p><strong>📊 Related Project:</strong></p>
                  {renderProjectButton(selectedCollaborator.projectId)}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mapamundi;