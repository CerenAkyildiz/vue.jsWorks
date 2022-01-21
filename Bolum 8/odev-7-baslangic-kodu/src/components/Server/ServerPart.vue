<template>
  <li
      class="list-group-item">
    Sunucu #{{ serverData.id }}
    Sunucu Durumu #{{ serverData.status }}

  </li>
</template>

<script>
export default {
  name: "ServerPart",
  props:["serverData"]
}
</script>

<style scoped>

</style>