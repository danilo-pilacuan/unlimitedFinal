<template>
  <b-navbar :mobile-burger="true">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          :src="imgSrc"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        INICIO
      </b-navbar-item>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/administracion' }"
        v-if="userType == 1"
      >
        ADMINISTRACIÓN
      </b-navbar-item>

      <b-navbar-item
        tag="router-link"
        :to="{ path: '/catalogo' }"
        v-if="userType == 2 || userType == 0"
      >
        CATÁLOGO
      </b-navbar-item>

      <b-navbar-dropdown label="CATEGORÍAS">
        <b-navbar-item
          tag="router-link"
          :to="{ path: '/catalogo?categoria=' + categoria.nombre }"
          v-for="(categoria, index) in tablaCategorias"
          :key="index"
        >
          {{ categoria.nombre }}
        </b-navbar-item>
      </b-navbar-dropdown>

      <b-navbar-dropdown label="INFORMACIÓN">
        <b-navbar-item tag="router-link" :to="{ path: '/acerca' }">
          ACERCA
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/contacto' }">
          CONTACTOS
        </b-navbar-item>
      </b-navbar-dropdown>


      <b-navbar-item tag="div">
        </b-navbar-item>
      <b-navbar-item tag="div">
        </b-navbar-item>
      <b-navbar-item tag="div">
        </b-navbar-item>
      <b-navbar-item tag="div">
      </b-navbar-item>
      <b-navbar-item tag="div">
<b-input placeholder="Buscar..."
                type="buscar"
                custom-class="inputWidth"
                v-model="inputBuscar"
                @keyup.native.enter="buscar"
                icon="magnify">
            </b-input>
            <p class="control">
                <b-button type="is-danger" style="border-top-right-radius:1em; border-bottom-right-radius:1em; border-bottom-left-radius:0em; border-top-left-radius:0em;" icon-left="magnify" @click="buscar"/>
            </p>
      </b-navbar-item>



    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link to="/carrito" v-if="userType == 2 || userType == 0" class="ml-3"
            ><b-icon icon="cart" class="has-text-dark" size="is-large"> </b-icon
          ></router-link>
          <router-link class="ml-3" to="/pedidos" v-if="userType == 1"
            >

            <b-icon
              icon="calendar-check"
              class="has-text-dark"
              size="is-large"
            >
            </b-icon>
            </router-link
          >


          <!-- <b-button v-else @click="logout" label="Cerrar Sesión" /> -->
          <router-link
            to="/usuario"
            v-if="authenticated && (userType == 2 || userType == 0)"
            class="ml-3"
          >
            <b-icon
              icon="account-circle-outline"
              class="has-text-dark"
              size="is-large"
            >
            </b-icon>
          </router-link>

            <router-link
            class="ml-3"
            to="/login"
            v-if="!authenticated"
            >
            <b-icon
              icon="login"
              class="has-text-dark"
              size="is-large"
            >
            </b-icon>
            </router-link>
          <router-link
            class="ml-3 mr-3"
            to="to"
            v-else @click.native="logout">
            <b-icon
              icon="logout"
              class="has-text-dark"
              size="is-large"
            >
            </b-icon>
            </router-link  >

          <router-link
            class="ml-3 mr-3"
            to="/registrarse"
            v-if="!authenticated"
            >
            <b-icon
              icon="account-plus"
              class="has-text-dark"
              size="is-large"
            >
            </b-icon>
            </router-link
          >
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: process.env.MIX_API_URL + "imgs/logo.png",
      tablaCategorias: [],
      inputBuscar:"",
      inicioText:"Inicio"
    };
  },
  expose: ['fetchCategorias',"printfFromNav"],
  methods: {
    printfFromNav(){
        console.log("4444444444444444444444444444444")
    },
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
.inputWidth
{
    width: 20em !important;
    border-top-right-radius:0em !important;
    border-bottom-right-radius:0em !important;
    border-bottom-left-radius:1em !important;
    border-top-left-radius:1em !important;
}
</style>
