/**
* Template Name: MyResume
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
  
  // const filters = document.querySelectorAll('.portfolio-filters li');
  // console.log(filters[0]);
  // const items = document.querySelectorAll('.isotope-item');

  //   filters.forEach(filter => {
  //       filter.addEventListener('click', () => {
  //           const filterValue = filter.getAttribute('data-filter');

  //           items.forEach(item => {
  //               if (item.classList.contains(filterValue)) {
  //                   item.style.display = 'block';
  //               } else {
  //                   item.style.display = 'none';
  //               }
  //           });
  //       });
  //   });

    /**
     * Init swiper sliders
     */
    function initSwiper() {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );
  
        if (swiperElement.classList.contains("swiper-tab")) {
          initSwiperWithCustomPagination(swiperElement, config);
        } else {
          new Swiper(swiperElement, config);
        }
      });
    }
  
    window.addEventListener("load", initSwiper);

    const dl_model_listener = document.getElementById('event-listener-dl');
    const lr_model_listener = document.getElementById('event-listener-lr');
    const knn_model_listener = document.getElementById('event-listener-knn');
    const mnb_model_listener = document.getElementById('event-listener-mnb');
    const rf_model_listener = document.getElementById('event-listener-rf');
    const dl_shutdown_listener = document.getElementById('shutdown-listener-dl');
    const lr_shutdown_listener = document.getElementById('shutdown-listener-lr');
    const knn_shutdown_listener = document.getElementById('shutdown-listener-knn');
    const mnb_shutdown_listener = document.getElementById('shutdown-listener-mnb');
    const rf_shutdown_listener = document.getElementById('shutdown-listener-rf');

    dl_model_listener.addEventListener('click', () => {
      dl_shutdown_listener.style.display = 'block';
      lr_shutdown_listener.style.display = 'none';
      knn_shutdown_listener.style.display = 'none';
      mnb_shutdown_listener.style.display = 'none';
      rf_shutdown_listener.style.display = 'none';
    });

    lr_model_listener.addEventListener('click', () => {
      dl_shutdown_listener.style.display = 'none';
      lr_shutdown_listener.style.display = 'block';
      knn_shutdown_listener.style.display = 'none';
      mnb_shutdown_listener.style.display = 'none';
      rf_shutdown_listener.style.display = 'none';
    });

    knn_model_listener.addEventListener('click', () => {
      dl_shutdown_listener.style.display = 'none';
      lr_shutdown_listener.style.display = 'none';
      knn_shutdown_listener.style.display = 'block';
      mnb_shutdown_listener.style.display = 'none';
      rf_shutdown_listener.style.display = 'none';
    });

    mnb_model_listener.addEventListener('click', () => {
      dl_shutdown_listener.style.display = 'none';
      lr_shutdown_listener.style.display = 'none';
      knn_shutdown_listener.style.display = 'none';
      mnb_shutdown_listener.style.display = 'block';
      rf_shutdown_listener.style.display = 'none';
    }); 

    rf_model_listener.addEventListener('click', () => {
      dl_shutdown_listener.style.display = 'none';
      lr_shutdown_listener.style.display = 'none';
      knn_shutdown_listener.style.display = 'none';
      mnb_shutdown_listener.style.display = 'none';
      rf_shutdown_listener.style.display = 'block';
    })

    const about_the_dataset_listener = document.getElementById('event-listener-about-the-dataset');
    const dataset_characteristics_listener = document.getElementById('event-listener-dataset-characteristics');
    const data_quality_listener = document.getElementById('event-listener-data-quality');
    const about_the_dataset_shutdown_listener = document.getElementById('shutdown-listener-about-the-dataset');
    const dataset_characteristics_shutdown_listener = document.getElementById('shutdown-listener-dataset-characteristics');
    const data_quality_shutdown_listener = document.getElementById('shutdown-listener-data-quality');

    about_the_dataset_listener.addEventListener('click', () => {
      about_the_dataset_shutdown_listener.style.display = 'block';
      dataset_characteristics_shutdown_listener.style.display = 'none';
      data_quality_shutdown_listener.style.display = 'none';
    });

    dataset_characteristics_listener.addEventListener('click', () => {
      about_the_dataset_shutdown_listener.style.display = 'none';
      dataset_characteristics_shutdown_listener.style.display = 'block';
      data_quality_shutdown_listener.style.display = 'none';
    }); 

    data_quality_listener.addEventListener('click', () => {
      about_the_dataset_shutdown_listener.style.display = 'none';
      dataset_characteristics_shutdown_listener.style.display = 'none';
      data_quality_shutdown_listener.style.display = 'block';
    })

    const data_collection_listener = document.getElementById('event-listener-data-collection');
    const data_preprocessing_listener = document.getElementById('event-listener-data-preprocessing');
    const feature_extraction_listener = document.getElementById('event-listener-feature-extraction');
    const model_development_listener = document.getElementById('event-listener-model-development');
    const data_collection_shutdown_listener = document.getElementById('shutdown-listener-data-collection');
    const data_preprocessing_shutdown_listener = document.getElementById('shutdown-listener-data-preprocessing');
    const feature_extraction_shutdown_listener = document.getElementById('shutdown-listener-feature-extraction');
    const model_development_shutdown_listener = document.getElementById('shutdown-listener-model-development');

    data_collection_listener.addEventListener('click', () => {
      data_collection_shutdown_listener.style.display = 'block';
      data_preprocessing_shutdown_listener.style.display = 'none';
      feature_extraction_shutdown_listener.style.display = 'none';
      model_development_shutdown_listener.style.display = 'none';
    });

    data_preprocessing_listener.addEventListener('click', () => {
      data_collection_shutdown_listener.style.display = 'none';
      data_preprocessing_shutdown_listener.style.display = 'block';
      feature_extraction_shutdown_listener.style.display = 'none';
      model_development_shutdown_listener.style.display = 'none';
    }); 

    feature_extraction_listener.addEventListener('click', () => {
      data_collection_shutdown_listener.style.display = 'none';
      data_preprocessing_shutdown_listener.style.display = 'none';
      feature_extraction_shutdown_listener.style.display = 'block';
      model_development_shutdown_listener.style.display = 'none';
    });

    model_development_listener.addEventListener('click', () => {
      data_collection_shutdown_listener.style.display = 'none';
      data_preprocessing_shutdown_listener.style.display = 'none';
      feature_extraction_shutdown_listener.style.display = 'none';
      model_development_shutdown_listener.style.display = 'block';
    })
    

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();