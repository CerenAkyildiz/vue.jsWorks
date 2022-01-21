<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p> Kullanıcı Adı :{{ name }}</p>
    <!--props bir array alır, parentten alınan değeleri göstermemizi almamızı sağlar.-->
    <p> Kullanıcı Adı 2 :{{ switchName() }}</p>
    <p> Kullanıcı Yaşı :{{ age }}</p>
    <button @click="sendToParent">Veriyi parent a gönder</button>
  </div>
</template>
<script>
import {eventBus} from '../main'
export default {
  props: {
    name: {
      type: String,
      default: "Barbişlerr"
    },
    age:String
  },
  methods: {
    switchName() {
      return this.name.split("").reverse().join("");
    },
    sendToParent() {
      this.$emit("data","cefri");//veri yaymayı sağlar
    }
  },
  created() {
    eventBus.$on("agewd",(value)=>{
      this.age=value;
    })
  }
}
</script>
<style scoped>
div {
  background-color: lightcoral;
  padding: 20px;
  border: 1px solid #666;
  display: inline-block;
}
</style>
