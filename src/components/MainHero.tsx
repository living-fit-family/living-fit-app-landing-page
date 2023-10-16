'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const MainHero = () => {
  const router = useRouter();

  return (
    <section id="home" className="pt-[165px]">
        <div className="container lg:max-w-[1305px] lg:px-10">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-7/12">
              <div
                className="wow fadeInUp mb-12 lg:mb-0 lg:max-w-[570px]"
                data-wow-delay=".2s"
              >
                <span
                  className="mb-5 block text-lg font-medium leading-tight text-black dark:text-white sm:text-[22px] xl:text-[22px]"
                >
                  Mobile fitness app for iOS devices.
                </span>
                <h1
                  className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-[40px] md:text-[50px] lg:text-[42px] xl:text-[50px]"
                >
                  Start Training with the {" "}
                  <span
                    className="inline bg-primary bg-clip-text text-transparent"
                  >
                  Living Fit Family
                  </span>
                </h1>
                <p
                  className="mb-10 max-w-[475px] text-base leading-relaxed text-body"
                >
                Join my in person training program from wherever you may live. 
                Start training on the same workout splits as my local clients, take advantage of the specific nutritional guidance, and enjoy achieving real results. 
                Over the years, hundreds of women have met and exceeded their fitness goals training as a part of the Living Fit Family. 
                Now you can too!
                </p>

                <div className="flex flex-wrap items-center">
                  <a
                    href="/register"
                    className="mr-6 mb-6 inline-flex h-[60px] items-center rounded-lg bg-primary py-[14px] px-[30px] text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-opacity-90"
                  >
                    <span
                      className="m-[18px] p-[18px] leading-relaxed"
                    >
                      GET 7 DAYS FREE
                    </span>

                  </a>

                  {/* <a
                    href="javascript:void(0)"
                    className="glightbox mb-6 inline-flex items-center py-4 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    <span
                      className="mr-[22px] flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-current"
                    >
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5 7.06367C14.1667 7.44857 14.1667 8.41082 13.5 8.79572L1.5 15.7239C0.833334 16.1088 -3.3649e-08 15.6277 0 14.8579L6.05683e-07 1.00149C6.39332e-07 0.231693 0.833334 -0.249434 1.5 0.135466L13.5 7.06367Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className="text-base font-medium">
                      <span className="block text-sm"> Watch Demo </span>
                      See how it works
                    </span>
                  </a> */}
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-5/12">
              <div
                className="wow fadeInUp relative z-10 mx-auto w-full max-w-[530px] lg:mr-0"
                data-wow-delay=".3s"
              >
                <img
                  src="images/hero/hero-light.png"
                  alt="hero image"
                  className="mx-auto max-w-xs"
                />
                </div>
              </div>
            </div>
          </div>
      </section>
  );
};

export default MainHero;