<template lang="pug">
    .container
        ListOfDishes(v-for="food in foodList" :item="food")
</template>

<script>
// @ is an alias to /src

import ListOfDishes from '@/components/ListOfDishes.vue'
import { mapState } from 'vuex'

export default {
  name: 'Menu',
  components: {
    ListOfDishes
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