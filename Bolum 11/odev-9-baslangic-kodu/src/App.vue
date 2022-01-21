<template>
  <div class="container">
    <form>
      <div class="row" v-if="!isSubmitted">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <form>
            <div class=row><h3 style="text-align: center">Üye Formu</h3></div>
            <div class="row">
              <div class="col-md-12">
               <app-fullname v-model="userData.nameSurname"></app-fullname>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="text" id="username" class="form-control" v-model="userData.email">
                </div>
                <div class="form-group">
                  <label for="password">Şifre</label>
                  <input type="password" id="password" class="form-control" v-model.lazy="userData.password">
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

            <div class="row" style="text-align: center">
              <div class="col-md-12">
                <button @click.prevent="submit"
                        class="btn btn-primary">Gönder!
                </button>
              </div>
            </div>
          </form>


          <!-- Soru 1 -->
          <!-- Aşağıdaki bilgileri içeren bir Üye Ol sayfası geliştiriniz. -->
          <!-- Tam Adı (Ad + Soyad) -->
          <!-- E-mail -->
          <!-- Şifre -->
          <!-- Cinsiyet (Kadın/Erkek) -->

          <!-- Soru 2 -->
          <!-- Üye Ol formu, Submit EDİLMEDİĞİ SÜRECE ekranda gözükmelidir.-->
          <!-- Üye Bilgileri Ekranı ise form Submit EDİLDİKTEN SONRA ekranda gözükecektir -->

          <!-- Soru 3 -->
          <!-- Yukarıdaki uygulamayı düzenleyerek Tam Ad (Ad + Soyad) alanı için bir Form Kontrol Elemanı üretiniz -->
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h4>Girdiğiniz Bilgier</h4>
          </div>
          <div class="panel-body">
            <p>Tam Ad:{{ userData.nameSurname }} </p>
            <p>E-mail:{{ userData.email }} </p>
            <p>Şifre:{{ userData.password }} </p>
            <p>Cinsiyet:{{ userData.gender }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fullname from './Fullname'

export default {
  components: {
    appFullname: fullname
  },
  data: function () {
    return {
      userData: {
        nameSurname: 'Ceren Akyıldız',
        //name: '',
        //surname: '',
        email: '',
        password: '',
        gender: null
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
