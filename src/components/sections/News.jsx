import React, { useEffect } from "react";
import "./News.css";
import ProfileTemplate from "../layout/ProfileTemplate";

const BASE = import.meta.env.BASE_URL; // "/" en dev, "/landingPageTomas/" en prod

const newsData = [
  {
    id: 1,
    title:
      "Active Participation in the 12th SCAR Open Science Conference in Oslo, Norway",
    images: [
      {
        src: `${BASE}assets/news/Imagen_1_1.jpg`,
        alt: "SCAR Open Science Conference Oslo",
      },
      {
        src: `${BASE}assets/news/Imagen_1_2.jpg`,
        alt: "Mini-symposium Antarctic and Southern Ocean Systems",
      },
      {
        src: `${BASE}assets/news/Imagen_1_3.png`,
        alt: "Oral presentation Life Sciences session",
      },
    ],
    paragraphs: [
      <>
        I participated in the 12th SCAR Open Science Conference, held from 8 to
        19 August 2026 in Oslo, Norway, contributing both as a session
        co-convenor and as an oral presenter. Together with Dr. Craig Stevens
        (New Zealand), Dr. Sian Henley and Dr. Caroline Holmes (United Kingdom),
        and Dr. Daniella Portella Sampaio (Brazil), I co-convened the plenary
        mini-symposium{" "}
        <em>
          Integrating Antarctic and Southern Ocean Systems: A Network and
          Cross-Disciplinary Perspective
        </em>
        . Drawing an audience of approximately 300 researchers, the session
        bridged network theory and climate dynamics to discuss systemic
        resilience, feedback loops, and cross-disciplinary collaboration in the
        face of ongoing environmental change. During the panel discussion, I
        also presented our work titled{" "}
        <em>
          First Evidence of Correlated Ecosystem Service and Food Web
          Robustness in a Sub-Antarctic Protected Area
        </em>
        .
      </>,
      <>
        In addition to the mini-symposium, I delivered an oral presentation in
        the Life Sciences session titled{" "}
        <em>
          Drivers of Marine Food-Web Architecture: Ecosystem Size and Latitude
          Predict Stability across the Southwest Atlantic – Antarctic Gradient
        </em>
        . This study applies a multivariate Bayesian metaweb framework across
        seven marine ecosystems (48°S–78°S) to evaluate how macroecological
        drivers shape network structure and dynamic stability, highlighting
        ecosystem size and latitude as primary determinants of marine food-web
        organization.
      </>,
      <>
        More details and the full abstract can be found in the official SCAR
        2026 Book of Abstracts:{" "}
        <a
          href="https://scar2026.org/programme/book-of-abstracts"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          https://scar2026.org/programme/book-of-abstracts
        </a>
      </>,
    ],
  },
  {
    id: 2,
    title: "New Role as Associate Editor of Ecological Indicators",
    images: [
      {
        src: `${BASE}assets/news/Imagen_2_1.png`,
        alt: "Ecological Indicators Associate Editor",
      },
    ],
    paragraphs: [
      <>
        I am pleased to announce that, starting September 1st, 2026, I have
        joined the editorial board of <em>Ecological Indicators</em> (Elsevier)
        as an Associate Editor. The journal serves as a leading international
        forum dedicated to integrating the monitoring and assessment of
        ecological and environmental indicators with direct management
        practices. It publishes cutting-edge research spanning theoretical
        development, quantitative modeling, index testing, and multiscale
        assessments across aquatic and terrestrial systems, bridging rigorous
        scientific evaluation with environmental policy.
      </>,
      <>
        In this role, I look forward to contributing my expertise in
        quantitative ecological modeling, complex network analysis, and marine
        ecosystem dynamics across high-latitude regions. My focus will center on
        submissions that advance novel methodological steps to assess ecosystem
        structure, resilience, and multi-stressor impacts. I warmly encourage
        colleagues and researchers working on innovative indicator development,
        applied ecological modeling, and management-oriented assessments to
        consider submitting their work to <em>Ecological Indicators</em>.
      </>,
      <>
        Link to Ecological Indicators:{" "}
        <a
          href="https://www.sciencedirect.com/journal/ecological-indicators"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          https://www.sciencedirect.com/journal/ecological-indicators
        </a>
      </>,
    ],
  },
  {
    id: 3,
    title:
      "New Role as Member of the PCAPS Task Team on Antarctic Extremes and Sustainability (TAES)",
    images: [
      {
        src: `${BASE}assets/news/Imagen_3_1.JPG`,
        alt: "PCAPS Task Team Antarctic Extremes and Sustainability",
      },
      {
        src: `${BASE}assets/news/Imagen_3_2.JPG`,
        alt: "Workshop Antarctic Extremes across disciplines",
      },
    ],
    paragraphs: [
      <>
        I have been selected as a member of the Task Team on Antarctic Extremes
        and Sustainability (TAES), an initiative established under Polar Coupled
        Analysis and Prediction for Services (PCAPS), a project of the World
        Meteorological Organization's World Weather Research Programme
        (WMO/WWRP). Following our initial virtual meeting in July 2026 led by
        Dr. Pranab Deb, I participated in person in the workshop{" "}
        <em>
          Antarctic Extremes across disciplines: building understanding and
          community
        </em>
        , held on 15 August 2026 alongside the SCAR Open Science Conference in
        Oslo (Norway). The workshop brought together researchers across
        physical, cryospheric, and biological sciences to examine
        cross-disciplinary definitions of extreme events, observation
        strategies, and tipping points across the continent.
      </>,
      <>
        TAES serves as an international, cross-disciplinary platform dedicated
        to advancing our understanding of Antarctic extreme events, such as
        atmospheric rivers, heatwaves, extreme melt episodes, and abrupt sea-ice
        loss, and analyzing their cascading impacts across cryospheric, oceanic,
        and ecological systems. In this role, I contribute ecological modeling
        perspectives to investigate how high-impact climate extremes alter
        marine food webs and ecosystem stability, while helping link predictive
        science with operational risk management, governance, and long-term
        sustainability ahead of major polar initiatives like the 5th
        International Polar Year (IPY 2032–2033).
      </>,
      <>
        More details on the PCAPS and TAES can be found here:{" "}
        <a
          href="https://www.wwrp-pcaps.net/about-pcaps"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          https://www.wwrp-pcaps.net/about-pcaps
        </a>
        ;{" "}
        <a
          href="https://www.wwrp-pcaps.net/what-we-do"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          https://www.wwrp-pcaps.net/what-we-do
        </a>
      </>,
    ],
  },
];

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <ProfileTemplate title="Tomás I. Marina">
      <section id="news" className="projects">
        <span className="section-tag">News</span>

        <div className="projects-list">
          {newsData.map((news) => (
            <div key={news.id} className="project-item">
              <div className="project-item-layout">
                <div className="project-item-content">
                  <div className="project-header">
                    <h2 className="project-title">{news.title}</h2>
                  </div>

                  <div className="news-text">
                    {news.paragraphs?.map((p, idx) => (
                      <p key={idx} className="news-paragraph">
                        {p}
                      </p>
                    ))}
                  </div>

                  <div
                    className={`project-item-image ${
                      news.images?.length > 1 ? "project-item-image--multi" : ""
                    }`}
                  >
                    {news.images?.map((img, idx) => (
                      <img
                        key={idx}
                        src={img.src}
                        alt={img.alt}
                        className="project-image"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ProfileTemplate>
  );
};

export default News;