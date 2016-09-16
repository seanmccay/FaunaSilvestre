//register components
Vue.component('modal', {
  template: '#modal-template',
  props: {
    show: {
      type: Boolean,
      required: true,
      twoWay: true
    },
    painting: {
      type: Object,
      required: true,
      twoWay: false
    }
  },
  events:{
    showModal: function(painting){
      this.$dispatch('showModal', painting)
    }
  }
})

// start app
new Vue({
  el: '#app',
  data: {
    showModal: false,
    paintings: [
      {
        path: 'img/red_drum.jpg',
        header: "Red Drum",
        description: "Acrylic painting of a Red Drum.",
        etsy: "https://www.etsy.com/listing/460786726/red-drum?ref=shop_home_active_2"
      },
      {
        path: 'img/texas_toad.jpg',
        header: "Texas Toad",
        description: "Acrylic painting of a Texas Toad.",
        etsy: "https://www.etsy.com/listing/462225580/texas-state-symbol-series-texas-toad?ref=shop_home_active_1"
      },
      {
        path: 'img/prickly_pear_cactus.jpg',
        header: "Prickly Pear Cactus",
        description: "Acrylic painting of a Prickly Pear Cactus.",
        etsy: "SOLD"
      },
      {
        path: 'img/mocking_bird.jpg',
        header: "Mocking Bird",
        description: "Acrylic painting of a Mocking Bird.",
        etsy: "https://www.etsy.com/listing/460106326/texas-state-symbol-series-northern?ref=shop_home_active_4"
      },
      {
        path: 'img/nine_banded_armadillo.jpg',
        header: "Nine Banded Armadillo",
        description: "Acrylic painting of a Nine Banded Armadillo.",
        etsy: "https://www.etsy.com/listing/460109550/texas-state-symbol-series-nine-banded?ref=shop_home_active_5"
      },
      {
        path: 'img/texas_bluebonnet.jpg',
        header: "Texas Bluebonnet",
        description: "Acrylic painting of a Texas Bluebonnet.",
        etsy: "https://www.etsy.com/listing/460108520/texas-state-symbol-series-bluebonnet?ref=shop_home_active_3"
      },
      {
        path: 'img/texas_horned_toad.jpg',
        header: "Texas Horned Toad",
        description: "Acrylic painting of a Texas Horned Toad.",
        etsy: "https://www.etsy.com/listing/473595683/texas-state-symbol-series-texas-horned?ref=shop_home_active_2"
      },
      {
        path: 'img/texas_longhorn.jpg',
        header: "Texas Longhorn",
        description: "Acrylic painting of a Texas Longhorn.",
        etsy: "SOLD"
      }
    ]
  },

  events: {
    showModal: function (painting) {
      this.$broadcast('showModal', painting)
    }
  }
})

