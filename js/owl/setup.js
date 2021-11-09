var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    800: {
      items: 4,
    },
    1000: {
      items: 5,
    },
    1400: {
      items: 7,
    },
  },
});
