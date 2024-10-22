import React from 'react';

const Header = () => {
  return (
    <div className="flex bg-access-blue justify-center">
      <header id='inicio' className="pt-2 inset-x-0 top-0 z-30 w-full max-w-screen-md border border-gray-100 bg-white py-3 shadow backdrop-blur-lg md:top-6 sm md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
                <img className="h-7 w-auto" src="https://accessband.online/static/media/ab.dc4233cd.png" alt="Logo" />
                <p className="sr-only">accessband</p>
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a
                aria-current="page"
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href=""
              >
                Inicio
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href=""
              >
                Caracteristicas
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href=""
              >
                Demo
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href=""
              >
                Contacto
              </a>
            </div>
            <div className="flex items-center justify-end gap-3">
              {/* Aquí puedes agregar más elementos si lo deseas */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
