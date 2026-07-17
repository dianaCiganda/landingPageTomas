import React, { useState, useEffect } from "react";
import "./Publications.css";
import { Link, useNavigate } from "react-router-dom";
import ProfileTemplate from "../layout/ProfileTemplate";

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []); 
  
  // Array de publicaciones - Sin keywords
  const publications = [
    {
      id: 1,
      title: "First evidence of correlated ecosystem service and food web robustness in a sub-Antarctic marine protected area",
      authors: "J. Mitchell Porter, Luciana Riccialdelli, Gustavo A. Lovrich & Tomás I. Marina",
      year: 2026,
      journal: "Ecological Applications",
      doi: "10.1002/eap.70268",
      url: "https://doi.org/10.1002/eap.70268",
      pdf: `${import.meta.env.BASE_URL}assets/Featured-pub-1.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Featured-pub-1.png`
    },
    {
      id: 2,
      title: "Disentangling the structure of an Antarctic plankton food web in bloom and non-bloom conditions",
      authors: "Sarah L. Mayr, Irene R. Schloss, Maximiliano D. García, Gastón O. Almandoz, Julieta S. Antoni & Tomás I. Marina",
      year: 2026,
      journal: "Frontiers in Marine Science",
      doi: "10.3389/fmars.2026.1868956",
      url: "https://doi.org/10.3389/fmars.2026.1868956",
      pdf: `${import.meta.env.BASE_URL}assets/Featured-pub-2.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Featured-pub-2.png`
    },
    {
      id: 3,
      title: "The response of trophic interaction networks to multiple stressors along a large-scale latitudinal range in the Southern Hemisphere",
      authors: "Tomás I. Marina, Leonardo A. Saravia, Iara D. Rodriguez, Manuela Funes, Georgina Cordone, Santiago R. Doyle, Anahí Silvestro, David E. Galván, Susanne Kortsch & Fernando R. Momo",
      year: 2024,
      journal: "Environmental Reviews",
      doi: "10.1139/er-2024-0012",
      url: "https://doi.org/10.1139/er-2024-0012",
      pdf: `${import.meta.env.BASE_URL}assets/Featured-pub-3.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Featured-pub-3.png`
    },
    {
      id: 4,
      title: "Standardising research on marine biological carbon pathways required to estimate sequestration at Polar and sub-Polar latitudes",
      authors: "Simon Morley, David K. A. Barnes, Camila Neder, ... Tomás I. Marina, ... & Oliver Zielinski",
      year: 2026,
      journal: "Earth-Science Reviews",
      doi: "10.1016/j.earscirev.2025.105372",
      url: "https://doi.org/10.1016/j.earscirev.2025.105372",
      pdf: `${import.meta.env.BASE_URL}assets/PUB-3.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-3.png`
    },
    {
      id: 5,
      title: "Marine trophic architecture and hidden ecological connections in the Strait of Magellan: keystone species and ecosystem resilience",
      authors: "Claudia D. Andrade, Taryn Sepúlveda, Cristóbal Rivera, Cristian Aldea & Tomás I. Marina",
      year: 2026,
      journal: "Oikos",
      doi: "10.1002/oik.11711",
      url: "https://doi.org/10.1002/oik.11711",
      pdf: `${import.meta.env.BASE_URL}assets/PUB-4.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-4.png`
    },
    {
      id: 6,
      title: "Food web structure and species' role in an oceanic Marine Protected Area in the subantarctic",
      authors: "Melina Scian, Luciana Riccialdelli & Tomás I. Marina",
      year: 2025,
      journal: "Polar Biology",
      doi: "10.1007/s00300-025-03368-8",
      url: "https://doi.org/10.1007/s00300-025-03368-8",
      pdf: `${import.meta.env.BASE_URL}assets/PUB-5.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-5.png`
    },
    // Full list publications in the specific order you provided
    {
      id: 7,
      title: "Complex network of trophic interactions in Burdwood Bank, a sub-Antarctic oceanic marine protected area",
      authors: "Tomás I. Marina, Irene R. Schloss, Gustavo Lovrich, … & Luciana Riccialdelli",
      year: 2024,
      journal: "Marine Ecology Progress Series",
      doi: "10.3354/meps14600",
      url: "https://doi.org/10.3354/meps14600",
      pdf: `${import.meta.env.BASE_URL}assets/Pub 6.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-6.png`
    },
    {
      id: 8,
      title: "New insights into the Weddell Sea ecosystem applying a quantitative network approach",
      authors: "Tomás I. Marina, Leonardo A. Saravia & Susanne Kortsch",
      year: 2024,
      journal: "Ocean Science",
      doi: "10.5194/os-20-141-2024",
      url: "https://doi.org/10.5194/os-20-141-2024",
      pdf: `${import.meta.env.BASE_URL}assets/Pub 8.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-8.png`
    },
    {
      id: 9,
      title: "Estimating the Impact of Biodiversity Loss in a Marine Antarctic Food Web",
      authors: "Vanesa Salinas, Georgina Cordone, Tomás I. Marina & Fernando R. Momo",
      year: 2024,
      journal: "Diversity",
      doi: "10.3390/d16010063",
      url: "https://doi.org/10.3390/d16010063",
      pdf: `${import.meta.env.BASE_URL}assets/Pub 9.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-9.png`
    },
    {
      id: 10,
      title: "Complejidad y estabilidad en redes tróficas: un análisis de redes empíricas",
      authors: "Tomás I. Marina & Nathan Colbrunn",
      year: 2023,
      journal: "Anales del Instituto de la Patagonia",
      doi: "10.22352/AIP2023",
      url: "https://www.scielo.cl/scielo.php?pid=S0718-686X2023000100206&script=sci_arttext",
      pdf: `${import.meta.env.BASE_URL}assets/Pub 10.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-10.png`
    },
    {
      id: 11,
      title: "Ecological networks of an Antarctic ecosystem: a full description of non-trophic interactions",
      authors: "Vanesa Salinas, Tomás I. Marina, Georgina Cordone & Fernando R. Momo",
      year: 2023,
      journal: "Marine Biology",
      doi: "10.1007/s00227-022-04155-3",
      url: "https://doi.org/10.1007/s00227-022-04155-3",
      pdf: `${import.meta.env.BASE_URL}assets/Pub 11.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-11.png`
    },
    {
      id: 12,
      title: "Una revisión de los efectos de los cambios ambientales antropogénicos en las interacciones tróficas de cuatro ecosistemas marinos entre los 45° y 62° S",
      authors: "Tomás I. Marina & Leonardo A. Saravia",
      year: 2022,
      journal: "Anales del Instituto de la Patagonia",
      doi: "10.22352/AIP2022",
      url: "https://doi.org/10.22352/AIP2022",
      pdf: `${import.meta.env.BASE_URL}assets/Pub 12.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-12.png`
    },
    {
      id: 13,
      title: "Food web rewiring drives long-term compositional differences and late-disturbance interactions at the community level",
      authors: "Francesco Polazzo, Tomás I. Marina, Melina Crettaz-Minaglia & Andreu Rico",
      year: 2022,
      journal: "Proceedings of the National Academy of Sciences",
      doi: "10.1073/pnas.2117364119",
      url: "https://doi.org/10.1073/pnas.2117364119",
      pdf: `${import.meta.env.BASE_URL}assets/Pub 13.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-13.png`
    },
    {
      id: 14,
      title: "Marine food webs are more complex but less stable in sub-Antarctic (Beagle Channel, Argentina) than in Antarctic (Potter Cove, Antarctic Peninsula) regions",
      authors: "Iara D. Rodríguez, Tomás I. Marina, Irene R. Schloss & Leonardo A. Saravia",
      year: 2022,
      journal: "Marine Environmental Research",
      doi: "10.1016/j.marenvres.2022.105561",
      url: "https://doi.org/10.1016/j.marenvres.2022.105561",
      pdf: `${import.meta.env.BASE_URL}assets/Pub 14.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-14.png`
    },
    {
      id: 15,
      title: "Ecological network assembly: how the regional metaweb influences local food webs",
      authors: "Leonardo A. Saravia, Tomás I. Marina, Nadiah Kristensen, Marleen De Troch & Fernando R. Momo",
      year: 2022,
      journal: "Journal of Animal Ecology",
      doi: "10.1111/1365-2656.13652",
      url: "https://doi.org/10.1111/1365-2656.13652",
      pdf: `${import.meta.env.BASE_URL}assets/Pub 15.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-15.png`
    },
    {
      id: 16,
      title: "Southern Ocean food webs: progress, prognoses, future priorities and opportunities for policy makers",
      authors: "Stacey A. McCormack, Jessica Melbourne-Thomas, Rowan Trebilco, Gary Griffith, Simeon L. Hill, Carie Hoover, Nadine M. Johnston, Tomás I. Marina … & Andrew J. Constable",
      year: 2021,
      journal: "Frontiers in Ecology and Evolution",
      doi: "10.3389/fevo.2021.624763",
      url: "https://doi.org/10.3389/fevo.2021.624763",
      pdf: `${import.meta.env.BASE_URL}assets/Pub 16.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-16.png`
    },
    {
      id: 17,
      title: "Green vs brown food web: Effects of habitat type on multidimensional stability proxies for a highly-resolved Antarctic food web",
      authors: "Georgina Cordone, Vanesa Salinas, Tomás I. Marina, Santiago R. Doyle, Francesca Pasotti, Leonardo A. Saravia & Fernando R. Momo",
      year: 2020,
      journal: "Food Webs",
      doi: "10.1016/j.fooweb.2020.e00166",
      url: "https://doi.org/10.1016/j.fooweb.2020.e00166",
      pdf: `${import.meta.env.BASE_URL}assets/Pub 17.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-17.png`
    },
    {
      id: 18,
      title: "Seaweeds in the Antarctic marine coastal food web",
      authors: "Fernando R. Momo, Georgina Cordone, Tomás I. Marina, Vanesa Salinas, Gabriela L. Campana, Mariano Valli, Santiago R. Doyle & Leonardo A. Saravia",
      year: 2020,
      book: "Antarctic Seaweeds: diversity, adaptation and ecosystem services",
      doi: "10.1007/978-3-030-39448-6_15",
      url: "https://doi.org/10.1007/978-3-030-39448-6_15",
      pdf: `${import.meta.env.BASE_URL}assets/Pub 18.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-18.png`
    },
    {
      id: 19,
      title: "Soil fauna community and ecosystem's resilience: a food web approach",
      authors: "Gisela Maggiotto, Leticia Sabatté, Tomás I. Marina, Luciana Fueyo-Sánchez, Angélica M. Ramírez Londoño, Mónica Díaz Porres, Macarena Rionda, Marianela Domínguez, Rosa Perelli & Fernando R. Momo",
      year: 2019,
      journal: "Acta Oecologica",
      doi: "10.1016/j.actao.2019.103445",
      url: "https://doi.org/10.1016/j.actao.2019.103445",
      pdf: `${import.meta.env.BASE_URL}assets/Pub 19.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-19.png`
    },
    {
      id: 20,
      title: "Effects of macroalgae loss in an Antarctic marine food web: applying extinction thresholds to food web studies",
      authors: "Georgina Cordone, Tomás I. Marina, Vanesa Salinas, Santiago R. Doyle, Leonardo A. Saravia & Fernando R. Momo",
      year: 2018,
      journal: "PeerJ",
      doi: "10.7717/peerj.5531",
      url: "https://doi.org/10.7717/peerj.5531",
      pdf: `${import.meta.env.BASE_URL}assets/Pub 20.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-20.png`
    },
    {
      id: 21,
      title: "Long-finned Pilot Whale (Globicephala melas Traill, 1809) subspecies in the Atlantic Ocean: are there differences in their skulls?",
      authors: "Tomás I. Marina, María Constanza Marchesi & R. Natalie P. Goodall",
      year: 2018,
      journal: "Marine Mammal Science",
      doi: "10.1111/mms.12548",
      url: "https://doi.org/10.1111/mms.12548",
      pdf: `${import.meta.env.BASE_URL}assets/Pub 21.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-21.png`
    },
    {
      id: 22,
      title: "Architecture of marine food webs: To be or not be a 'small-world'",
      authors: "Tomás I. Marina, Leonardo A. Saravia, Georgina Cordone, Vanesa Salinas, Santiago R. Doyle & Fernando R. Momo",
      year: 2018,
      journal: "PLoS ONE",
      doi: "10.1371/journal.pone.0198217",
      url: "https://doi.org/10.1371/journal.pone.0198217",
      pdf: `${import.meta.env.BASE_URL}assets/Pub 22.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-22.png`
    },
    {
      id: 23,
      title: "The food web of Potter Cove (Antarctica): complexity, structure and function",
      authors: "Tomás I. Marina, Vanesa Salinas, Georgina Cordone, Gabriela Campana, Eugenia Moreira, Dolores Deregibus, Luciana Torre, Ricardo Sahade, Marcos Tatián, Esteban Barrera Oro, Marleen De Troch, Santiago R. Doyle, María Liliana Quartino, Leonardo A. Saravia & Fernando R. Momo",
      year: 2018,
      journal: "Estuarine, Coastal and Shelf Science",
      doi: "10.1016/j.ecss.2017.10.015",
      url: "https://doi.org/10.1016/j.ecss.2017.10.015",
      pdf: `${import.meta.env.BASE_URL}assets/Pub 23.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-23.png`
    },
    {
      id: 24,
      title: "Respuesta de la comunidad de fitoplancton y zooplancton al afloramiento de agua subterránea y surgencia costera en la península de Yucatán, México",
      authors: "Tomás I. Marina, Jorge A. Herrera-Silveira & Israel Medina-Gómez",
      year: 2017,
      journal: "Ecología Austral",
      doi: "10.25260/EA.17.27.2.0.229",
      url: "https://doi.org/10.25260/EA.17.27.2.0.229",
      pdf: `${import.meta.env.BASE_URL}assets/Pub 24.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Pub-24.png`
    }
  ];

  // Función para filtrar publicaciones
  const getFilteredPublications = () => {
    const searchLower = searchTerm.toLowerCase().trim();
    
    if (!searchLower) {
      return publications;
    }
    
    return publications.filter((pub) => {
      const searchableFields = [
        pub.title,
        pub.authors,
        pub.journal,
        pub.book,
        pub.year.toString(),
        pub.doi
      ].filter(Boolean);
      
      return searchableFields.some(field => 
        field.toLowerCase().includes(searchLower)
      );
    });
  };

  const filteredPublications = getFilteredPublications();
  const hasSearch = searchTerm.trim().length > 0;

  // FUNCIÓN MODIFICADA CON LA CLASE authors-list
  const highlightAuthor = (authors) => {
    const nameToHighlight = "Tomás I. Marina";
    const parts = authors.split(nameToHighlight);
    
    if (parts.length === 1) {
      return <span className="authors-list">{authors}</span>;
    }
    
    return (
      <span className="authors-list">
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

  const handleReadMore = (id) => {
    console.log("Navegando a publicación con ID:", id);
    try {
      navigate(`/publication-detail/${id}`);
    } catch (error) {
      console.error("Error con navigate, usando fallback:", error);
      window.location.href = `/publication-detail/${id}`;
    }
  };

  const allPublications = filteredPublications;
  
  const featuredPublications = allPublications.filter(pub => pub.id >= 1 && pub.id <= 3);
  
  const fullListOrder = [2, 1, 4, 5, 6, 3, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  
  const fullListPublications = allPublications.filter(pub => fullListOrder.includes(pub.id))
    .sort((a, b) => fullListOrder.indexOf(a.id) - fullListOrder.indexOf(b.id));

  const getPublicationText = (publication) => {
    if (publication.book) {
      return publication.book;
    }
    return publication.journal || '';
  };

  const getPublicationLabel = (publication) => {
    if (publication.book) {
      return "Book:";
    }
    return "Journal:";
  };

  return (
    <ProfileTemplate title="Tomás I. Marina">
      <div className="search-container">
        <div className="search-wrapper">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search publications by title, author, journal, year..."
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
          {hasSearch ? `${filteredPublications.length} result${filteredPublications.length !== 1 ? 's' : ''}` : ''}
        </span>
      </div>

      <section id="publications" className="publications">
        <span className="section-tag">Featured publications</span>

        <div className="publications-content">
          {featuredPublications.map((publication, index) => (
            <div 
              key={publication.id} 
              className={`publication-preview ${index === 0 ? 'featured' : ''}`}
            >
              <div className="publication-preview-layout">
                <div className="publication-preview-image">
                  <img 
                    src={publication.image} 
                    alt={publication.title}
                    className="pub-featured-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"%3E%3Crect width="300" height="300" fill="%23f0faf9"/%3E%3Ctext x="150" y="150" font-family="Arial" font-size="16" fill="%232ec4b6" text-anchor="middle" dominant-baseline="middle"%3EPublication%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <div className="publication-preview-content">
                  <h2 
                    className="titulo-publication"
                    onClick={() => handleReadMore(publication.id)}
                  >
                    {hasSearch ? highlightText(publication.title, searchTerm) : publication.title}
                  </h2>
                  
                  <div className="publication-meta">
                    <p className="author-line">
                      <span className="meta-label">Authors:</span> 
                      {hasSearch ? highlightText(publication.authors, searchTerm) : highlightAuthor(publication.authors)}
                    </p>
                    <p>
                      <span className="meta-label">Journal:</span> 
                      {hasSearch ? highlightText(publication.journal, searchTerm) : publication.journal}
                    </p>
                    <p>
                      <span className="meta-label">Year:</span> 
                      {hasSearch ? highlightText(publication.year.toString(), searchTerm) : publication.year}
                    </p>
                    <p>
                      <span className="meta-label">DOI:</span> 
                      <a href={publication.url} target="_blank" rel="noopener noreferrer" className="doi-link">
                        {hasSearch ? highlightText(publication.doi, searchTerm) : publication.doi}
                      </a>
                    </p>
                  </div>
                  
                  <div className="publication-actions">
                    <a 
                      href={publication.pdf} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="view-pdf-btn"
                    >
                      View PDF →
                    </a>
                    <button 
                      onClick={() => handleReadMore(publication.id)}
                      className="read-more-btn"
                    >
                      Read more →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {fullListPublications.length > 0 && (
          <>
            <div className="full-list-header">
              <span className="section-tag">Full list of publications</span>
            </div>

            <div className="publications-content">
              {fullListPublications.map((publication) => (
                <div 
                  key={publication.id} 
                  className="publication-preview"
                >
                  <div className="publication-preview-layout">
                    <div className="publication-preview-image">
                      <img 
                        src={publication.image} 
                        alt={publication.title}
                        className="pub-featured-image"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"%3E%3Crect width="300" height="300" fill="%23f0faf9"/%3E%3Ctext x="150" y="150" font-family="Arial" font-size="16" fill="%232ec4b6" text-anchor="middle" dominant-baseline="middle"%3EPublication%3C/text%3E%3C/svg%3E';
                        }}
                      />
                    </div>
                    <div className="publication-preview-content">
                      <h2 
                        className="titulo-publication"
                        onClick={() => handleReadMore(publication.id)}
                      >
                        {hasSearch ? highlightText(publication.title, searchTerm) : publication.title}
                      </h2>
                      
                      <div className="publication-meta">
                        <p>
                          <span className="meta-label">Authors:</span> 
                          {hasSearch ? highlightText(publication.authors, searchTerm) : highlightAuthor(publication.authors)}
                        </p>
                        <p>
                          <span className="meta-label">{getPublicationLabel(publication)}</span> 
                          {hasSearch ? highlightText(getPublicationText(publication), searchTerm) : getPublicationText(publication)}
                        </p>
                        <p>
                          <span className="meta-label">Year:</span> 
                          {hasSearch ? highlightText(publication.year.toString(), searchTerm) : publication.year}
                        </p>
                        <p>
                          <span className="meta-label">DOI:</span> 
                          <a href={publication.url} target="_blank" rel="noopener noreferrer" className="doi-link">
                            {hasSearch ? highlightText(publication.doi, searchTerm) : publication.doi}
                          </a>
                        </p>
                      </div>
                      
                      <div className="publication-actions">
                        <a 
                          href={publication.pdf} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="view-pdf-btn"
                        >
                          View PDF →
                        </a>
                        <button 
                          onClick={() => handleReadMore(publication.id)}
                          className="read-more-btn"
                        >
                          Read more →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {hasSearch && filteredPublications.length === 0 && (
          <div className="no-results">
            <i className="fas fa-search no-results-icon"></i>
            <p className="no-results-text">
              No publications found matching "<strong>{searchTerm}</strong>"
            </p>
            <p className="no-results-hint">
              Try adjusting your search terms or browse all publications above.
            </p>
          </div>
        )}
      </section>
    </ProfileTemplate>
  );
};

export default Publications;