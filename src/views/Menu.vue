<template lang="pug">
    .container
        Dish(v-for="food in foodList" :item="food")
</template>

<script>
// @ is an alias to /src

import Dish from '@/components/Dish.vue'
import { mapState } from 'vuex'

export default {
  name: 'Menu',
  components: {
    Dish
  },
  computed: {
    ...mapState(['foodList'])
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin-left: auto;
    margin-right: auto;
    width: 375px;
    height: 280px;
    padding-top: 100px;
    padding-bottom: 25px;
    overflow-y: scroll;
    background-image: url(../../public/img/icons/fon.jpg);
    

  }

  .container::-webkit-scrollbar {
  width: 0;
}


  


 
</style>