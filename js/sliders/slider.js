// const slideEL = document.querySelectorAll('.swiper-slide');
// const buttonPrevEl = document.querySelector('.swiper-button-prev');

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 3,
	watchSlidesProgress: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	fadeEffect: {
		crossFade: true,
	},
	// on: {
	// 	slideChange: applyOpacity,
	// },
});

// function applyOpacity() {
// 	slideEL.forEach((el) => {
// 		console.log('aoetaohne');
// 		if (el.classList.contains('swiper-slide-visible')) {
// 			el.classList.remove('swiper-slide-bg');
// 		} else {
// 			el.classList.add('swiper-slide-bg');
// 		}
// 	});
// }
// applyOpacity();
