<template>
  <div class="container mt-2">
    <div class="block">
      <div class="columns is-centered">
        <div class="column is-half">
          <div class="card">
            <div class="card-content">

              <div class="content">
                <div class="columns is-centered is-multiline mt-2">
                <div class="column is-12 is-centered">
                    <div class="has-text-centered">
                        <p class="title is-4">Procesando</p>
                    </div>

                </div>
                <div class="column is-6">
                    <b-image
                        :src="imgSrc"
                        ratio="12by19"
                    ></b-image>
                </div>

            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-loading :is-full-page="isFullPage" v-model="isLoading" :can-cancel="false"></b-loading>
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
      subtotal:0,
      iva:0,
      total:0,
      isFullPage:true,
      isLoading:true,
      txId:0,
      clientTxId:"",
      imgSrc: process.env.MIX_API_URL + "imgs/pagar.png",
    }
  },
  watch: {
  '$route' () {
    if(this.$route.query.id)
    {
        if(this.$route.query.clientTransactionId)
        {
            this.clientTxId=this.$route.query.clientTransactionId;
            console.log("🚀 ~ file: Procesando.vue ~ line 60 ~ this.$route.query.clientTransactionId", this.$route.query.clientTransactionId)
            console.log("🚀 ~ file: Procesando.vue ~ line 60 ~ this.clientTxId", this.clientTxId)
            this.txId=this.$route.query.id;
            console.log("🚀 ~ file: Procesando.vue ~ line 63 ~ this.$route.query.id", this.$route.query.id)
            console.log("🚀 ~ file: Procesando.vue ~ line 62 ~ this.txId", this.txId)

            this.confirmPayphone()
        }
    }
  }
  },
  mounted(){
    console.log("Mounted---------------------")
    if(this.$route.query.id)
    {
        console.log("With id ---------------------")
        if(this.$route.query.clientTransactionId)
        {
            this.clientTxId=this.$route.query.clientTransactionId;
            this.txId=this.$route.query.id;
            this.confirmPayphone()
        }
    }
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
  methods:{
    confirmPayphone()
    {
        console.log("Confirm Payphone");


        fetch("https://pay.payphonetodoesposible.com/api/button/V2/Confirm", {
            method: "POST",
            headers: { "Content-Type": "application/json","Authorization" :"Bearer ExElbJt2BnAh9UdLYzax68_4aCuPo9ZaQ11I16xIehio7oWg5ZCbDCk8PvoFtDETHS_XGg4XK_nOWsXDcr2Ox3E6_JjnQEksAtRf2-Lrxn16XGb6j35TukV3iL-J5jIvzF5vXK17lHrULEJvENxllS-4uEoXA3VYVa6akENxamxLxcCC8oQ7Ck-YBOxkIqmbTTo08o2j7jXRLyuKqEdnvbVNw146-0is2Ley0wuwVPXYTxOYtbJxKHdYFwS2OKw8-9yuU_jJaesamN5JS2_kt5pDDdgDr68PBjd9rf-AgSzR6SxI-8N2rc8xl29pvJwt8rYNAw",
            "Access-Control-Allow-Origin":"https://pay.payphonetodoesposible.com",
            "Origin":"https://pay.payphonetodoesposible.com",
            "Access-Control-Allow-Credentials":true},
            body: JSON.stringify(
                {
                   "id": this.txId,
                   "clientTxId": this.clientTxId
                }

            )
        })
            .then((response) => response.json())
            .then((data) => {
            var statusCode = data.statusCode;
            console.log(statusCode);
            if(statusCode)
            {
                console.log("Yes statuscode")
                if(statusCode==3)
                {
                    this.preCheckout()
                }
                else
                {
                    console.log("status code no 3")
                    this.noConfirmado()
                }
            }
            else
            {
                this.noConfirmado()
            }

            })
            .catch(error=>{
                console.log("error")
                console.log(error)
            })


    },
    noConfirmado()
    {
        this.isLoading=false;
        this.$buefy.dialog.confirm({
                    title: 'Transacción No Confirmada',
                    message: 'Desea volver a intentar o volver al inicio',
                    confirmText: 'Volver al inicio',
                    cancelText: 'Volver a intentar',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => this.$router.push("/"),
                    onCancel: () => this.$router.push("/carrito")
                })
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

    },
    preCheckout()
    {
         setTimeout(()=>{ this.checkout() }, 3000);
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
    checkout() {
        console.log("Checkout start")
        console.log("Checkout auth")
        console.log("🚀 ~ file: Procesando.vue ~ line 170 ~ checkout ~ this.cartList.itemsList.length", this.cartList.itemsList.length)


        if(this.cartList.itemsList.length>0)
        {
            console.log("Checkout not empty")
            this.calcularTotal()
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
            valorTotal: this.total,

          }),
        })
          .then((response) => response.json())
          .then((data) => {
            var resp = data;

            if (data) {
              // this.tablaProductos = data.respuesta;

              // console.log(resp);
              //this.$buefy.dialog.alert("Usuario agregado correctamente");
              console.log("Checkout pre empty")
              this.emptyCart();
              console.log("Checkout empty")
              this.$router.push("/usuario/pedidos?pedido=ok");
              console.log("Checkout push")
            } else {
              //this.$router.push("/login")
              //this.tablaProductos = [];

            }
          })
          .catch(error=>{
                        console.log(error)
                      });
      } catch (e) {
        this.$store.dispatch("setAuth", false);
      }
        }
        else
        {
            console.log("Checkout cart empty ------------")
        }


    },
  }
}
</script>
