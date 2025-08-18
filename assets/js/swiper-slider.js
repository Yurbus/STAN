
// const swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//             },
//         630: {
//             slidesPerView: 2,
//             },
//         910: {
//             slidesPerView: 3,
//         },
//     },
// });

const swiper = new Swiper('.mySwiper', {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
