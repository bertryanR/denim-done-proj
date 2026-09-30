
    const splide = new Splide('.splide', {
      type: 'loop',        // required for endless scrolling
      drag: 'free',        // lets users drag freely
      focus: 'center',
      perPage: 3,
      arrows: false,       // hide arrows and dots for a marquee look
      pagination: false,
      autoScroll: {
        speed: 1,          // higher = faster
        pauseOnHover: true
      },
      breakpoints: {
        720: { perPage: 2 } // fewer logos on mobile
      }
    });

    splide.mount(window.splide.Extensions);