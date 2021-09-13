<template lang="pug">
  .body
    transition(name='fade')
      .preloader(v-if='show')
        .bodyOfLoad
          .brandImg
          .circleDelivery circleDelivery
          .circleDelivery2 Deliever Favorite Food

</template>

<script>

export default {
  name: 'LoadPage',
  // el: '#app',
  data(){
    return {
      show: true
    }
  },
  mounted(){

    this.showToggle()

  },
  methods: {
    showToggle(){
      setTimeout(() => {
        this.show = false
      }, 3000)
    }
  }
}

</script>

<style>

#loading {

}
.preloader {
  position: absolute;
  padding: 0px;
  width: 375px;
  height: 812px;
  background-color: white;
  background-image: url('/Pattern.png');
  background-repeat: no-repeat;
  background-position: center center;
  font-size: 64px;
  z-index: 2; }

@keyframes scaleIn {
  0% {
    transform: scale(0); }
  100% {
    transform: scale(1); } }



  .bodyOfLoad {
    position: absolute;
    width: 175px;
    height: 139px;
    left: 99px;
    top: 304px;
    background-image: url('/Logo.png');
    background-repeat: no-repeat;
    background-position: center;
    z-index: 3;
    animation-name: scaleIn;
    animation-duration: 3s;
    transform: scale(0);
    animation-delay: 0s;
  }
    .brandImg {

    }
    .circleDelivery {
      position: absolute;
      width: 188px;
      height: 54px;
      left: -22px;
      top: 139px;

      font-family: Viga;
      font: Viga;
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 54px;
      /* identical to box height */
      color: #53E88B;
      letter-spacing: 0.5px;
      z-index: 3;
    }
    .circleDelivery2 {
      position: absolute;
      width: 162px;
      height: 16px;
      left: 9px;
      top: 192px;
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
      /* identical to box height */
      letter-spacing: 1px;
      color: #09051C;
    }

</style>
