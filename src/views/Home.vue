<template>
  <div id="app">
    <LoadPage/>
    <!-- <LoadPage v-if="isLoading"></LoadPage> -->
    <h1>Hello world!</h1>

  </div>

</template>

<script>
// @ is an alias to /src
import LoadPage from '@/components/LoadPage.vue'

export default {
  name: 'Home',
  components: {
    LoadPage
  }
}
</script>
<style media="screen">
#app {

  /* align-items: flex-start; */
  padding: 0px;
  width: 375px;
  height: 812px;
  /* border: 1px solid red; */
  background-color: green;
  
}
</style>
