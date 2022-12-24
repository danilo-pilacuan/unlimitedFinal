<template>
  <div>




    <p class="title" v-show="cartList.itemsList.length == 0">No hay items</p>

    <b-steps
      v-model="activeStep"
      :animated="false"
      :rounded="true"
      :has-navigation="false"
    >
      <b-step-item
        step="1"
        label="Resumen de Compra"
        :clickable="isStepsClickable"
      >
        <div class="pl-5 pr-5">
          <h1 class="subtitle">Carrito de Compras</h1>
          <div class="block">
            <div class="columns">
                <div class="column is-9">
                    <b-table
                    :data="cartList.itemsList"
                    :bordered="true"
                    :striped="false"
                    :hoverable="false"
                    :loading="false"
                    :focusable="false"
                    :mobile-cards="true"
                    :paginated="true"
                    :per-page="5"
                    >
                    <b-table-column
                        v-slot="props"
                        label="Item"
                        field="producto.urlFoto"
                        centered
                    >
                        <div class="contenedorImgProd">
                            <img
                            class="imgProducto"
                                :src="getUrlFoto(props.row.producto)"
                                alt="Placeholder image"
                            />
                        </div>
                    </b-table-column>
                    <b-table-column
                        v-slot="props"
                        label="Nombre Producto"
                        field="producto.descripcionCorta"
                        class="is-vcentered"
                        centered
                    >
                        {{ props.row.producto.nombre }}

                    </b-table-column>
                    <b-table-column
                        v-slot="props"
                        label="Detalle"
                        field="producto.descripcionCorta"
                        class="is-vcentered"
                        centered
                    >
                        {{ props.row.producto.descripcionCorta }}

                    </b-table-column>
                    <b-table-column
                        v-slot="props"
                        label="Precio"
                        field="precio"
                        centered
                    >
                        <p v-if="props.row.producto.estado==2" style="text-decoration: line-through;">${{ props.row.producto.precio.toFixed(2) }}</p>
                        <p v-if="props.row.producto.estado==2" >${{ (props.row.producto.precio*(1-(props.row.producto.descuento/100))).toFixed(2) }}</p>
                        <p v-if="props.row.producto.estado==1">${{ props.row.producto.precio.toFixed(2) }}</p>


                    </b-table-column>
                    <b-table-column
                        v-slot="props"
                        label="Cantidad"
                        field="cantidad"
                        centered
                    >

                            <b-numberinput
                    step="1"
                    :expanded="true"
                    :max="getExistencias(props.row.producto,props.row.caracteristica,props.row.tamanioCaracteristica,props.row.tamanioProducto)"
                    :min="1"
                    size="is-small"
                    controls-rounded
                    v-model="props.row.cantidad"
                    aria-minus-label="Decrement by 0.01"
                    aria-plus-label="Increment by 0.01"
                    @input="calcularTotal">
                  </b-numberinput>

                    <!-- <input class="input" type="number" v-model="props.row.cantidad"> -->
                    </b-table-column>
                    <b-table-column
                        v-slot="props"
                        label="Total"
                        field="total"
                        centered
                    >
                        ${{ (props.row.cantidad*props.row.producto.precio*(1-(props.row.producto.descuento/100))).toFixed(2) }}
                    </b-table-column>
                    <!-- <b-table-column
                        v-slot="props"
                        label="Estado"
                        field="estado"
                        searchable
                    >
                        {{ props.row.estado?"Activo":"Inactivo" }}
                    </b-table-column> -->

                    <b-table-column field="actions" label="Acciones" v-slot="props">
                        <div class="buttons">
                        <!-- <b-button
                            rounded
                            type="is-warning"
                            icon-left="pencil"
                            @click="editFunction(props.row)"
                        >
                        </b-button> -->
                        <b-button
                            rounded
                            type="is-danger"
                            icon-left="delete"
                            @click="confirmDelete(props.row)"
                        >
                        </b-button>
                        </div>
                    </b-table-column>
                    </b-table>
                </div>
                <div class="column is-3">
<div class="card">

            <div class="card-content">
              <div class="content">
                <p class="title">Resumen</p>
                <p>Subtotal: ${{subtotal.toFixed(2)}}</p>
                <p>IVA: ${{iva.toFixed(2)}}</p>
                <p>Total: ${{total.toFixed(2)}}</p>
                <div class="columns is-centered is-multiline">
                    <div class="column is-12">
                        <b-button type="is-primary" expanded @click="handleFinalizar">Finalizar Compra</b-button>
                    </div>
                    <div class="column is-12">
                        <b-button type="is-danger" expanded @click="emptyCart">Vaciar Carrito</b-button>
                    </div>
                </div>
              </div>
            </div>
          </div>
                </div>
            </div>
          </div>
          <!-- <div
            class="container"
            v-for="(registroProducto, index) in cartList.itemsList"
            :key="index"
          >
            <div class="block">
              <div class="columns">
                <div class="column">
                  <section class="hero is-primary" style="cursor: pointer">
                    <div class="hero-body">
                      <p class="title">
                        Nombre: {{ registroProducto.producto.Nombre }}
                      </p>
                      <p class="subtitle">
                        Código: {{ registroProducto.producto.codigo }}
                      </p>
                      <p class="subtitle">
                        Precio: {{ registroProducto.producto.precio }}
                      </p>
                      <p class="subtitle">
                        Cantidad: {{ registroProducto.cantidad }}
                      </p>
                      <p class="subtitle">
                        Descripción:
                        {{ registroProducto.producto.descripcionCorta }}
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </b-step-item>

      <!-- <b-step-item
        step="2"
        label="Identificación"
        :clickable="isStepsClickable"
        :type="{ 'is-success': isProfileSuccess }"
      >
        <h1 class="title has-text-centered">Profile</h1>
        Lorem ipsum dolor sit amet.
      </b-step-item> -->

      <b-step-item
        step="2"
        label="Entrega"
        :clickable="isStepsClickable"
      >
      <div class="columns is-centered mt-2" v-if="currentUser">
        <div class="column is-10 p-4 profileBackground">
<div v-if="currentUser.direccion">
        <h1 class="title">Datos de Envío</h1>
        <div class="columns is-multiline">
            <div class="column is-6">
            <b-field horizontal label="Calle Principal">
                <b-input v-model="currentUser.direccion.callePrincipal" maxlength="50"></b-input>
            </b-field>
            </div>
            <div class="column is-6">
            <b-field horizontal label="Calle Secundaria">
                <b-input v-model="currentUser.direccion.calleSecundaria" maxlength="50"></b-input>
            </b-field>
            </div>
            <div class="column is-6">
            <b-field horizontal label="Numero de Casa/Departamento">
                <b-input v-model="currentUser.direccion.numeroCasa" maxlength="50"></b-input>
            </b-field>
            </div>
            <div class="column is-6">
            <b-field horizontal label="Teléfono">
                <b-input v-model="currentUser.direccion.telefono" maxlength="50"></b-input>
            </b-field>
            </div>
            <div class="column is-6">
            <b-field horizontal label="Ciudad">
                <b-input v-model="currentUser.direccion.ciudad" maxlength="50"></b-input>
            </b-field>
            </div>
            <div class="column is-6">
            <b-field horizontal label="Guardar">
                <b-button type="is-primary" @click="guardarDir">Guardar</b-button>
            </b-field>
            </div>
        </div>
      </div>
    </div>
      </div>
      </b-step-item>

      <b-step-item
        step="3"
        label="Pago"
        :clickable="isStepsClickable"
        disabled
      >
      <div class="columns is-centered mt-2" v-if="currentUser">
        <div class="column is-10 p-4 profileBackground">
<div v-if="currentUser.direccion">
        <h1 class="title">Completar Pago</h1>
        <div>
            <div class="columns is-centered is-multiline mt-2">
                <div class="column is-12 is-centered">
                    <div class="has-text-centered">
                        <b-button type="is-primary" @click="handlePayphone">Pagar Con PayPhone</b-button>
                    </div>

                </div>
                <div class="column is-2">
                    <b-image
                        :src="imgSrc"
                        ratio="9by19"
                    ></b-image>
                </div>

            </div>

            <!-- <img
          :src="imgSrc"
          alt="Lightweight UI components for Vue.js based on Bulma"
        /> -->

        </div>
      </div>
    </div>
      </div>


      </b-step-item>
    </b-steps>
  </div>
</template>

<script>
import AnunciosComponent from "./AnunciosComponent.vue";

export default {
  components: {
    AnunciosComponent: AnunciosComponent,
  },
  data() {
    return {
      imgSrc: process.env.MIX_API_URL + "imgs/pagar.png",
      tablaProductos: [],
      subtotal:0,
      iva:0,
      total:0,
      activeStep: 0,

                showSocial: false,
                isAnimated: true,
                isRounded: true,
                isStepsClickable: false,

                hasNavigation: true,
                customNavigation: false,
                isProfileSuccess: false,

                prevIcon: 'chevron-left',
                nextIcon: 'chevron-right',
                labelPosition: 'bottom',
                mobileMode: 'minimalist'
    };
  },
  computed: {
    authenticated() {
      return this.$store.state.authenticated;
    },
    cartList() {
      return this.$store.state.cartList;
    },
    currentUser() {
      return this.$store.state.currentUser;
    },
    authToken() {
      return this.$store.state.authToken;
    },
  },
watch: {
  cartList () {
    this.calcularTotal()
  }
  },
  mounted() {
    this.calcularTotal()
  },
  methods: {
    async handlePayphoneAxios(){
            await this.axios.post("https://pay.payphonetodoesposible.com/api/button/Prepare",{
                    "responseUrl": "https://unlimitedstorequito.site/procesando",
                    "amount": 100,
                    "amountWithoutTax": 100,
                    "clientTransactionId": "user100"
                }, {
                headers: {
                    "Content-Type": "application/json","Authorization" :"Bearer favq1ODkWBZYl933K37AvGRIoj9YcxBMPe0R0wrpgONqVU8YtJTZxBqMjU9DSvENhR9huuZCJxOTL2dGKIYzW-QLEjn2WKJmrDd2GXkxzSUuABHxlIOQlbwbb835lAyn7ehBznOgH68I7C_UHgYsKLjOn9OHsH6tiKTigvjKzlWrfdYnei5Hq0bq43O2TMliufZ4d81zSUidGsL_3ii7nu40FTpqexzP-bmG2P3S0eGU8-H4-BNN40ONrEniVJNf-L6H4oclqITfeRcNg42LZUeNLixDfVvRIf79hVRHZId2pOQwAVkkr4pCwz437_Kw41UWoQ",
                    "Access-Control-Allow-Origin":"https://pay.payphonetodoesposible.com",
                    "Origin":"https://pay.payphonetodoesposible.com",
                    "Access-Control-Allow-Credentials":true
                }
                })
                      .then(response=>{
                        console.log("response")
                        console.log(response)
                        this.tablaProductos=response.data.respuesta
                        console.log(this.tablaProductos);
                      })
                      .catch(error=>{
                        this.tablaProductos = [];
                        console.log(error)
                      });
        },
    handlePayphone()
    {
        this.calcularTotal()
        console.log("HandlePayphoneWithoutAxios");
        console.log(this.total);
        console.log(this.authToken);
        let tokenClient=Math.random().toString(36).substr(2)+Math.random().toString(36).substr(2);
        console.log(tokenClient)

        fetch("https://pay.payphonetodoesposible.com/api/button/Prepare", {
            method: "POST",
            headers: { "Content-Type": "application/json","Authorization" :"Bearer ExElbJt2BnAh9UdLYzax68_4aCuPo9ZaQ11I16xIehio7oWg5ZCbDCk8PvoFtDETHS_XGg4XK_nOWsXDcr2Ox3E6_JjnQEksAtRf2-Lrxn16XGb6j35TukV3iL-J5jIvzF5vXK17lHrULEJvENxllS-4uEoXA3VYVa6akENxamxLxcCC8oQ7Ck-YBOxkIqmbTTo08o2j7jXRLyuKqEdnvbVNw146-0is2Ley0wuwVPXYTxOYtbJxKHdYFwS2OKw8-9yuU_jJaesamN5JS2_kt5pDDdgDr68PBjd9rf-AgSzR6SxI-8N2rc8xl29pvJwt8rYNAw",
            "Access-Control-Allow-Origin":"https://pay.payphonetodoesposible.com",
            "Origin":"https://pay.payphonetodoesposible.com",
            "Access-Control-Allow-Credentials":true},
            body: JSON.stringify(
                {
                    "responseUrl": "https://unlimitedstorequito.site/procesando",
                    "amount": Math.trunc(this.total*100),
                    "amountWithoutTax": Math.trunc(this.total*100),
                    "clientTransactionId": tokenClient
                }
            )
        })
            .then((response) => response.json())
            .then((data) => {
            var urlPayphone = data.payWithPayPhone;
            console.log(urlPayphone);
            if(urlPayphone)
            {
                window.location.href = urlPayphone;
                //this.$router.push(urlPayphone);
            }
            else
            {
                this.$buefy.dialog.alert("Pago no procesado");
            }

            })
            .catch(error=>{
                console.log("error")
                console.log(error)
            })
    },
    guardarDir()
        {
            fetch(process.env.MIX_API_URL+"api/direcciones/"+this.currentUser.direccion.id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(this.currentUser.direccion)
            })
                .then((response) => response.json())
                .then((data) => {
                var resp = data.respuesta;
                console.log(resp);
                    //this.$buefy.dialog.alert("Dirección guardada correctamente");
                    this.$store.dispatch("setCurrentUser", this.currentUser)
                    this.activeStep=2;
                });
        },
    calcularTotal()
    {
        let auxtotal=0;
        this.cartList.itemsList.forEach(element => {

            console.log("🚀 ~ file: Carrito.vue ~ line 270 ~ mounted ~ element", element)
            if(element.producto.estado==1)
            {
                auxtotal=auxtotal+(element.producto.precio*element.cantidad)
            }
            if(element.producto.estado==2)
            {
                auxtotal=auxtotal+((element.producto.precio*(1-(element.producto.descuento/100)))*element.cantidad)
            }
            console.log("🚀 ~ file: Carrito.vue ~ line 272 ~ mounted ~ element.cantidad", element.cantidad)
            console.log("🚀 ~ file: Carrito.vue ~ line 272 ~ mounted ~ element.producto.precio", element.producto.precio)
        });
        this.total=auxtotal
        this.subtotal=auxtotal*0.88
        this.iva=auxtotal*0.12
    },
    confirmDelete(producto)
    {
        let cartListAux= this.cartList.itemsList;
        cartListAux.splice(cartListAux.indexOf(producto),1)
        let cartAux = {
            itemsList: cartListAux,
        };
        this.$store.dispatch("setCartList", cartAux);
        this.calcularTotal()
    },
    getUrlFoto(producto) {
      let urlImg = "";
      if (producto.tipo == 0 || producto.tipo == 3) {
        let arrayUrls = producto.urlsFotos.split(";");
        urlImg = arrayUrls[0];
      } else {
        // console.log("casasasaasas")
        // console.log(producto.caracteristicas_producto)
        if (
          producto.caracteristicas_producto &&
          producto.caracteristicas_producto.length > 0
        ) {
          let arrayUrls2 =
            producto.caracteristicas_producto[0].urlFoto.split(";");
          urlImg = arrayUrls2[0];
        }
      }
      return urlImg;
    },
    getExistencias(producto,caracteristica,tamCaracteristica,tamProducto) {
      let existencias=0
      if (producto.tipo == 0){
        existencias=producto.existencias
      }
      if (producto.tipo == 1){
        existencias=caracteristica.existencias
      }
      if (producto.tipo == 2){
        existencias=tamCaracteristica.existencias
      }
      if (producto.tipo == 3){
        existencias=tamProducto.existencias
      }
      return existencias
    },
    handleFinalizar()
    {
      if(this.authenticated)
      {
        this.activeStep=1;
      }
      else
      {
        this.$router.push("/login")
      }
    },
    checkout() {
      // this.cartList.itemsList.forEach(element => {
      //     this.fetchRegistroCarrito(element)
      // });

      if(this.authenticated)
      {
        if(this.cartList.itemsList.length>0)
        {
            try {
        fetch(process.env.MIX_API_URL + "api/ordenes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            currentUser: this.currentUser,
            itemsList: this.cartList.itemsList,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            var resp = data;

            if (data) {
              // this.tablaProductos = data.respuesta;

              // console.log(resp);
              //this.$buefy.dialog.alert("Usuario agregado correctamente");
              this.emptyCart();
              this.$router.push("/usuario/pedidos");
            } else {
              //this.$router.push("/login")
              //this.tablaProductos = [];
            }
          });
      } catch (e) {
        this.$store.dispatch("setAuth", false);
      }
        }
        else
        {
            this.$buefy.dialog.alert("Agregue productos al carrito");
        }
      }
      else
      {
        this.$router.push("/login")

      }
    },
    fetchRegistroCarrito(registroCarrito) {
      try {
        fetch(process.env.MIX_API_URL + "api/registrocarrito", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
          body: JSON.stringify(registroCarrito),
        })
          .then((response) => response.json())
          .then((data) => {
            var resp = data;

            if (data) {
              this.tablaProductos = data.respuesta;
              console.log("this.tablaProductos");
              console.log(this.tablaProductos);
            } else {
              //this.$router.push("/login")
              this.tablaProductos = [];
            }
          });
      } catch (e) {
        this.$store.dispatch("setAuth", false);
      }
    },
    emptyCart() {
      // let cartAux={
      //     data1:"ada",
      //     data2:"ada1",
      //     data3:"ada2",
      //     data4:"ada3",
      // }
      // this.$store.dispatch("setAuth", true)
      let cartAux = {
        itemsList: [],
      };
      this.$store.dispatch("setCartList", cartAux);
      this.calcularTotal()
    },
    fetchProductos() {
      try {
        fetch(process.env.MIX_API_URL + "api/productos", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        })
          .then((response) => response.json())
          .then((data) => {
            var resp = data;

            if (data) {
              this.tablaProductos = data.respuesta;
              console.log("this.tablaProductos");
              console.log(this.tablaProductos);
            } else {
              //this.$router.push("/login")
              this.tablaProductos = [];
            }
          });
      } catch (e) {
        this.$store.dispatch("setAuth", false);
      }
    },
  },
};
</script>

<style>
.contenedorImgProd
{
    width: 7em;
}
.imgProducto {

  height: 6em;
  width: auto;
}
td
{
        vertical-align: middle !important;
}
.b-numberinput.field.is-grouped div.control
{
    flex-grow: 1 !important;
    flex-shrink: 1 !important;

}
.b-numberinput
{
    display: inline-flex !important;
    min-width: 10em;
}
.profileBackground {
  background-color: #ffffff;
}
</style>
