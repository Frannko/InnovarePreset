import React, { useEffect } from "react";

const FixedNav = ({ darkMode }) => {
  useEffect(() => {
    const links = document.querySelectorAll("nav a");

    const setActiveLink = (event) => {
      links.forEach((item) => {
        item.classList.remove("nav-active");
      });
      event.currentTarget.classList.add("nav-active");
    };

    links.forEach((link) => {
      link.addEventListener("click", setActiveLink);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", setActiveLink);
      });
    };
  }, []);

  return (
    <nav
      className={`hidden sm:hidden md:flex z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 ${
        darkMode ? "bg-slate-800 text-white" : "bg-white text-gray-700"
      } p-2.5 shadow-lg backdrop-blur-lg fixed top-1/4 left-6 flex-col rounded-lg border`}
    >
      <a
        href="#galeria"
        className={`flex aspect-square w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 ${
          darkMode ? "text-gray-200 hover:bg-slate-700" : "hover:bg-gray-100"
        }`}
      >
        <svg
          className="w-[26px] h-[26px] text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm0 0-4 4m5 0H4m1 0 4-4m1 4 4-4m-4 7v6l4-3-4-3Z"
          />
        </svg>

        <small className="text-center text-xs font-medium">Galeria</small>
      </a>

      <a
        href="#destacados"
        className={`flex aspect-square w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 ${
          darkMode ? "text-gray-200 hover:bg-slate-700" : "hover:bg-gray-100"
        }`}
      >
        <svg
          className="w-[26px] h-[26px] text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.3"
            d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"
          />
        </svg>

        <small className="text-center text-xs font-medium">Destacados</small>
      </a>

      <a
        href="#testimonial"
        className={`flex aspect-square w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 ${
          darkMode ? "text-gray-200 hover:bg-slate-700" : "hover:bg-gray-100"
        }`}
      >
        <svg
          className="w-[26px] h-[26px] text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.3"
            d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
          />
        </svg>

        <small className="text-center text-xs font-medium">
          Empresas Asociadas
        </small>
      </a>

      <hr
        className={`${
          darkMode ? "dark:border-gray-700/60" : "border-gray-200"
        }`}
      />

      <a
        href="#inicio"
        className={`flex h-16 w-16 flex-col items-center justify-center gap-1 nav-active ${
          darkMode ? "text-fuchsia-300" : "text-fuchsia-900"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <small className="text-xs font-medium">Inicio</small>
      </a>
    </nav>
  );
};

export default FixedNav;
