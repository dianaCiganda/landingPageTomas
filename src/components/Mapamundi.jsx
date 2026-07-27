import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Mapamundi.css';

let globalMapCreated = false;

const Mapamundi = () => {
  const mapRef = useRef(null);

  const colaboraciones = [
    {
      id: 1,
      nombre: 'Ensenada',
      pais: 'México',
      region: 'Baja California Sur',
      coordenadas: [24.142, -110.31],
      color: '#0a6b8a',
      flagCode: 'mx',
      colaboracion: {
        titulo: 'Investigación Marina',
        institucion: 'UABC · CICESE',
        colaborador: 'CONICET',
        cientifico: 'Dra. Sofía Ramírez',
        especialidad: 'Oceanografía Física',
        descripcion: 'Estudios de corrientes en el Pacífico Norte',
        fecha: 'Desde 2023',
        proyectos: ['Corrientes marinas', 'Biodiversidad', 'Cambio climático']
      }
    },
    {
      id: 2,
      nombre: 'Punta Arenas',
      pais: 'Chile',
      region: 'Magallanes',
      coordenadas: [-53.163, -70.917],
      color: '#1a7a4a',
      flagCode: 'cl',
      colaboracion: {
        titulo: 'Investigación Polar',
        institucion: 'CONICET · UMAG',
        colaborador: 'UABC',
        cientifico: 'Dr. Sebastián Torres',
        especialidad: 'Glaciología',
        descripcion: 'Monitoreo de glaciares en el Campo de Hielo Sur',
        fecha: 'Desde 2022',
        proyectos: ['Glaciares', 'Cambio climático', 'Ecosistemas polares']
      }
    }
  ];

  // Función para obtener la URL de la bandera
  const getFlagUrl = (code) => {
    return `https://flagcdn.com/w40/${code}.png`;
  };

  const crearPopupHTML = (colab) => {
    const isMobile = window.innerWidth < 768;
    const popupWidth = isMobile ? '260px' : '340px';
    const fontSize = isMobile ? '14px' : '18px';
    const padding = isMobile ? '12px' : '16px';
    const flagSize = isMobile ? '24px' : '32px';

    const flagUrl = getFlagUrl(colab.flagCode);

    return `
      <div style="padding: ${padding}; min-width: 240px; max-width: ${popupWidth}; color: #e8edf5; background: #0d1520; border-radius: 16px; border: 1px solid rgba(74, 158, 255, 0.15); box-shadow: 0 8px 32px rgba(0,0,0,0.5);">
        <div style="margin-bottom: 10px;">
          <h3 style="margin: 0; color: white; font-size: ${fontSize}; font-weight: 700; display: flex; align-items: center; gap: 10px;">
            <img src="${flagUrl}" alt="${colab.pais}" style="width: ${flagSize}; height: ${flagSize}; object-fit: cover; border-radius: 2px; box-shadow: 0 1px 4px rgba(0,0,0,0.3);">
            ${colab.nombre}
          </h3>
          <div style="color: #8899aa; font-size: ${isMobile ? '11px' : '13px'}; margin-top: 2px;">${colab.region}, ${colab.pais}</div>
        </div>

        <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 6px 0 10px 0;">

        <div style="display: inline-block; background: ${colab.color}25; color: ${colab.color}; padding: 3px 12px; border-radius: 20px; font-size: ${isMobile ? '10px' : '12px'}; font-weight: 600; border: 1px solid ${colab.color}40; margin-bottom: 10px;">
          🔬 ${colab.colaboracion.titulo}
        </div>

        <div style="background: rgba(255,255,255,0.03); border-radius: 10px; padding: 8px 10px; margin: 6px 0 10px 0;">
          <div style="color: white; font-weight: 600; font-size: ${isMobile ? '13px' : '15px'};">${colab.colaboracion.cientifico}</div>
          <div style="color: #8899aa; font-size: ${isMobile ? '11px' : '13px'};">${colab.colaboracion.especialidad}</div>
        </div>

        <p style="color: #99aabb; font-size: ${isMobile ? '12px' : '14px'}; margin: 0 0 10px 0; line-height: 1.5;">${colab.colaboracion.descripcion}</p>

        <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 10px;">
          ${colab.colaboracion.proyectos.map(p => 
            `<span style="background: #4a9eff18; padding: ${isMobile ? '2px 10px' : '4px 14px'}; border-radius: 14px; font-size: ${isMobile ? '10px' : '12px'}; color: #4a9eff; border: 1px solid #4a9eff25;">${p}</span>`
          ).join('')}
        </div>

        <div style="font-size: ${isMobile ? '11px' : '13px'}; color: #667788; margin-bottom: 8px;">
          📅 ${colab.colaboracion.fecha}
        </div>

        <div style="display: flex; justify-content: space-between; font-size: ${isMobile ? '10px' : '12px'}; color: #556677; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.06); flex-wrap: wrap; gap: 4px;">
          <span>🏛️ ${colab.colaboracion.institucion}</span>
          <span style="color: #4a9eff; font-weight: 500;">🤝 ${colab.colaboracion.colaborador}</span>
        </div>
      </div>
    `;
  };

  const crearMarcadores = (map) => {
    colaboraciones.forEach((colab) => {
      const icon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: ${colab.color};
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 16px;
            border: 3px solid white;
            box-shadow: 0 4px 20px rgba(0,0,0,0.4);
            cursor: pointer;
            transition: transform 0.2s;
          "
          onmouseover="this.style.transform='scale(1.1)'"
          onmouseout="this.style.transform='scale(1)'">
            ${colab.nombre.charAt(0)}
          </div>
        `,
        iconSize: [44, 44],
        iconAnchor: [22, 44],
        popupAnchor: [0, -44],
      });

      const marker = L.marker(colab.coordenadas, {
        icon,
        title: `${colab.nombre}, ${colab.pais}`,
        riseOnHover: true,
      }).addTo(map);

      const isMobile = window.innerWidth < 768;
      
      marker.bindPopup(crearPopupHTML(colab), {
        className: 'custom-popup',
        maxWidth: isMobile ? 280 : 380,
        minWidth: isMobile ? 240 : 280,
        closeButton: true,
        closeOnClick: true,
        autoClose: false,
        autoPan: true,
        autoPanPadding: [isMobile ? 20 : 50, isMobile ? 20 : 50],
        keepInView: true,
      });

      if (!isMobile) {
        marker.on('mouseover', function () {
          this.openPopup();
        });
      }

      marker.on('click', function (e) {
        L.DomEvent.stopPropagation(e);
        const popup = this.getPopup();
        if (popup.isOpen()) {
          this.closePopup();
        } else {
          this.openPopup();
        }
      });
    });
  };

  useEffect(() => {
    if (globalMapCreated) return;

    const container = document.getElementById('map');
    if (!container || container._leaflet_id) return;

    globalMapCreated = true;

    const map = L.map('map', {
      zoomControl: false,
      fadeAnimation: true,
      zoomAnimation: true,
      inertia: true,
      worldCopyJump: false,
      maxBounds: [[-90, -180], [90, 180]],
      maxBoundsViscosity: 1.0,
      center: [0, 0],
      zoom: 2,
    });

    map.getPane('popupPane').style.zIndex = 9999;
    map.getPane('popupPane').style.pointerEvents = 'auto';

    L.control.zoom({
      position: 'bottomright'
    }).addTo(map);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/">CARTO</a>',
      maxZoom: 19,
      minZoom: 2,
      noWrap: true,
      bounds: [[-90, -180], [90, 180]],
    }).addTo(map);

    crearMarcadores(map);

    const latlngs = colaboraciones.map(c => c.coordenadas);
    const polyline = L.polyline(latlngs, {
      color: '#4a9eff',
      weight: 2.5,
      opacity: 0.6,
      dashArray: '8, 8',
    }).addTo(map);

    let dashOffset = 0;
    let animationId = null;
    const animateLine = () => {
      dashOffset = (dashOffset + 1) % 16;
      polyline.setStyle({ dashOffset: -dashOffset });
      animationId = requestAnimationFrame(animateLine);
    };
    animateLine();

    mapRef.current = map;

    const bounds = L.latLngBounds(colaboraciones.map(c => c.coordenadas));
    map.fitBounds(bounds, { padding: [50, 50] });

    setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    }, 300);

    const handleResize = () => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
        const bounds = L.latLngBounds(colaboraciones.map(c => c.coordenadas));
        mapRef.current.fitBounds(bounds, { padding: [50, 50] });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) cancelAnimationFrame(animationId);
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        globalMapCreated = false;
      }
    };
  }, []);

  return (
    <div className="mapa-container">
      <div className="mapa-header">
        <h2>
          <span>🌐</span>
          <span>Colaboración Científica</span>
          <span className="badge">CONICET · UABC</span>
        </h2>
        <p className="subtitle">🔬 Ensenada (México) · Punta Arenas (Chile) — Investigación conjunta</p>
      </div>

      <div
        id="map"
        style={{
          height: '520px',
          width: '100%',
          backgroundColor: '#0d1a2b',
          position: 'relative',
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default Mapamundi;