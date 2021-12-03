// BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if (slider.classList.contains('_swiper_scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if (slider.classList.contains('_gallery')) {
            // slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
        const sliderScrollItem = sliderScrollItems[index];
        const sliderScrollBar = sliderScrollItems.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observerParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: sliderScrollBar,
                draggable: true,
                spanOnRelease: false
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}


function sliders_bild_callback(params) { }


if (document.querySelector('.slider-sets__body')) {
    new Swiper('.slider-sets__body', {
        observer: true,
        observerParents: true,
        slidesPerView: 1,
        spaceBetween: 80,
        watchOverflow: true,
        speed: 800,
        loop: true,
        loopAdditionalSlides: 5,
        preloadImages: false,
        parallax: true,
        // Dotts
        pagination: {
            el: '.slider-sets .slider-pagination',
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        // Arrows
        navigation: {
            nextEl: '.slider-sets .slider-arrow_next',
            prevEl: '.slider-sets .slider-arrow_prev',
        },
    });
}
if (document.querySelector('.slider-news__body')) {
    new Swiper('.slider-news__body', {
        observer: true,
        observerParents: true,
        slidesPerView: 1,
        spaceBetween: 80,
        watchOverflow: true,
        speed: 800,
        loop: true,
        loopAdditionalSlides: 5,
        preloadImages: false,
        parallax: true,
        // Dotts
        pagination: {
            el: '.slider-news .slider-pagination',
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        // Arrows
        navigation: {
            nextEl: '.slider-news .slider-arrow_next',
            prevEl: '.slider-news .slider-arrow_prev',
        },
    });
}




if (document.querySelector('.slider-control__body')) {
    var discountsControlSlider = new Swiper('.slider-control__body', {
        observer: true,
        observerParents: true,
        slidesPerView: "auto",
        watchOverflow: false,
        speed: 800,
        //loopAdditionalSlides: 5,
        //preloadImages: false,
        //parallax: true,
        thumbs: {
            swiper: discountsSlider,
        },
        // Arrows
        /*navigation: {
            nextEl: '.slider-control-slider .slider-arrow_next',
            prevEl: '.slider-control-slider .slider-arrow_prev',
        },*/
    });
}



if (document.querySelector('.slider-stock__body')) {
    var discountsSlider = new Swiper('.slider-stock__body', {
        observer: true,
        observerParents: true,
        slidesPerView: 1,
        spaceBetween: 80,
        watchOverflow: true,
        speed: 800,
        loopAdditionalSlides: 5,
        preloadImages: false,
        parallax: true,
        // Dotts
        pagination: {
            el: '.slider-stock .slider-pagination',
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        // Arrows
        navigation: {
            nextEl: '.slider-stock .slider-arrow_next',
            prevEl: '.slider-stock .slider-arrow_prev',
        },
        thumbs: {
            swiper: discountsControlSlider,
        },
    });
}
