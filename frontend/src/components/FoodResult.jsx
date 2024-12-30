import React from "react";
import { MapPin, Star } from "lucide-react";

// Función para generar el enlace de Google Maps
const generateGoogleMapsLink = (restaurantName) => {
  const baseUrl = "https://www.google.com/maps/search/?api=1&query=";
  return `${baseUrl}${encodeURIComponent(restaurantName)}`;
};

export function FoodResult({ name, rating, open_now }) {
  const statusClasses = open_now
    ? "bg-[#4CAF50] text-white"
    : "bg-[#FF4C4C] text-white";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-gray-300 hover:border-green-500 transition-transform duration-300 hover:scale-105">
      <div className="p-4 flex items-center justify-between">
        {/* Información del restaurante */}
        <div>
          <h3 className="text-lg font-bold text-orange-500">{name}</h3>
          {rating && (
            <div className="flex items-center mt-1 text-gray-800">
              <Star className="w-4 h-4 text-orange-500 mr-1" />
              <span className="font-semibold mr-2">{rating}</span>
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold ${statusClasses}`}
                aria-label={open_now ? "Restaurante abierto" : "Restaurante cerrado"}
              >
                {open_now ? "Abierto" : "Cerrado"}
              </span>
            </div>
          )}
        </div>
        {/* Botón de mapa */}
        <a
          href={generateGoogleMapsLink(name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-white text-green-500 hover:bg-green-500 hover:text-white border border-green-500 rounded-lg font-medium transition duration-300 px-3 py-2 sm:px-4 text-sm sm:text-base"
          aria-label={`Abrir mapa de ${name}`}
        >
          <MapPin className="w-4 h-4 mr-2" />
          Maps
        </a>
      </div>
    </div>
  );
}
