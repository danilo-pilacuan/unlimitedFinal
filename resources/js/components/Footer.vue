<template>
<footer class="footerMargin">
  <div class="content has-text-centered p-5">
    <div class="columns">
        <div class="column is-3"></div>
        <div class="column is-4">
            <div class="has-text-left pl-5">
                <p>Unlimited Store 2022</p>
                <p>Términos y Condiciones</p>
            </div>
        </div>
            <!-- <div class="column is-2">

            </div> -->
            <!-- <div class="column is-2">
                <div class="has-text-left pl-5">
                    <p>Categorías:</p>
                    <p v-for="(categoria, index) in tablaCategorias"
                    :key="index">
                    <router-link
                    style="color: #000"
                    :to="{ path: '/catalogo?categoria=' + categoria.nombre }"
                    >
                    {{ categoria.nombre }}
                    </router-link>
                    </p>
                </div>


            </div> -->
            <div class="column is-4 has-text-left">
                <p>Encuéntranos:</p>
                <p> <a href="https://goo.gl/maps/eenT5CwfoSj7kN427"
                target="_blank" style="all: unset; cursor: pointer; margin-bottom:5px !important;"> <b-icon
                icon="map-marker"
                size="is-small">
            </b-icon>  Dirección: Av. Real Audiencia, Quito 170310 - Edificio Málaga</a></p>

                <p> <a href="https://www.instagram.com/unlimited_store_quito/" target="_blank" style="all: unset; cursor: pointer;">
                <b-icon
                icon="instagram"
                size="is-small">
            </b-icon>  @unlimited_store_quito</a> </p>



            </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: process.env.MIX_API_URL + "imgs/logo.png",
      tablaCategorias: [],
      inputBuscar:""
    };
  },
  methods: {
    buscar()
    {
        let buscarParam=this.inputBuscar;
        this.$router.push("/catalogo?buscar="+buscarParam);
        this.inputBuscar="";
    },
    logout() {
      this.$store.dispatch("setAuth", false);
      this.$store.dispatch("setAuthToken", "");
      this.$store.dispatch("setUserType", 0);
      this.$store.dispatch("setCurrentUser", null);
      this.$router.push("/login");
    },
    fetchCategorias() {
      try {
        fetch(process.env.MIX_API_URL + "api/categorias", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        })
          .then((response) => response.json())
          .then((data) => {
            var resp = data;

            if (data) {
              this.tablaCategorias = data.respuesta;
              console.log("**********tablaCategorias");
              console.log(this.tablaCategorias);
            } else {
              //this.$router.push("/login")
              this.tablaCategorias = [];
            }
          });
      } catch (e) {}
    },
  },
  computed: {
    authenticated: function authenticated() {
      return this.$store.state.authenticated;
    },
    userType: function userType() {
      return this.$store.state.userType;
    },
  },
  mounted() {
    this.fetchCategorias();
  },
  watch: {
    authenticated: function (val) {
      console.log("Cambiado auth");
      console.log("Cambiado auth");
      console.log("Cambiado auth");
      console.log("Cambiado auth");
      console.log("Cambiado auth");
      console.log("Cambiado auth");
      console.log("Cambiado auth");
      console.log("Cambiado auth");
      console.log("Cambiado auth");
      console.log("Cambiado auth");
      console.log("Cambiado auth");
    },
  },
};
</script>


<style>
.footerMargin{
   position: relative;
   bottom: 0;
   width: 100%;
   height: 10rem;   /* Height of the footer */
   background: #fff;


}
</style>
