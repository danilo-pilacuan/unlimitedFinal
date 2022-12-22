<template>
  <div class="container mt-2">
    <div class="block">
      <div class="columns is-centered">
        <div class="column is-half">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  :src="imgSrc"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <b-icon
                icon="instagram"
                size="is-large">
            </b-icon>
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Unlimited Store</p>
                  <p class="subtitle is-6"><a href="https://www.instagram.com/unlimited_store_quito/">@unlimited_store_quito</a></p>
                </div>
              </div>

              <div class="content">
                Av. Real Audiencia, Quito 170310 - Edificio Málaga
                <br />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgSrc: process.env.MIX_API_URL + "imgs/logo.jpg",
      tablaCategorias: [],
      inputBuscar:"",
      inicioText:"Inicio"
    };
  },
}
</script>
