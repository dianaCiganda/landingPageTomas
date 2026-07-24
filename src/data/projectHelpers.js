// src/data/projectHelpers.js
import { publications } from "./publicationsData";

/**
 * Obtiene las publicaciones asociadas a un proyecto por su ID
 */
export const getPublicationsForProject = (projectId) => {
    return publications.filter(pub =>
        pub.projectIds && pub.projectIds.includes(projectId)
    );
};

/**
 * Obtiene las publicaciones completas a partir de un array de IDs
 */
export const getPublicationsByIds = (ids) => {
    if (!ids || ids.length === 0) return [];
    return publications.filter(pub => ids.includes(pub.id));
};