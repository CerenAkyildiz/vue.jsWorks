<template>
  <div class="col-md-s6">
    <h3>Child Component 2</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir diğer Child componentim</p>
    <p>Ben UserDetail.vue isimli Child Component'in içerisindeki veriyim  :{{age}}</p>
    <button @click="changeAge"> Yaş değiştir</button>
  </div>
</template>
<script>
import {eventBus} from '../main'
export default {
  props:{
    age:String
  },
  methods:{
    changeAge(){
      this.age=24;
     // this.$emit("agewd",this.age)
      eventBus.$emit("agewd",this.age)
    }
  }
}
</script>

<style scoped>
  div {
    background-color: lightgoldenrodyellow;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>

