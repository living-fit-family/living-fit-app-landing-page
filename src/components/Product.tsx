import React from 'react';

const Product = () => {
  return (
    <section id="about" className="relative pt-[150px]">
        <div className="container lg:max-w-[1120px]">
          <div>
            <div
              className="-mx-4 flex flex-wrap items-center justify-between"
            >
              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mx-0 lg:mb-0"
                  data-wow-delay=".2s"
                >
                  <img
                    src="images/about/about-1-light.png"
                    alt="about image"
                    className="mx-auto max-w-xs"
                  />
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp lg:ml-auto lg:max-w-[510px]"
                  data-wow-delay=".3s"
                >
                  <span
                    className="mb-4 block text-lg font-medium text-primary md:text-[22px]"
                  >
                    Create your workout
                  </span>
                  <h2
                    className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight"
                  >
                    Effectively plan ahead for productive workouts
                  </h2>
                  <p
                    className="mb-[30px] text-base leading-relaxed text-body"
                  >
                    Stay disciplined and consistent with the provided workout templates. Plan ahead by selecting your excerises for each day ahead of time.
                  </p>

                  {/* <div className="mb-[30px] flex items-center">
                    <div
                      className="mr-[22px] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black dark:border-stroke-dark dark:bg-dark dark:text-white"
                    >
                      01
                    </div>
                    <div>
                      <h5
                        className="text-xl font-medium text-black dark:text-white"
                      >
                        Lorem ipsum dolor.
                      </h5>
                      <p className="text-base text-body">
                        Ut ultricies lacus non fermentum ultrices.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div
                      className="mr-[22px] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black dark:border-stroke-dark dark:bg-dark dark:text-white"
                    >
                      02
                    </div>
                    <div>
                      <h5
                        className="text-xl font-medium text-black dark:text-white"
                      >
                        Lorem ipsum dolor.
                      </h5>
                      <p className="text-base text-body">
                        Ut ultricies lacus non fermentum ultrices.
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-[100px]">
            <div
              className="-mx-4 flex flex-wrap items-center justify-between"
            >
              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp lg:max-w-[510px]"
                  data-wow-delay=".2s"
                >
                  <span
                    className="mb-4 block text-lg font-medium text-primary md:text-[22px]"
                  >
                    Make it personal
                  </span>
                  <h2
                    className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight"
                  >
                    Various exercises options available.
                  </h2>
                  <p
                    className="mb-[30px] text-base leading-relaxed text-body"
                  >
                    Create your workout based on what you have available. Whether you are at a commercial gym or home gym, there are a variety of exercise options that can work for you.
                  </p>

                  {/* <a
                    href="javascript:void(0)"
                    className="inline-block rounded-md bg-primary py-[10px] px-8 text-base font-medium text-white hover:bg-opacity-90"
                  >
                    Know More
                  </a> */}
                </div>
              </div>

              <div
                className="order-first w-full px-4 lg:order-last lg:w-1/2"
              >
                <div
                  className="wow fadeInUp relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mr-0 lg:mb-0"
                  data-wow-delay=".3s"
                >
                  <img
                    src="images/about/about-2-light.png"
                    alt="about image"
                    className="mx-auto max-w-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Product;