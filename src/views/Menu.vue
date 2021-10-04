<template lang="pug">
  .mainCointainer
    .header
    .container
        Dish(v-for="food in foodList" :item="food")
    .footer
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
  .mainCointainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 375px;
    background-image: url(../../public/img/icons/fon.jpg);
    
  }

  .header {
    width: 335px;
    height: 190px;
    border: solid black;
  }

  .container {
    width: 375px;
    height: 280px;
    padding-bottom: 25px;
    overflow-y: scroll;
    
    

  }

  .container::-webkit-scrollbar {
    width: 0;
}

  .footer {
    width: 355px;
    height: 74px;
    border: solid black;
  }


  


 
</style>