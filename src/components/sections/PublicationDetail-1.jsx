import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProfileTemplate from "../layout/ProfileTemplate";
import "./PublicationDetail.css";
import SearchFilter from "../sections/SearchFilter";

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
      },
      7: {
        id: 7,
        title: "Complex network of trophic interactions in Burdwood Bank, a sub-Antarctic oceanic marine protected area",
        type: "Journal article",
        authors: "Tomás I. Marina, Irene R. Schloss, Gustavo Lovrich, … & Luciana Riccialdelli",
        year: 2024,
        journal: "Marine Ecology Progress Series",
        volume: "740",
        pages: "1-18",
        doi: "10.3354/meps14600",
        url: "https://doi.org/10.3354/meps14600",
        pdf: `${import.meta.env.BASE_URL}assets/Pub 6.pdf`,
        abstract: "The world's oceans designated under marine protection have increased recently. Most marine protected areas (MPAs) target vulnerable, keystone, charismatic, and/or endemic species. In the sub-Antarctic, ocean protection is associated with oceanic islands, except for the MPAs Namuncurá–Burdwood Bank I and II (MPA N-BB; ~53–55° S, ~56–62° W), which are associated with a submarine plateau and a southern deep slope, respectively. We present the first analysis of the predator–prey network for the MPA N-BB, applying a topological network approach to characterise the complexity and structure of the food web and to identify the species' role. The MPA NBB food web consists of 1788 interactions and 379 species, with a connectance of 0.01. Almost half of the consumers feed at more than one trophic level (0.48), and the network displays a small-world pattern (short path length, high clustering of compartments). This network pattern suggests that the ecosystem might be vulnerable to perturbations targeting highly connected species, although some properties might provide resilience and resistance, resulting in a rearranged structure that preserves its original functions. Several species arise as being important in trophic structure and functioning and response to perturbations. Generalist species, mainly fishes, play a crucial role in the bentho-pelagic coupling and should be considered as relevant energy transfer agents for the ecosystem. We argue that the diversity of species, including both the benthic and pelagic habitats, is responsible for securing the connectivity within the food web to withstand perturbations, thereby contributing to the structure and stability of the ecosystem."
      },
      8: {
        id: 8,
        title: "New insights into the Weddell Sea ecosystem applying a quantitative network approach",
        type: "Journal article",
        authors: "Tomás I. Marina, Leonardo A. Saravia & Susanne Kortsch",
        year: 2024,
        journal: "Ocean Science",
        volume: "20",
        pages: "141-158",
        doi: "10.5194/os-20-141-2024",
        url: "https://doi.org/10.5194/os-20-141-2024",
        pdf: `${import.meta.env.BASE_URL}assets/Pub 8.pdf`,
        abstract: "Network approaches can shed light on the structure and stability of complex marine communities. In recent years, such approaches have been successfully applied to study polar ecosystems, improving our knowledge on how they might respond to ongoing environmental changes. The Weddell Sea is one of the most studied marine ecosystems outside the Antarctic Peninsula in the Southern Ocean. Yet, few studies consider the known complexity of the Weddell Sea food web, which in its current form comprises 490 species and 16,041 predator–prey interactions. Here we analysed the Weddell Sea food web, focusing on the species and trophic interactions that underpin ecosystem structure and stability. We estimated the strength for each interaction in the food web, characterised species position in the food web using unweighted and weighted food web properties, and analysed species' roles with respect to the stability of the food web. We found that the distribution of the interaction strength (IS) at the food web level is asymmetric, with many weak interactions and few strong ones. We detected a positive relationship between species median IS and two unweighted properties (i.e. trophic level and the total number of interactions). We also found that only a few species possess key positions in terms of food web stability. These species are characterised by high median IS, a middle to high trophic level, a relatively high number of interactions, and middle to low trophic similarity. In this study, we integrated unweighted and weighted food web information, enabling a more complete assessment of the ecosystem structure and function of the Weddell Sea food web. Our results provide new insights, which are important for the development of effective policies and management strategies, particularly given the ongoing initiative to implement a marine protected area (MPA) in the Weddell Sea."
      },
      9: {
        id: 9,
        title: "Estimating the Impact of Biodiversity Loss in a Marine Antarctic Food Web",
        type: "Journal article",
        authors: "Vanesa Salinas, Georgina Cordone, Tomás I. Marina & Fernando R. Momo",
        year: 2024,
        journal: "Diversity",
        volume: "16",
        pages: "63",
        doi: "10.3390/d16010063",
        url: "https://doi.org/10.3390/d16010063",
        pdf: `${import.meta.env.BASE_URL}assets/Pub 9.pdf`,
        abstract: "The consequences of climate change and anthropogenic stressors, such as habitat loss and overexploitation, are threatening the subsistence of species and communities across the planet. Therefore, it is crucial that we analyze the impact of environmental perturbations on the diversity, structure and function of ecosystems. In this study, in silico simulations of biodiversity loss were carried out on the marine food web of Caleta Potter (25 de Mayo/King George Island, Antarctica), where global warming has caused critical changes in the abundance and distribution of benthic and pelagic communities over the last 30 years. We performed species removal, considering their degree and trophic level, and including four different thresholds on the occurrence of secondary extinctions. We examined the impact of extinctions on connectance, modularity and stability of the food web. We found different responses for these properties depending on the extinction criteria used, e.g., large increase in modularity and rapid decrease in stability when the most connected and relatively high-trophic-level species were removed. Additionally, we studied the complexity–stability relationship of the food web, and found two regimes: (1) high sensitivity to small perturbations, suggesting that Potter Cove would be locally unstable, and (2) high persistence to long-range perturbations, suggesting global stability of this ecosystem."
      },
      10: {
        id: 10,
        title: "Complejidad y estabilidad en redes tróficas: un análisis de redes empíricas",
        type: "Journal article",
        authors: "Tomás I. Marina & Nathan Colbrunn",
        year: 2023,
        journal: "Anales del Instituto de la Patagonia",
        volume: "51",
        pages: "1-15",
        doi: "10.22352/AIP2023",
        url: "https://www.scielo.cl/scielo.php?pid=S0718-686X2023000100206&script=sci_arttext",
        pdf: `${import.meta.env.BASE_URL}assets/Pub 10.pdf`,
        abstract: "Food webs describe the predator-prey interactions that occur in a given habitat. They are useful tools for analyzing complexity and stability, as well as the relationship between these properties, in natural ecosystems. In this work we studied stability, measured as connectance (C=L/S2, where S is the number of species and L the number of interactions), and the complexity-stability relationship in 314 empirical food webs considering different type of ecosystems (freshwater, marine and terrestrial) in a wide complexity range. For this we considered two indicators of stability, modularity and the 'Quasi-Sign Stability' index, which we evaluated generally using a non-parametric test (Kruskal-Wallis), and by ecosystem type applying post-hoc comparisons (Wilcoxon test). Our results show significant differences in the stability indicators analyzed according to the type of ecosystem. Based on modularity, the increasing order of stability was: marine, freshwater and terrestrial networks; based on the 'Quasi-Sign Stability' index: terrestrial, marine and freshwater. The complexity-stability relationship was different not only according to the stability indicator considered, but also the type of ecosystem. In this sense, we suggest that it is essential to consider the multidimensionality of stability when evaluating it specifically and in the context of the complexity-stability relationship in food webs, as well as the type of ecosystem."
      },
      11: {
        id: 11,
        title: "Ecological networks of an Antarctic ecosystem: a full description of non-trophic interactions",
        type: "Journal article",
        authors: "Vanesa Salinas, Tomás I. Marina, Georgina Cordone & Fernando R. Momo",
        year: 2023,
        journal: "Marine Biology",
        volume: "170",
        pages: "23",
        doi: "10.1007/s00227-022-04155-3",
        url: "https://doi.org/10.1007/s00227-022-04155-3",
        pdf: `${import.meta.env.BASE_URL}assets/Pub 11.pdf`,
        abstract: "Interactions between organisms are diverse and attend to multiple biological demands; hence, understanding ecological communities requires considering different types of species interactions beyond predation. In this work, we assembled the non-trophic networks of a marine Antarctic ecosystem for the first time. We report mutualistic (+/+), competitive (−/−), commensalistic (+/0) and amensalistic (−/0) interactions between species of the Potter Cove marine community (South Shetland Is., Antarctica). Based on a network approach, we present a full description of each type of interaction and analyze its distribution according to different species-level properties. Also, we constructed a multiple interactions network including trophic and non-trophic interactions and studied network-level properties. We found more than double non-trophic interactions than trophic mostly corresponding to competitive interactions that mainly involve mid-trophic level species. Low-trophic level species were mainly involved in mutualistic and amensalistic interactions. We observed that single-type interaction networks display differences in their topology. Finally, we highlight that including a description of species interactions in ecological network analyses provides a better understanding of ecosystems which it is crucial to comprehend and predict ecosystems responses to environmental changes."
      },
      12: {
        id: 12,
        title: "Una revisión de los efectos de los cambios ambientales antropogénicos en las interacciones tróficas de cuatro ecosistemas marinos entre los 45° y 62° S",
        type: "Journal article",
        authors: "Tomás I. Marina & Leonardo A. Saravia",
        year: 2022,
        journal: "Anales del Instituto de la Patagonia",
        volume: "50",
        pages: "1-20",
        doi: "10.22352/AIP2022",
        url: "https://doi.org/10.22352/AIP2022",
        pdf: `${import.meta.env.BASE_URL}assets/Pub 12.pdf`,
        abstract: "Los efectos ocasionados por los cambios ambientales antropogénicos en las comunidades de los ecosistemas marinos han sido y siguen siendo motivo de diversas líneas de investigación. En los últimos años se ha evidenciado la importancia de considerar las interacciones tróficas para comprender mejor los efectos de dichos cambios en los ecosistemas marinos. En este trabajo de revisión nos propusimos resumir el estado de conocimiento sobre las interacciones tróficas y los principales efectos de los cambios ambientales antropogénicas sobre las mismas ciertos para ecosistemas marinos que conforman un gradiente latitudinal Atlántico Sudoccidental - Antártida. Estos ecosistemas son: Golfo San Jorge (45° - 47° S, 65° - 68° O), Área Marina Protegida Namuncurá - Banco Burdwood (54° S, 59° O), Canal Beagle (54° S, 68° O) y Caleta Potter (62° S, 58° O). Además, proponemos perspectivas de investigación para mejorar la comprensión acerca de cómo las perturbaciones ambientales antropogénicas afectan la compleja red de interacciones presa-depredador que ocurre en cada uno de los ecosistemas del gradiente analizado."
      },
      13: {
        id: 13,
        title: "Food web rewiring drives long-term compositional differences and late-disturbance interactions at the community level",
        type: "Journal article",
        authors: "Francesco Polazzo, Tomás I. Marina, Melina Crettaz-Minaglia & Andreu Rico",
        year: 2022,
        journal: "Proceedings of the National Academy of Sciences",
        volume: "119",
        pages: "e2117364119",
        doi: "10.1073/pnas.2117364119",
        url: "https://doi.org/10.1073/pnas.2117364119",
        pdf: `${import.meta.env.BASE_URL}assets/Pub 13.pdf`,
        abstract: "Ecological communities are constantly exposed to multiple natural and anthropogenic disturbances. Multivariate composition (if recovered) has been found to need significantly more time to be regained after pulsed disturbance compared to univariate diversity metrics and functional endpoints. However, the mechanisms driving the different recovery times of communities to single and multiple disturbances remain unexplored. Here, we apply quantitative ecological network analyses to try to elucidate the mechanisms driving long-term community-composition dissimilarity and late-stage disturbance interactions at the community level. For this, we evaluate the effects of two pesticides, nutrient enrichment, and their interactions in outdoor mesocosms containing a complex freshwater community. We found changes in interactions strength to be strongly related to compositional changes and identified postdisturbance interaction-strength rewiring to be responsible for most of the observed compositional changes. Additionally, we found pesticide interactions to be significant in the long term only when both interaction strength and food-web architecture are reshaped by the disturbances. We suggest that quantitative network analysis has the potential to unveil ecological processes that prevent long-term community recovery."
      },
      14: {
        id: 14,
        title: "Marine food webs are more complex but less stable in sub-Antarctic (Beagle Channel, Argentina) than in Antarctic (Potter Cove, Antarctic Peninsula) regions",
        type: "Journal article",
        authors: "Iara D. Rodríguez, Tomás I. Marina, Irene R. Schloss & Leonardo A. Saravia",
        year: 2022,
        journal: "Marine Environmental Research",
        volume: "179",
        pages: "105561",
        doi: "10.1016/j.marenvres.2022.105561",
        url: "https://doi.org/10.1016/j.marenvres.2022.105561",
        pdf: `${import.meta.env.BASE_URL}assets/Pub 14.pdf`,
        abstract: "Food web structure plays an important role in determining ecosystem stability against perturbations. High-latitude marine ecosystems are being affected by environmental stressors and biological invasions. In the West Antarctic Peninsula these transformations are mainly driven by climate change, while in the sub-Antarctic region by anthropogenic activities. Understanding the differences between these areas is necessary to monitor the changes that are expected to occur in the upcoming decades. Here, we compared the structure and stability of Antarctic (Potter Cove) and sub-Antarctic (Beagle Channel) marine food webs. We compiled species trophic interactions (predator-prey) and calculated complexity, structure and stability metrics. Even if both food webs presented the same connectance, we found important differences between them. The Beagle Channel food web is more complex, but less stable and sensitive to the loss of its most connected species, while the Potter Cove food web presented lower complexity and greater stability against perturbations."
      },
      15: {
        id: 15,
        title: "Ecological network assembly: how the regional metaweb influences local food webs",
        type: "Journal article",
        authors: "Leonardo A. Saravia, Tomás I. Marina, Nadiah Kristensen, Marleen De Troch & Fernando R. Momo",
        year: 2022,
        journal: "Journal of Animal Ecology",
        volume: "91",
        pages: "1330-1345",
        doi: "10.1111/1365-2656.13652",
        url: "https://doi.org/10.1111/1365-2656.13652",
        pdf: `${import.meta.env.BASE_URL}assets/Pub 15.pdf`,
        abstract: "Local food webs result from a sequence of colonisations and extinctions by species from the regional pool or metaweb, that is, the assembly process. Assembly is theorised to be a selective process: whether or not certain species or network structures can persist is partly determined by local processes including habitat filtering and dynamical constraints. Consequently, local food web structure should reflect these processes. The goal of this study was to test evidence for these selective processes by comparing the structural properties of real food webs to the expected distribution given the metaweb. We were particularly interested in ecological dynamics; if the network properties commonly associated with dynamical stability are indeed the result of stability constraints, then they should deviate from expectation in the direction predicted by theory. To create a null expectation, we used the novel approach of randomly assembling model webs by drawing species and interactions from the empirical metaweb. The assembly model permitted colonisation and extinction, and required a consumer species to have at least one prey, but had no habitat type nor population dynamical constraints. Three datasets were used: (a) the marine Antarctic metaweb, with two local food webs; (b) the 50 lakes of the Adirondacks; and (c) the arthropod community from Florida Keys' classic defaunation experiment. Contrary to our expectations, we found that there were almost no differences between empirical webs and those resulting from the null assembly model. Few empirical food webs showed significant differences with network properties, motif representations and topological roles. Network properties associated with stability did not deviate from expectation in the direction predicted by theory. Our results suggest that—for the commonly used metrics we considered—local food web structure is not strongly influenced by dynamical nor habitat restrictions. Instead, the structure is inherited from the metaweb. This suggests that the network properties typically attributed as causes or consequences of ecological stability are instead a by-product of the assembly process (i.e. spandrels), and may potentially be too coarse to detect the true signal of dynamical constraint."
      },
      16: {
        id: 16,
        title: "Southern Ocean food webs: progress, prognoses, future priorities and opportunities for policy makers",
        type: "Journal article",
        authors: "Stacey A. McCormack, Jessica Melbourne-Thomas, Rowan Trebilco, Gary Griffith, Simeon L. Hill, Carie Hoover, Nadine M. Johnston, Tomás I. Marina … & Andrew J. Constable",
        year: 2021,
        journal: "Frontiers in Ecology and Evolution",
        volume: "9",
        pages: "624763",
        doi: "10.3389/fevo.2021.624763",
        url: "https://doi.org/10.3389/fevo.2021.624763",
        pdf: `${import.meta.env.BASE_URL}assets/Pub 16.pdf`,
        abstract: "Globally important services are supported by Southern Ocean ecosystems, underpinned by the structure, function, and dynamics of complex interconnected and regionally distinctive food webs. These food webs vary in response to a combination of physical and chemical processes that alter productivity, species composition and the relative abundance and dynamics of organisms. Combined with regional and seasonal variability, climate-induced changes and human activities have and are expected to continue to drive important structural and functional changes to Southern Ocean food webs. However, our current understanding of food web structure, function, status, and trends is patchy in space and time, and methods for systematically assessing and comparing community-level responses to change within and across regional and temporal scales are not well developed. Insights gained from food web modelling studies—ranging from theoretical analyses of ecosystem resilience and adaptation, to qualitative and quantitative descriptions of the system—can assist in resolving patterns of energy flow and the ecological mechanisms that drive food web structure, function, and responses to drivers (such as fishing and climate change). This understanding is required to inform robust management strategies to conserve Southern Ocean food webs and the ecosystem services they underpin in the face of change. This paper synthesises the current state of knowledge regarding Southern Ocean pelagic food webs, highlighting the distinct regional food web characteristics, including key drivers of energy flow, dominant species, and network properties that may indicate system resilience. In particular, the insights, gaps, and potential integration of existing knowledge and Southern Ocean food web models are evaluated as a basis for developing integrated food web assessments that can be used to test the efficacy of alternative management and policy options. We discuss key limitations of existing models for assessing change resulting from various drivers, summarise priorities for model development and identify that significant progress could be made to support policy by advancing the development of food web models coupled to projected biogeochemical models, such as in Earth System models."
      },
      17: {
        id: 17,
        title: "Green vs brown food web: Effects of habitat type on multidimensional stability proxies for a highly-resolved Antarctic food web",
        type: "Journal article",
        authors: "Georgina Cordone, Vanesa Salinas, Tomás I. Marina, Santiago R. Doyle, Francesca Pasotti, Leonardo A. Saravia & Fernando R. Momo",
        year: 2020,
        journal: "Food Webs",
        volume: "25",
        pages: "e00166",
        doi: "10.1016/j.fooweb.2020.e00166",
        url: "https://doi.org/10.1016/j.fooweb.2020.e00166",
        pdf: `${import.meta.env.BASE_URL}assets/Pub 17.pdf`,
        abstract: "Food web analyses are powerful tools to understand the structure, dynamics and stability of communities. Potter Cove (25 de Mayo/King George Island) is one of the most biodiverse and studied fjords on the West Antarctic Peninsula (WAP), where climate change is affecting benthic and pelagic communities. This fjord ecosystem presents a considerable degree of environmental and species distribution heterogeneity across space: the outer portion of the cove is dominated by hard bottoms meanwhile the inner portion is dominated by soft bottoms. In this work, we have incorporated habitat type to a highly-resolved Antarctic food web, and evaluated its effects on different network metrics and proxies for various dimensions of stability. We considered a multidimensional perspective and employed simulation techniques to encompass variability. Our results showed that the incorporation of habitat type to Potter Cove food web analysis led to two different functional types of networks segregated on space: a green food web (in the outer cove) and a brown food web (in the inner cove). The green and the brown food webs showed significant differences in network structure and in some proxies for multidimensional stability (i.e. quasi sign-stability and omnivory), suggesting that these two food webs have different resilience to perturbations. However, there were no changes in network robustness when in silico experiments were performed. We conclude that habitat type plays a significant role in the structure and stability of Antarctic food webs, and should be taken into account to design effective conservation strategies."
      },
      18: {
        id: 18,
        title: "Seaweeds in the Antarctic marine coastal food web",
        type: "Book chapter",
        authors: "Fernando R. Momo, Georgina Cordone, Tomás I. Marina, Vanesa Salinas, Gabriela L. Campana, Mariano Valli, Santiago R. Doyle & Leonardo A. Saravia",
        year: 2020,
        journal: "Antarctic Seaweeds: diversity, adaptation and ecosystem services. Springer",
        volume: "",
        pages: "295-315",
        doi: "10.1007/978-3-030-39448-6_15",
        url: "https://doi.org/10.1007/978-3-030-39448-6_15",
        pdf: `${import.meta.env.BASE_URL}assets/Pub 18.pdf`,
        abstract: "Antarctic macroalgae are the basis of marine food webs in most coastal environments, especially the more confined ones such as bays and fjords. Whether through direct consumption or via detritus, their role in maintaining biodiversity is essential. However, their relevance is due not only by direct trophic interactions but also by indirect feedbacks, since macroalgae act as a habitat and refuge for multiple benthic organisms and as a substrate for epiphytic microalgae. Macroalgae also establish relations of exploitative competition, apparent competition, and mutualism. The control over the biomass and diversity of the macroalgae itself does not seem to be due to trophic interactions (top-down control) but rather to competition and diverse abiotic factors such as substrata and light availability or physical disturbances (ice scouring). The extreme connectivity of trophic networks linked to algae and their detritus determines that food webs are robust to local extinctions; however, non-trophic interactions indicate that changes that affect the growth, biomass, and distribution of macroalgae can have dramatic effects on the diversity of their associated fauna and, indirectly, on the networks of consumers of that fauna. In this chapter, we present a detailed description of macroalgae relationship networks and analyze the stability of the Antarctic community using food web theory."
      },
      19: {
        id: 19,
        title: "Soil fauna community and ecosystem's resilience: a food web approach",
        type: "Journal article",
        authors: "Gisela Maggiotto, Leticia Sabatté, Tomás I. Marina, Luciana Fueyo-Sánchez, Angélica M. Ramírez Londoño, Mónica Díaz Porres, Macarena Rionda, Marianela Domínguez, Rosa Perelli & Fernando R. Momo",
        year: 2019,
        journal: "Acta Oecologica",
        volume: "101",
        pages: "103445",
        doi: "10.1016/j.actao.2019.103445",
        url: "https://doi.org/10.1016/j.actao.2019.103445",
        pdf: `${import.meta.env.BASE_URL}assets/Pub 19.pdf`,
        abstract: "There is an increasing concern for the conservation of soil biodiversity and its ecosystem functions. In this context, it is crucial to comprehend the typical response times of the community (meso and macrofauna) to disturbances associated with different land uses. If we consider a disturbance as some degree of disorganization produced by an input of energy into the system, we realise that the issue is how the surplus of energy is dissipated, and with at what efficiency. Emerging properties of a community (diversity, resilience, stability) are affected by a cascade of processes that act at different spatial and temporal scales. To diagnose disturbance effects, it is necessary to use new tools of observation. One of these tools is the analysis of food webs that clearly shows the relationships among species and energy fluxes. We present here an example of the use of the food web approach to study the effects of foresting a naturalized pasture of the humid Argentinean Pampa with exotic species of trees (Eucalyptus camadulensis and Populus nigra). We show that the basic architecture of food webs remains similar under different treatments (related to the input of new detritus source) in a short time (60 days). However, the proposed approach in this study enables to design a simple decision scheme to formulate hypotheses about possible effects of stronger disturbances."
      },
      20: {
        id: 20,
        title: "Effects of macroalgae loss in an Antarctic marine food web: applying extinction thresholds to food web studies",
        type: "Journal article",
        authors: "Georgina Cordone, Tomás I. Marina, Vanesa Salinas, Santiago R. Doyle, Leonardo A. Saravia & Fernando R. Momo",
        year: 2018,
        journal: "PeerJ",
        volume: "6",
        pages: "e5531",
        doi: "10.7717/peerj.5531",
        url: "https://doi.org/10.7717/peerj.5531",
        pdf: `${import.meta.env.BASE_URL}assets/Pub 20.pdf`,
        abstract: "Antarctica is seriously affected by climate change, particularly at the Western Antarctic Peninsula (WAP) where a rapid regional warming is observed. Potter Cove is a WAP fjord at Shetland Islands that constitutes a biodiversity hotspot where over the last years, Potter Cove annual air temperatures averages increased by 0.66 °C, coastal glaciers declined, and suspended particulate matter increased due to ice melting. Macroalgae are the main energy source for all consumers and detritivores of Potter Cove. Some effects of climate change favor pioneer macroalgae species that exploit new ice-free areas and can also decline rates of photosynthesis and intensify competition between species due to the increase of suspended particulate matter. In this study, we evaluated possible consequences of climate change at Potter Cove food web by simulating the extinction of macroalgae and detritus using a topological approach with thresholds of extinction. Thresholds represent the minimum number of incoming links necessary for species' survival. When we simulated the extinctions of macroalgae species at random, a threshold of extinction beyond 50% was necessary to obtain a significant number of secondary extinctions, while with a 75% threshold a real collapse of the food web occurred. Our results indicate that Potter Cove food web is relative robust to macroalgae extinction. This is dramatically different from what has been found in other food webs, where the reduction of 10% in prey intake caused a disproportionate increase of secondary extinctions. Robustness of the Potter Cove food web was mediated by omnivory and redundancy, which had an important relevance in this food web. When we eliminated larger-biomass species more secondary extinctions occurred, a similar response was observed when more connected species were deleted, yet there was no correlation between species of larger-biomass and high-degree. This similarity could be explained because both criteria involved key species that produced an emerging effect on the food web. In this way, large-biomass and high-degree species could be acting as source for species with few trophic interactions or low redundancy. Based on this work, we expect the Potter Cove food web to be robust to changes in macroalgae species caused by climate change until a high threshold of stress is reached, and then negative effects are expected to spread through the entire food web leading to its collapse."
      },
      21: {
        id: 21,
        title: "Long-finned Pilot Whale (Globicephala melas Traill, 1809) subspecies in the Atlantic Ocean: are there differences in their skulls?",
        type: "Journal article",
        authors: "Tomás I. Marina, María Constanza Marchesi & R. Natalie P. Goodall",
        year: 2018,
        journal: "Marine Mammal Science",
        volume: "34",
        pages: "1054-1072",
        doi: "10.1111/mms.12548",
        url: "https://doi.org/10.1111/mms.12548",
        pdf: `${import.meta.env.BASE_URL}assets/Pub 21.pdf`,
        abstract: "This is the first study that characterizes and compares the skull morphometry of the two long-finned pilot whale subspecies in detail. Our results lead to the conclusion that these subspecies exhibit significant differences in skull morphology in the Atlantic Ocean. We have suggested functional implications for feeding habits, diving behavior and sound production that should be tested in future studies. Since our analysis was restricted to the Atlantic Ocean, an interesting forthcoming step would be to extend the present study to other populations of the Southern Hemisphere. More comparative research like the present work should be considered in order to help reassess the taxonomy of long-finned pilot whales and to improve our understanding of the evolutionary biology of this species, thus providing useful tools for future conservation issues."
      },
      22: {
        id: 22,
        title: "Architecture of marine food webs: To be or not be a 'small-world'",
        type: "Journal article",
        authors: "Tomás I. Marina, Leonardo A. Saravia, Georgina Cordone, Vanesa Salinas, Santiago R. Doyle & Fernando R. Momo",
        year: 2018,
        journal: "PLoS ONE",
        volume: "13",
        pages: "e0198217",
        doi: "10.1371/journal.pone.0198217",
        url: "https://doi.org/10.1371/journal.pone.0198217",
        pdf: `${import.meta.env.BASE_URL}assets/Pub 22.pdf`,
        abstract: "The search for general properties in network structure has been a central issue for food web studies in recent years. One such property is the small-world topology that combines a high clustering and a small distance between nodes of the network. This property may increase food web resilience but make them more sensitive to the extinction of connected species. Food web theory has been developed principally from freshwater and terrestrial ecosystems, largely omitting marine habitats. If theory needs to be modified to accommodate observations from marine ecosystems, based on major differences in several topological characteristics is still on debate. Here we investigated if the small-world topology is a common structural pattern in marine food webs. We developed a novel, simple and statistically rigorous method to examine the largest set of complex marine food webs to date. More than half of the analyzed marine networks exhibited a similar or lower characteristic path length than the random expectation, whereas 39% of the webs presented a significantly higher clustering than its random counterpart. Our method proved that 5 out of 28 networks fulfilled both features of the small-world topology: short path length and high clustering. This work represents the first rigorous analysis of the small-world topology and its associated features in high-quality marine networks. We conclude that such topology is a structural pattern that is not maximized in marine food webs; thus it is probably not an effective model to study robustness, stability and feasibility of marine ecosystems."
      },
      23: {
        id: 23,
        title: "The food web of Potter Cove (Antarctica): complexity, structure and function",
        type: "Journal article",
        authors: "Tomás I. Marina, Vanesa Salinas, Georgina Cordone, Gabriela Campana, Eugenia Moreira, Dolores Deregibus, Luciana Torre, Ricardo Sahade, Marcos Tatián, Esteban Barrera Oro, Marleen De Troch, Santiago R. Doyle, María Liliana Quartino, Leonardo A. Saravia & Fernando R. Momo",
        year: 2018,
        journal: "Estuarine, Coastal and Shelf Science",
        volume: "200",
        pages: "141-151",
        doi: "10.1016/j.ecss.2017.10.015",
        url: "https://doi.org/10.1016/j.ecss.2017.10.015",
        pdf: `${import.meta.env.BASE_URL}assets/Pub 23.pdf`,
        abstract: "Knowledge of the food web structure and complexity are central to better understand ecosystem functioning. A food-web approach includes both species and energy flows among them, providing a natural framework for characterizing species' ecological roles and the mechanisms through which biodiversity influences ecosystem dynamics. Here we present for the first time a high-resolution food web for a marine ecosystem at Potter Cove (northern Antarctic Peninsula). Eleven food web properties were analyzed in order to document network complexity, structure and topology. We found a low linkage density (3.4), connectance (0.04) and omnivory percentage (45), as well as a short path length (1.8) and a low clustering coefficient (0.08). Furthermore, relating the structure of the food web to its dynamics, an exponential degree distribution (in- and out-links) was found. This suggests that the Potter Cove food web may be vulnerable if the most connected species became locally extinct. For two of the three more connected functional groups, competition overlap graphs imply high trophic interaction between demersal fish and niche specialization according to feeding strategies in amphipods. On the other hand, the prey overlap graph shows also that multiple energy pathways of carbon flux exist across benthic and pelagic habitats in the Potter Cove ecosystem. Although alternative food sources might add robustness to the web, network properties (low linkage density, connectance and omnivory) suggest fragility and potential trophic cascade effects."
      },
      24: {
        id: 24,
        title: "Respuesta de la comunidad de fitoplancton y zooplancton al afloramiento de agua subterránea y surgencia costera en la península de Yucatán, México",
        type: "Journal article",
        authors: "Tomás I. Marina, Jorge A. Herrera-Silveira & Israel Medina-Gómez",
        year: 2017,
        journal: "Ecología Austral",
        volume: "27",
        pages: "211-224",
        doi: "10.25260/EA.17.27.2.0.229",
        url: "https://doi.org/10.25260/EA.17.27.2.0.229",
        pdf: `${import.meta.env.BASE_URL}assets/Pub 24.pdf`,
        abstract: "Las descargas de agua subterránea (DAS) y la surgencia costera son fenómenos oceanográficos que generan nuevas condiciones hidroquímicas en áreas costeras. El cambio en la composición y la estructura de la comunidad planctónica ante estas condiciones determina la dinámica de los niveles tróficos bajos en los ecosistemas marino-costeros. El presente estudio describe la respuesta de la comunidad de fitoplancton y zooplancton al marco hidroquímico en dos ecosistemas costeros influenciados por dichos fenómenos en la península de Yucatán, una región tropical. Se realizaron tres campañas durante el año 2012 (junio, agosto y noviembre) y se muestrearon transectas de 10 km de extensión. Se midieron in situ temperatura, salinidad y oxígeno disuelto. Además, se colectaron muestras de agua para la determinación de nutrientes inorgánicos disueltos (NO2, NO3, NH4, PO4 y SiO4) y clorofila a, y análisis de componentes de la comunidad de fitoplancton y zooplancton. En el sitio de estudio influenciado por las DAS (Dzilam de Bravo, 21°23'33'' N - 88°53'29'' O), incrementos en la densidad de copépodos (2484±890 org/L), sincronizados con disminuciones en la densidad de diatomeas centrales, pennadas y dinoflagelados (1600±1704, 8730±8951 y 22010±3557 cél/L, respectivamente) en noviembre dan indicios de un cierto control de la comunidad de fitoplancton por parte de dicho grupo zooplanctónico durante momentos de mayor intensidad del fenómeno. Por otro lado, la surgencia costera de Cabo Catoche (21°36'21'' N - 87°06'12'' O) ocasionó un incremento en la densidad de diatomeas centrales (248000±126417 cél/L), lo que resultó en una dominancia clara de este grupo durante el período de intensificación del fenómeno, mientras que los dinoflagelados dominaron en momentos de relajación de la surgencia. Las DAS en Dzilam de Bravo y la surgencia costera en Cabo Catoche generan respuestas diferenciales en la comunidad de plancton costero, e influyen en la estructura de esa comunidad y en la relación entre sus componentes."
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
      {/* FILTRO DE BÚSQUEDA - COMPONENTE SEPARADO */}
      <SearchFilter 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Search in this publication..."
        resultsCount={matchCount}
        resultsLabel={matchCount !== 1 ? 'matches' : 'match'}
      />

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