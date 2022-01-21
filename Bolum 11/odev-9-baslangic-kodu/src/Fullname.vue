<template>
  <div>
    <div class="form-group">
      <label>Ad</label>
      <input type="text"  class="form-control" :value="name" @input="nameChanged(true,$event)">
    </div>
    <div class="form-group">
      <label> Soyad</label>
      <input type="text" class="form-control" :value="surname" @input="nameChanged(false,$event)">
    </div>
  </div>

</template>

<script>
export default {
  name: "Fullname",
  props: ["value"],
  computed: {
    name() {
      return this.value.split(" ")[0];
    },
    surname() {
      return this.value.split(" ")[1];

    }

  },
  methods:{
    nameChanged(isFirst,e){
      let fl="";

      if(isFirst){
        fl=e.target.value+ ' ' + this.surname;
      }else{
        fl= this.name+ ' ' +e.target.value
      }
      this.value=fl;

      this.$emit("input",this.value)
    }
  }

}
</script>

<style scoped>

</style>