// src/components/Navbar.tsx
import { Link } from "react-router-dom"
import { Disclosure, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

function Navbar() {
  return (
    <Disclosure as="nav" className="bg-primary-dark sticky top-0 z-50 shadow-md">
      {({ open }) => (
        <>
          {/* Barra superior: logo y navegación */}
          <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between text-white font-medium">
            {/* Logo + texto */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/Logo1.png" alt="Logo" className="h-10 w-auto" />
              <span className="font-bold text-lg hidden sm:inline">Transporte Miranda</span>
            </Link>

            {/* Menú horizontal para pantallas grandes */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <Link to="/" className="hover:text-accent">Inicio</Link>
              <Link to="/mis-viajes" className="hover:text-accent">Mis viajes</Link>
              <Link to="/encomiendas" className="hover:text-accent">Encomiendas</Link>
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-lg">🌐</span><span>ES</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-lg">💰</span><span>S/</span>
              </div>
              <div className="text-xl cursor-pointer">👤</div>
            </div>

            {/* Botón hamburguesa visible solo en móviles */}
            <div className="md:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-white hover:text-accent focus:outline-none focus:ring-2 focus:ring-white">
                {open ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          {/* Panel deslizante en móviles + fondo oscuro desenfocado */}
          <Transition show={open}>
            <Transition.Child
              as="div"
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="fixed top-[64px] left-0 w-full h-[calc(100%-64px)] bg-black/30 backdrop-blur-sm z-40 md:hidden"
              aria-hidden="true"
            />

            <Transition.Child
              as="div"
              enter="transition transform duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition transform duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
              className="fixed top-[64px] right-0 w-64 h-[calc(100%-64px)] bg-white text-text-dark z-50 shadow-lg md:hidden"
            >
              <div className="p-4">
                {/* Logo dentro del panel móvil */}
                <div className="flex items-center gap-2 mb-6">
                  <img src="/Logo1.png" alt="Logo" className="h-10 w-auto" />
                  <span className="font-bold text-lg">Transporte Miranda</span>
                </div>

                {/* Menú vertical */}
                <div className="flex flex-col space-y-4 text-sm font-medium">
                  <Link to="/" className="hover:text-accent">Inicio</Link>
                  <Link to="/mis-viajes" className="hover:text-accent">Mis viajes</Link>
                  <Link to="/encomiendas" className="hover:text-accent">Encomiendas</Link>
                  <span className="pt-2 border-t border-gray-light"></span>
                  <div className="flex items-center gap-1">
                    <span className="text-lg">🌐</span><span>ES</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-lg">💰</span><span>S/</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xl">👤</span><span>Perfil</span>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
