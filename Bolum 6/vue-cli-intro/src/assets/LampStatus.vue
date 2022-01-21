<template>

</template>

<script>
export default {
  name: "LampStatus"
}
</script>

<style scoped>

</style>
<template>
  <div>
    <p>Lamba Durumu: {{ status }} </p>
    <button @click="openLamp">Aç</button>
    <hr>
  </div>

</template>

<script>
export default {
  name: "LampStatus",
  data: function () {
    return {
      status: "Kapalı"
    }
  },
  methods: {
    openLamp() {
      this.status = "Açık";
    }
  }
}
</script>

