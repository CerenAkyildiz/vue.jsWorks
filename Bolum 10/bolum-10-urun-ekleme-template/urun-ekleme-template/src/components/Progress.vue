<template>
  <div class="progress">
    <div class="progress-bar bg-info" role="progressbar" :style="{width: progress+'%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
      {{count}}/10
    </div>
  </div>
</template>

<script>
import {eventBus} from "../main";

export default {
  name: "Progress",
  data :function (){
    return{
      count:0,
      progress:0
    }
  },
  created() {
    eventBus.$on("progressBarUpdated", (data)=>{
      this.count=data;
      this.progress=data*10
    })
  }
}
</script>

<style scoped>

</style>