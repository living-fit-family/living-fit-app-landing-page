import React from 'react'

const Header = () => {
  return (
    <header
      className="navbar absolute top-0 left-0 z-50 w-full border-stroke bg-white duration-300 dark:border-stroke-dark dark:bg-black"
    >
      <div className="container relative max-w-[1400px]">
        <div className="flex items-center justify-between">
          <div className="block py-4 lg:py-0">
            <a
              href="index.html"
              className="block max-w-[145px] sm:max-w-[180px]"
            >
              <img
                src="images/logo/logo.png"
                alt="logo"
                className="block dark:hidden h-16 w-auto sm:h-16"
              />
              <img
                src="images/logo/logo.png"
                alt="logo"
                className="hidden dark:block"
              />
            </a>
          </div>
          <button
            className="navbarOpen absolute right-4 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 flex-col items-center justify-center space-y-[6px] font-bold lg:hidden"
            aria-label="navbarOpen"
            name="navbarOpen"
          >
            <span
              className="block h-[2px] w-7 bg-black dark:bg-white"
            ></span>
            <span
              className="block h-[2px] w-7 bg-black dark:bg-white"
            ></span>
            <span
              className="block h-[2px] w-7 bg-black dark:bg-white"
            ></span>
          </button>

          <div
            className="menu-wrapper relative hidden justify-between lg:flex"
          >
            <button
              className="navbarClose fixed top-10 right-10 z-[9999] flex h-10 w-10 flex-col items-center justify-center font-bold lg:hidden"
              name="navbarClose"
              aria-label="navbarClose"
            >
              <span
                className="block h-[2px] w-7 rotate-45 bg-black dark:bg-white"
              ></span>
              <span
                className="-mt-[2px] block h-[2px] w-7 -rotate-45 bg-black dark:bg-white"
              ></span>
            </button>

            <nav
              className="fixed top-0 left-0 z-[999] flex h-screen w-full items-center justify-center bg-white bg-opacity-95 text-center backdrop-blur-sm dark:bg-black dark:bg-opacity-95 lg:static lg:h-auto lg:w-max lg:bg-transparent lg:backdrop-blur-none lg:dark:bg-transparent"
            >
              <ul
                className="items-center space-y-3 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-10"
              >
                <li className="menu-item">
                  <a
                    href="#features"
                    className="menu-scroll inline-flex items-center text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary lg:py-7"
                  >
                    Features
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="#about"
                    className="menu-scroll inline-flex items-center text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary lg:py-7"
                  >
                    About
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="#work-process"
                    className="menu-scroll inline-flex items-center text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary lg:py-7"
                  >
                    How It Works
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="#pricing"
                    className="menu-scroll inline-flex items-center text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary lg:py-7"
                  >
                    Pricing
                  </a>
                </li>
                <li className="submenu-item menu-item group relative">
                  <a
                    href="#cta"
                    className="submenu-taggler inline-flex items-center text-base font-medium text-black hover:text-primary group-hover:text-primary dark:text-white dark:hover:text-primary lg:py-7"
                  >
                    Download
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div
            className="mr-[60px] flex items-center justify-end lg:mr-0"
          >
            <a
              href="signin.html"
              className="hidden py-[10px] px-6 text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary sm:inline-block"
            >
              Sign In
            </a>

            <a
              href="signup.html"
              className="hidden rounded-md bg-primary py-[10px] px-[30px] text-base font-medium text-white hover:bg-opacity-90 sm:inline-block"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header