import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foodList: [
        {
          id: 1,
          img: '/img/icons/1.png',
          name: "Herbal Pancake",
          subname: "Warung Herbal",
          price: "$7",
        },
        {
          id: 2,
          img: '/img/icons/2.png',
          name: "Fruit Salad",
          subname: "Wijie Resto",
          price: "$5",
        },
        {
          id: 3,
          img: '/img/icons/3.png',
          name: "Green Noddle",
          subname: "Noodle Home",
          price: "$15",
        },
      ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
