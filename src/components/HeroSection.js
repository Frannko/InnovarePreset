// src/components/HeroSection.js
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-access-blue">
      {/* Contenido de la sección */}
      <div className="container mx-auto px-4 py-20 xl:py-40 lg:py-40 flex flex-col-reverse md:flex-row items-center">
        {/* Texto */}
        <div className="md:ml-32 md:mr-32 w-full xl:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Organiza eventos y viajes de manera sencilla y efectiva.
          </h1>
          <p className="text-white mb-8">
            Organiza tus eventos y viajes de manera sencilla con nuestra app
            intuitiva, que te ayuda a gestionar itinerarios, enviar invitaciones
            y coordinar detalles logísticos en tiempo real. Con recomendaciones
            personalizadas y una comunidad de usuarios, cada celebración se
            convierte en una experiencia inolvidable.
          </p>

          <div className="flex max-w-max px-2 py-2">
            <div class="mx-auto flex flex-shrink-0 items-center space-x-2 sm:space-x-4">
              <button class="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 sm:px-4 sm:py-3 hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="h-7 w-5 sm:h-7 sm:w-9"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span class="ml-2 flex flex-col items-start leading-none">
                  <span class="mb-0 sm:text-xs text-[10px] text-gray-600">
                    GET IT ON
                  </span>
                  <span class="title-font sm:text-sm text-xs font-medium">
                    Google Play
                  </span>
                </span>
              </button>

              <button class="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 sm:px-4 sm:py-3 hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="h-7 w-5 sm:h-7 sm:w-9"
                  viewBox="0 0 305 305"
                >
                  <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                  <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                </svg>
                <span class="ml-2 flex flex-col items-start leading-none">
                  <span class="mb-0 sm:text-xs text-[10px] text-gray-600">
                    Download on the
                  </span>
                  <span class="title-font sm:text-sm text-xs font-medium">
                    App Store
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="hidden xl:block w-full xl:w-1/2 mb-10 xl:mb-0">
          <img
            src="/images/image.test6.png"
            alt="Ilustración de Productividad"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* SVG para la curva */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -20 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,224L48,208C96,192,192,160,288,144C384,128,480,128,576,138.7C672,149,768,171,864,160C960,149,1056,107,1152,90.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default HeroSection;
