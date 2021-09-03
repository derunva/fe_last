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
    width: 375px;
    height: 812px;

  }


  


 
</style>