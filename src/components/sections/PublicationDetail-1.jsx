// components/sections/publication-details/PublicationDetail1.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProfileTemplate from "../layout/ProfileTemplate";
import "./PublicationDetail.css";

const PublicationDetail1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  // FORZAR SCROLL AL INICIO
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    const timers = [
      setTimeout(() => window.scrollTo(0, 0), 0),
      setTimeout(() => window.scrollTo(0, 0), 50),
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100)
    ];
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, [location.pathname, location.key]);
  
  // Determinar qué publicación mostrar según la URL
  const getPublicationById = (id) => {
    const publications = {
      1: {
        id: 1,
        title: "First evidence of correlated ecosystem service and food web robustness in a sub-Antarctic marine protected area",
        type: "Journal article",
        authors: "J. Mitchell Porter, Luciana Riccialdelli, Gustavo A. Lovrich & Tomás I. Marina",
        year: 2026,
        journal: "Ecological Applications",
        volume: "45(2)",
        pages: "123-145",
        doi: "10.1002/eap.70268",
        url: "https://doi.org/10.1002/eap.70268",
        pdf: `${import.meta.env.BASE_URL}assets/Featured-pub-1.pdf`,
        abstract: "In protected areas management, ecosystem services (ES) are increasingly considered alongside biodiversity conservation. Even so, the decisions made with respect to ecosystem service conservation rarely include the potential cascade effects of biodiversity loss on ecosystem service provisions. We performed a series of extinction simulations for eight ES integrated into a food web model for the Namuncurá-Burdwood Bank Marine Protected Areas I and II (N-BB MPA; ~54–56° S, ~56–62° W). For the first time in a marine ecosystem of this scale, we find that the robustness of the food web to species loss is highly correlated with ES's robustness to species loss. This study builds on recent efforts to deploy network theory for establishing conservation goals and presents a novel approach for applying network theory to ES maintenance. We determine that ecosystem service providers play little role in maintaining network stability, and that highly connected species and species which support ES indirectly should receive greater attention from conservation planners. While existing data are likely insufficient to determine the true robustness of individual services, we suggest that integrating ES into existing food webs, even without detailed quantitative data on service provision, can complement existing predictions of structural changes to food webs to identify vulnerable ES."
      },
      2: {
        id: 2,
        title: "Disentangling the structure of an Antarctic plankton food web in bloom and non-bloom conditions",
        type: "Journal article",
        authors: "Sarah L. Mayr, Irene R. Schloss, Maximiliano D. García, Gastón O. Almandoz, Julieta S. Antoni & Tomás I. Marina",
        year: 2026,
        journal: "Frontiers in Marine Science",
        volume: "13",
        pages: "1868956",
        doi: "10.3389/fmars.2026.1868956",
        url: "https://doi.org/10.3389/fmars.2026.1868956",
        pdf: `${import.meta.env.BASE_URL}assets/Featured-pub-2.pdf`,
        abstract: "Despite the fundamental role of phytoplankton in Antarctic marine ecosystems, the trophic dynamics among planktonic organisms remain largely unexplored. This study aims to fill this gap by examining the trophic structure and dynamics of the Potter Cove plankton community under phytoplankton blooming and non-blooming conditions using a network-based approach. For the comparison between the two contrasting conditions, a bloom and a non-bloom season were chosen from the 30-year time series available, and interaction strength was added to the food web models of those specific years. Under the bloom condition, more trophic species of higher trophic level and with higher interaction strength were present, indicating greater food availability for higher trophic levels compared to the non-bloom condition. Under the non-bloom condition, microzooplankton organisms were of greater importance in transmitting energy to the higher trophic levels. This research provides a better understanding of the energy flow within the Antarctic plankton community and the importance of microzooplankton, enhancing our ability to predict the impacts of environmental change, including climate change, on polar marine ecosystems."
      },
      3: {
        id: 3,
        title: "The response of trophic interaction networks to multiple stressors along a large-scale latitudinal range in the Southern Hemisphere",
        type: "Journal article",
        authors: "Tomás I. Marina, Leonardo A. Saravia, Iara D. Rodriguez, Manuela Funes, Georgina Cordone, Santiago R. Doyle, Anahí Silvestro, David E. Galván, Susanne Kortsch & Fernando R. Momo",
        year: 2024,
        journal: "Environmental Reviews",
        volume: "32",
        pages: "1-18",
        doi: "10.1139/er-2024-0012",
        url: "https://doi.org/10.1139/er-2024-0012",
        pdf: `${import.meta.env.BASE_URL}assets/Featured-pub-3.pdf`,
        abstract: "Ecological networks offer valuable insights into community structure, key species identification, and ecosystem management. Understanding how these networks respond to global change stressors is of increasing interest, especially along geographical gradients. This review summarizes potential stressor responses in marine food webs from the Southwest Atlantic to the Antarctic (45–78° S), encompassing areas such as San Jorge Gulf, Beagle Channel, Burdwood Bank, Scotia Sea, Potter Cove, and the Weddell Sea in Antarctica. The objectives are (1) to describe the structure of marine food webs along this latitudinal axis using a network approach; (2) to identify predominant global change-related stressors affecting each ecosystem; and (3) to summarize observed food web changes and hypothesize on stressor impacts. The effects of stressors were primarily reviewed at the species level. Alternative hypotheses for each study area were formulated considering (a) main stressors; (b) impacted parameters; (c) node-level species properties; and (d) network-level food web properties. Global warming emerges as the most common stressor among the studied areas across the latitudinal gradient, except in the Beagle Channel and Burdwood Bank, where alien species introduction and fisheries are more influential. We offer a series of alternative hypotheses on how warming may affect the food webs. This review emphasizes the benefits of using a network approach to understand and predict stressor effects in Southern Hemisphere marine ecosystems. This approach provides a holistic understanding of ecosystems, which enhances our ability to identify key species and their interactions, offering insights for ecosystem management and conservation in the face of global change stressors."
      },
      4: {
        id: 4,
        title: "Standardising research on marine biological carbon pathways required to estimate sequestration at Polar and sub-Polar latitudes",
        type: "Journal article",
        authors: "Simon Morley, David K. A. Barnes, Camila Neder, ... Tomás I. Marina, ... & Oliver Zielinski",
        year: 2026,
        journal: "Earth-Science Reviews",
        volume: "260",
        pages: "105372",
        doi: "10.1016/j.earscirev.2025.105372",
        url: "https://doi.org/10.1016/j.earscirev.2025.105372",
        pdf: `${import.meta.env.BASE_URL}assets/PUB-3.pdf`,
        abstract: "Marine biological ('blue') carbon pathways are crucial components of the global carbon budget due to the ecosystem services they provide through the fixation of CO2 from the atmosphere. CO2 is removed from biosphere through long-term sequestration into seafloor sediments, removing it from the carbon cycle. Coincident with marine ice loss, little studied negative (mitigating) feedbacks to climate change are emerging in polar waters, which is important to quantify and comprehend. Understanding the mechanisms driving these pathways, that could lead to change, is a massive task and to ensure studies are comparable requires standardisation and prioritisation of future research. The expertise of scientists within the EU grant, Coastal ecosystem carbon balance in times of rapid glacier melt (CoastCarb), identified the 23 most important high latitude pathways through a modified Delphi scoring system. Metrics were selected as priorities for future research and for syntheses across broader geographic regions. The metrics with the highest importance scores also scored as the metrics that could be most readily standardised in the next five years. This review provides a definition and description of how each metric is measured, including its central role to blue carbon pathways. It also provides recommendations for standardisation, emphasising the requirement for modelling studies to scale from geographically limited regions where high-resolution data is available. Where methods cannot be standardised, cross calibration between methods is required to ensure reproducibility. An increasing use of remote sensing and innovative technologies will be necessary to scale measurements across this vast and remote region."
      },
      5: {
        id: 5,
        title: "Marine trophic architecture and hidden ecological connections in the Strait of Magellan: keystone species and ecosystem resilience",
        type: "Journal article",
        authors: "Claudia D. Andrade, Taryn Sepúlveda, Cristóbal Rivera, Cristian Aldea & Tomás I. Marina",
        year: 2026,
        journal: "Oikos",
        volume: "2026",
        pages: "e11711",
        doi: "10.1002/oik.11711",
        url: "https://doi.org/10.1002/oik.11711",
        pdf: `${import.meta.env.BASE_URL}assets/PUB-4.pdf`,
        abstract: "Understanding the ecological implications of species coexistence is central to biodiversity studies and to identify environmental and anthropogenic drivers of ecosystem dynamics, where ecological network analysis offers valuable insights. This study examines the complexity, structure, and potential responses to disturbances of the Strait of Magellan's topological food web. Based on a dataset of 438 predator–prey interactions among 139 trophic species (nodes), the food web was characterized using a two-scale approach. At the network level, descriptors including connectance, degree distribution, and small-world pattern, were used to evaluate overall architecture. At the node level, species' roles were assessed using degree, betweenness, closeness, condensed in a novel Keystone Species Index (KSI), and topological role. Potential resilience to ongoing perturbations was inferred by relating these network- and node-level properties. Overall, the network exhibits low connectance and an asymmetrical degree distribution, with a few species concentrating most interactions. Its small-world pattern, characterized by high clustering and short path lengths, suggests that local disturbances could propagate rapidly. More than half of the species are omnivorous, potentially buffering the system against fluctuations in prey availability. According to the KSI and topological role results, polychaetes, Fuegian sprat Sprattus fuegensis 'sardina fueguina', and Patagonian blenny Eleginops maclovinus 'róbalo patagónico', act as central conduits for matter and energy flow, linking benthic and pelagic production to higher trophic levels. The combination of low connectance, an asymmetric degree distribution, and small-world properties suggests that the food web is fragile to perturbations affecting highly connected species, with the potential to trigger trophic cascades. These findings highlight the importance of understanding trophic interactions for effective conservation and ecosystem management and provide new insights for the Strait of Magellan's ecosystem."
      },
      6: {
        id: 6,
        title: "Food web structure and species' role in an oceanic Marine Protected Area in the subantarctic",
        type: "Journal article",
        authors: "Melina Scian, Luciana Riccialdelli & Tomás I. Marina",
        year: 2025,
        journal: "Polar Biology",
        volume: "48",
        pages: "89",
        doi: "10.1007/s00300-025-03368-8",
        url: "https://doi.org/10.1007/s00300-025-03368-8",
        pdf: `${import.meta.env.BASE_URL}assets/PUB-5.pdf`,
        abstract: "The Marine Protected Area Yaganes (MPAY) was created in response to the significant deterioration of ecosystems caused by the environmental crisis affecting our planet, with the aim of protecting key ocean habitats and species. Located at the southern tip of South America, MPAY is home to a wide variety of marine biodiversity and habitats, making it of special interest for the conservation of sub-Antarctic environments. For the first time, we described the potential trophic interactions within the MPAY, with a focus on the pelagic realm. We applied both network-level and species-level approaches to characterise the structure and complexity of the food web, aiming to understand trophic dynamics and the specific roles of certain species within it. In terms of complexity, the MPAY food web consists of at least 124 species with 656 predator–prey interactions, a density of interactions of 5.29 and a connectance of 0.04. Regarding its structure, approximately 71% of the species occupy intermediate trophic levels. The Keystone Species Index (KSI) highlighted the importance of some species such as the Patagonian toothfish (Dissostichus eleginoides), the amphipod Themisto gaudichaudii, euphausiids and myctophids, among others, to the structure of the food web. Identifying the relevance of these species lays the groundwork for the effective stewardship of the little-known MPAY, focussing on its conservation."
      }
    };
    return publications[id] || publications[1];
  };

  // Obtener el ID de la URL
  const pathParts = location.pathname.split('/');
  const id = parseInt(pathParts[pathParts.length - 1]);
  const publication = getPublicationById(id);

  // Función para manejar el click en "All publications"
  const handleGoToPublications = (e) => {
    e.preventDefault();
    navigate('/publications');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  // Función para resaltar "Tomás I. Marina"
  const highlightAuthor = (authors) => {
    const nameToHighlight = "Tomás I. Marina";
    const parts = authors.split(nameToHighlight);
    
    if (parts.length === 1) {
      return <span>{authors}</span>;
    }
    
    return (
      <span>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <strong className="highlighted-author">{nameToHighlight}</strong>
            )}
          </React.Fragment>
        ))}
      </span>
    );
  };

  // Función para resaltar el término de búsqueda en un texto
  const highlightText = (text, searchTerm) => {
    if (!searchTerm || !text) return text;
    
    const searchLower = searchTerm.toLowerCase().trim();
    const textLower = text.toLowerCase();
    
    if (!textLower.includes(searchLower)) return text;
    
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      part.toLowerCase() === searchLower ? 
        <mark key={index} className="search-highlight">{part}</mark> : 
        part
    );
  };

  // Función para verificar si el texto contiene la búsqueda
  const matchesSearch = (text, searchTerm) => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase().trim();
    if (!searchLower) return true;
    return text.toLowerCase().includes(searchLower);
  };

  // Verificar si hay búsqueda
  const hasSearch = searchTerm.trim().length > 0;

  // Verificar si la publicación coincide con la búsqueda
  const publicationMatches = hasSearch ? (
    matchesSearch(publication.title, searchTerm) ||
    matchesSearch(publication.authors, searchTerm) ||
    matchesSearch(publication.journal, searchTerm) ||
    matchesSearch(publication.year.toString(), searchTerm) ||
    matchesSearch(publication.doi, searchTerm) ||
    matchesSearch(publication.abstract, searchTerm)
  ) : true;

  // Contar resultados encontrados
  const getMatchCount = () => {
    if (!hasSearch) return 0;
    let count = 0;
    if (matchesSearch(publication.title, searchTerm)) count++;
    if (matchesSearch(publication.authors, searchTerm)) count++;
    if (matchesSearch(publication.journal, searchTerm)) count++;
    if (matchesSearch(publication.year.toString(), searchTerm)) count++;
    if (matchesSearch(publication.doi, searchTerm)) count++;
    if (matchesSearch(publication.abstract, searchTerm)) count++;
    return count;
  };

  const matchCount = getMatchCount();

  return (
    <ProfileTemplate title="Tomás I. Marina">
      {/* BARRA DE BÚSQUEDA - DEBAJO DEL BANNER */}
      <div className="search-container">
        <div className="search-wrapper">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search in this publication..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              className="search-clear"
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
        <span className="search-results-count">
          {hasSearch ? `${matchCount} match${matchCount !== 1 ? 'es' : ''} found` : '0 results'}
        </span>
      </div>

      {/* MOSTRAR PUBLICACIÓN SOLO SI COINCIDE CON LA BÚSQUEDA */}
      {publicationMatches ? (
        <div className="publication-detail">
          {/* TÍTULO */}
          <h1 className="publication-detail-title">
            {hasSearch ? highlightText(publication.title, searchTerm) : publication.title}
          </h1>

          {/* TIPO DE PUBLICACIÓN */}
          <div className="publication-detail-type">
            {hasSearch ? highlightText(publication.type, searchTerm) : publication.type}
          </div>

          {/* AUTORES */}
          <div className="publication-detail-authors">
            {hasSearch ? highlightText(publication.authors, searchTerm) : highlightAuthor(publication.authors)}
          </div>

          {/* REVISTA, VOLUMEN, AÑO, PÁGINAS - EN UNA LÍNEA */}
          <div className="publication-detail-journal">
            <span className="journal-name">
              {hasSearch ? highlightText(publication.journal, searchTerm) : publication.journal}
            </span>
            <span className="journal-meta">
              {hasSearch ? (
                <>
                  , vol. {highlightText(publication.volume, searchTerm)}, {highlightText(publication.year.toString(), searchTerm)}, pp. {highlightText(publication.pages, searchTerm)}
                </>
              ) : (
                `, vol. ${publication.volume}, ${publication.year}, pp. ${publication.pages}`
              )}
            </span>
          </div>

          {/* DOI */}
          <div className="publication-detail-doi">
            <span className="doi-label">DOI: </span>
            <a href={publication.url} target="_blank" rel="noopener noreferrer" className="doi-link">
              {hasSearch ? highlightText(publication.doi, searchTerm) : publication.doi}
            </a>
          </div>

          {/* VIEW PDF - MOVIDO DEBAJO DEL DOI */}
          <div className="publication-detail-pdf">
            <a 
              href={publication.pdf} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="view-pdf-btn"
            >
              View PDF →
            </a>
          </div>

          {/* ABSTRACT CON TÍTULO */}
          <div className="publication-detail-abstract-section">
            <h2 className="abstract-title">
              {hasSearch ? highlightText("Abstract", searchTerm) : "Abstract"}
            </h2>
            <p className="abstract-text">
              {hasSearch ? highlightText(publication.abstract, searchTerm) : publication.abstract}
            </p>
          </div>

          {/* ACCIONES */}
          <div className="publication-detail-actions">
            <button 
              onClick={handleGoToPublications}
              className="btn-secondary"
            >
              All publications
            </button>
          </div>
        </div>
      ) : (
        /* MENSAJE DE NO RESULTADOS */
        <div className="no-results">
          <i className="fas fa-search no-results-icon"></i>
          <p className="no-results-text">
            No matches found for "<strong>{searchTerm}</strong>"
          </p>
          <p className="no-results-hint">
            Try searching for a different term in this publication.
          </p>
        </div>
      )}
    </ProfileTemplate>
    
  );
};

export default PublicationDetail1;