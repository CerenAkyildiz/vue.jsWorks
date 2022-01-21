<template>
  <div class="col-xs-12 col-sm-6" v-if="Object.keys(server).length ===0">
    <p>Sunucu Bilgisi güncel değil!!</p>
  </div>
  <div class="col-xs-12 col-sm-6" v-else>
    <h3>{{server}}</h3>
    <button @click="changeStatus">Durumu Değiştir</button>
  </div>
</template>
<script>
import {eventBus} from "../../main";

export default {
  data: function () {
    return {
      server: {}
    }

  },
  methods:{
    changeStatus(){
      this.server.status="Normal";
    }

  },
  created () {
    eventBus.$on("serverDataSend", (data) => {
      this.server = data;
    })
  }
}

</script>