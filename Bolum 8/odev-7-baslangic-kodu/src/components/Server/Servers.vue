<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server-part @click.native="sendToDetail(server)" v-for="server in servers" :serverData="server"></app-server-part>
    </ul>
  </div>
</template>

<script>
import Server from './ServerPart';
import {eventBus} from "../../main";

export default {
  components: {
    appServerPart: Server
  },
  data: function () {
    return {
      servers: [

        {id: 1, status: "Kritik"},
        {id: 2, status: "Tehlikeli"},
        {id: 3, status: "Normal"}
      ]
    }
  },
  methods:{
    sendToDetail(server){
     eventBus.sendToData(server);
    }
  }
}

</script>