import React, { useState, useEffect } from "react";
import "./Publications.css";
import { Link, useNavigate } from "react-router-dom";
import ProfileTemplate from "../layout/ProfileTemplate";
import SearchFilter from "../sections/SearchFilter";
import { publications } from "../../data/publicationsData";
import { projects } from "../../data/projectsData";


const Publications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

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

  // Función para resaltar el nombre del autor
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
    try {
      navigate(`/publication-detail/${id}`);
    } catch (error) {
      window.location.href = `/publication-detail/${id}`;
    }
  };

  const allPublications = filteredPublications;

  // Featured publications: IDs 1, 2, 3
  const featuredPublications = allPublications.filter(pub => pub.id >= 1 && pub.id <= 3);

  // Full list order
  const fullListOrder = [2, 1, 4, 5, 6, 3, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

  const fullListPublications = allPublications
    .filter(pub => fullListOrder.includes(pub.id))
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
      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Search publications by title, author, journal, year..."
        resultsCount={filteredPublications.length}
        resultsLabel={filteredPublications.length !== 1 ? 'results' : 'result'}
      />

      <section id="publications" className="publications">
        {/* FEATURED PUBLICATIONS */}
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
                    style={{ cursor: 'pointer' }}
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

        {/* FULL LIST OF PUBLICATIONS */}
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
                        style={{ cursor: 'pointer' }}
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

        {/* NO RESULTS */}
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