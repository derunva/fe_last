<template lang="pug">
    .foodType
      .foodImage 
        img(:src='item.img')
      .foodName {{item.name}} 
        .subFood {{item.subname}}
      .foodPrice {{item.price}}
          

    
    
 
</template>

<script>
export default {
  props: ['item'],
   data () {
    return {
      
    }
  }
}
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .foodType {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    width: 323px;
    height: 87px;
    margin-left: 20px;
    background: #FFFFFF;
    box-shadow: 0px 0px 50px rgba(90, 108, 234, 0.07);
    border-radius: 22px;
  }

  .foodType:first-child  {
    margin-top: 160px;

  }

  .foodType:nth-child(2) .foodName {
    margin-left: -71px;

  }

  .foodImage {
    margin-top: 11px;
    margin-left: 10px;
  }

  .foodName {
    display: block;
    height: 20px;
    margin-top: 25px;
    margin-left: -41px;
    font-family: BentonSans Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    color: #09051C;
    text-align: left;

  }


  .subFood {
    height: 14px;
    margin-top: 4px;
    font-family: BentonSans Regular;
    font-size: 14px;
    font-weight: bold;
    line-height: 14px;
    letter-spacing: 0.5px;
    color: #3B3B3B;
    mix-blend-mode: normal;
    opacity: 0.3;
  }

  .foodPrice {
    height: 29px;
    margin-top: 29px;
    margin-right: 20px;
    top: calc(50% - 29px/2 - 92.5px);
    font-family: BentonSans Bold;
    font-weight: bold;
    font-size: 22px;
    line-height: 29px;
    color: #FEAD1D;
  }

</style>
