<template>
  <div class="container">
    <h3>Form Verileriyle Çalışmak</h3>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h4>Başvuru Formu</h4>
          </div>
          <div class="panel-body">
            <form>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="email">Kullanıcı Adı</label>
                    <input type="text" id="username" class="form-control" v-model="userData.username">
                  </div>
                  <div class="form-group">
                    <label for="password">Şifre</label>
                    <input type="password" id="password" class="form-control" v-model.lazy="userData.password">
                  </div>
                  <div class="form-group">
                    <label for="age">Yaş</label>
                    <input type="number" id="age" class="form-control" v-model.number.trim="userData.age">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label for="message">Açıklama</label><br>
                  <textarea id="message" rows="3" class="form-control" v-model="userData.message"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>
                      <input type="checkbox" value="yazilim" v-model="userData.interest"> Yazılım
                    </label>
                    <label>
                      <input type="checkbox" value="donanim" v-model="userData.interest"> Donanım
                    </label>
                  </div>

                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label>
                    <input type="radio" value="erkek" v-model="userData.gender"> Erkek
                  </label>
                  <label>
                    <input type="radio" value="kadin" v-model="userData.gender"> Kadın
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 from-group">
                  <label>Şehir</label>
                  <select class="form-control" v-model="userData.city">
                    <option v-for="c in userData.cities">{{ c }}</option>
                  </select>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-md-12">
                  <button @click.prevent="submit"
                          class="btn btn-primary">Gönder!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6" v-if="isSubmitted">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h4>Form Verileri</h4>
          </div>
          <div class="panel-body">
            <p>Kullanıcı Adı:{{ userData.username }}</p>
            <p>Şifre:{{ userData.password }}</p>
            <p>Yaş:{{ userData.age }}</p>
            <p style="white-space: pre">Açıklama:{{ userData.message }} </p>
            <p><strong>İlgi Alanları</strong></p>
            <ul>
              <li v-for="i in userData.interest">{{ i }}</li>
            </ul>
            <p>Cinsiyet:{{ userData.gender }}</p>
            <p>Şehir:{{ userData.city }}</p>
            <p>Toggle:</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      userData: {
        username: null,
        password: null,
        age: null,
        message: null,
        interest: [],
        gender: null,
        city: null,
        cities: ["İzmir", "Çanakkale", "Bursa"]
      },
      isSubmitted: false

    }
  },
  methods: {
    submit() {
      this.isSubmitted = true;
    }
  }


}
</script>

<style>

</style>
