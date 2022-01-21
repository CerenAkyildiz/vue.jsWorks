<template>
  <div>
    <div>
      <slot name="heading"></slot>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
    <div>
      <slot ></slot>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #666;
    padding: 20px 20px;
    margin-top: 20px;
  }
</style>
