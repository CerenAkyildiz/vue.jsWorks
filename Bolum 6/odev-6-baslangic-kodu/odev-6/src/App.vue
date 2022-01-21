<template>
  <div class="container">
    <header-comp></header-comp>
    <hr>
    <sunucu-comp></sunucu-comp>
    <hr>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import header from './Header';
import footer from './Footer';
import sunucu from './Sunucu'

export default {
  components: {
    "header-comp": header,
    "footer-comp": footer,
    "sunucu-comp": sunucu
  }
}

</script>

<style>
div{
  border:2px dashed blue;
}
</style>
