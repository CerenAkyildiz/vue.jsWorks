<template>
  <div>
    <h1> New Memory Componenti</h1>
    <button @click="counter++">Arttır</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  name: "NewMemory",
  data: function () {
    return {
      counter: 0

    }
  },
  destroyed() {
    console.log("Destroyed");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  }
}
</script>

<style scoped>

</style>