// 'use client'

// import React from 'react'
// import { Navigation } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// // import 'swiper/css/pagination';

// // // init Swiper:
// // // Testimonial
// // const swiper = new Swiper('.mySwiper', {
// //   // configure Swiper to use modules
// //   modules: [Navigation],
// //   slidesPerView: 1,
// //   spaceBetween: 30,
// //   navigation: {
// //     nextEl: '.swiper-button-next',
// //     prevEl: '.swiper-button-prev',
// //   },
// //   loop: true,
// //   breakpoints: {
// //     // when window width is >= 640px
// //     768: {
// //       slidesPerView: 3,
// //       spaceBetween: 40,
// //     },
// //   },
// // });

// const Screens = () => {
//   return (
//     <section id="screens" className="relative z-20 pt-[110px]">
//       <div className="container">
//         <div
//           className="wow fadeInUp mx-auto mb-10 max-w-[690px] text-center"
//           data-wow-delay=".2s"
//         >
//           <h2
//             className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight"
//           >
//             More Amazing Features
//           </h2>
//           <p className="text-base text-body">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
//             convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
//             ante in maximus.
//           </p>
//         </div>
//       </div>
//       <div className="container">
//         <div
//           className="wow fadeInUp mx-auto max-w-[1000px]"
//           data-wow-delay=".2s"
//         >
//           <div className="swiper mySwiper relative z-20">
//             <Swiper spaceBetween={30}
//               slidesPerView={3}
//               modules={[Navigation]}
//               navigation={{
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//               }}
//               loop={true}
//               breakpoints={{
//                 // when window width is >= 640px
//                 768: {
//                   slidesPerView: 3,
//                   spaceBetween: 40,
//                 },
//               }}
//               onSlideChange={() => console.log('slide change')}
//               onSwiper={(swiper) => console.log(swiper)}>
//               <div
//                 className="absolute top-0 left-0 right-0 z-50 mx-auto w-full md:w-1/3"
//               >
//                 <img
//                   src="images/screens/mobile-frame.png"
//                   alt="mobile-frame"
//                   className="mx-auto max-w-full"
//                 />
//               </div>
//               <div className="swiper-wrapper py-2">
//                 <SwiperSlide>
//                   <div className="swiper-slide">
//                     <div
//                       className="mx-auto w-full max-w-[252px] xs:max-w-[265px]"
//                     >
//                       <img
//                         src="images/screens/screen-1-light.png"
//                         alt="screenshot"
//                         className="mx-auto w-full rounded-2xl"
//                       />
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="swiper-slide">
//                     <div
//                       className="mx-auto w-full max-w-[252px] xs:max-w-[265px]"
//                     >
//                       <img
//                         src="images/screens/screen-2-light.png"
//                         alt="screenshot"
//                         className="mx-auto w-full rounded-2xl"
//                       />
//                     </div>
//                   {/* </div> */}
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="swiper-slide">
//                     <div
//                       className="mx-auto w-full max-w-[252px] xs:max-w-[265px]"
//                     >
//                       <img
//                         src="images/screens/screen-3-light.png"
//                         alt="screenshot"
//                         className="mx-auto w-full rounded-2xl"
//                       />
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="swiper-slide">
//                     <div
//                       className="mx-auto w-full max-w-[252px] xs:max-w-[265px]"
//                     >
//                       <img
//                         src="images/screens/screen-2-light.png"
//                         alt="screenshot"
//                         className="mx-auto w-full rounded-2xl"
//                       />
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="swiper-slide">
//                     <div
//                       className="mx-auto w-full max-w-[252px] xs:max-w-[265px]"
//                     >
//                       <img
//                         src="images/screens/screen-1-light.png"
//                         alt="screenshot"
//                         className="mx-auto w-full rounded-2xl"
//                       />
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="swiper-slide">
//                     <div
//                       className="mx-auto w-full max-w-[252px] xs:max-w-[265px]"
//                     >
//                       <img
//                         src="images/screens/screen-3-light.png"
//                         alt="screenshot"
//                         className="mx-auto w-full rounded-2xl"
//                       />
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               </div>
//               <div
//                 className="flex items-center justify-center space-x-4 pt-20"
//               >
//                 <button className="swiper-button-prev">
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 20 20"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g clipPath="url(#clip0_46_342)">
//                       <path
//                         d="M6.52334 10.8334L10.9933 15.3034L9.81501 16.4817L3.33334 10L9.815 3.51836L10.9933 4.69669L6.52334 9.16669L16.6667 9.16669L16.6667 10.8334L6.52334 10.8334Z"
//                         fill="currentColor"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_46_342">
//                         <rect
//                           width="20"
//                           height="20"
//                           fill="white"
//                           transform="translate(20 20) rotate(180)"
//                         />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </button>
//                 <button className="swiper-button-next">
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 20 20"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g clipPath="url(#clip0_46_337)">
//                       <path
//                         d="M13.4767 9.16664L9.00667 4.69664L10.185 3.51831L16.6667 9.99998L10.185 16.4816L9.00667 15.3033L13.4767 10.8333H3.33334V9.16664H13.4767Z"
//                         fill="currentColor"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_46_337">
//                         <rect width="20" height="20" fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </button>
//               </div>
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Screens