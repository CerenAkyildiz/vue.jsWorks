<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <br><br>
        <button @click="selectedComponent='appMemory'" class="btn-sm btn btn-primary">appMemory</button>
        <button @click="selectedComponent='appNewMemory'" class="btn-sm btn btn-primary">appNewMemory</button>
        <button @click="selectedComponent='appAuthor'" class="btn-sm btn btn-primary">appAuthor</button>
        <hr>
        <p>{{ selectedComponent }}</p>

        <hr>
<!--        <component :is="selectedComponent"></component>&lt;!&ndash;vue js anlatığı bir prop is varsa eğer bu componentte isim varsa onu göster&ndash;&gt;-->

        <keep-alive><component :is="selectedComponent"></component><!--vue js anlatığı bir prop is varsa eğer bu componentte isim varsa onu göster--></keep-alive>
        <!--keep alive dinamik componentleri canlı tutmamımızı sağlar-->

        <!--        <app-memory>
                <h1 slot="heading">Her şey güzel olacak</h1>
                <p slot="content">İnanıyoruzz</p>
                <p>C.A.</p>
              </app-memory>-->

      </div>
    </div>
  </div>
</template>

<script>
import Memory from "./components/Memory";
import NewMemory from "./components/NewMemory";
import Author from "./components/Author";

export default {
  data: function () {

    return {
      selectedComponent: "appMemory"
    }

  },
  components: {
    appMemory: Memory,
    appNewMemory: NewMemory,
    appAuthor: Author
  }
}
</script>
