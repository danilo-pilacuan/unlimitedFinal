<template>
    <div v-if="tablaPedidos">
        <h1 class="title">Pedidos</h1>

        <div class="container">
            <div class="block">
                <div class="columns">
                <div class="column">

                    <b-table
                    :data="tablaPedidos"
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
                        label="Fecha Pedido"
                        field="producto.descripcionCorta"
                        class="is-vcentered"
                        centered
                    >
                        {{ props.row.fechaOrden }}

                    </b-table-column>
                    <b-table-column
                        v-slot="props"
                        label="Estado"
                        field="producto.descripcionCorta"
                        class="is-vcentered"
                        centered
                    >
                        {{ props.row.estadoOrden==1?"Entregado":"No entregado" }}

                    </b-table-column>
                    <b-table-column
                        v-slot="props"
                        label="Valor Total"
                        field="precio"
                        centered
                    >
                        ${{ props.row.valorTotal.toFixed(2) }}
                    </b-table-column>


                    <b-table-column field="actions" label="Acciones" v-slot="props">
                        <div class="buttons">
                        <b-button
                            rounded
                            type="is-primary"
                            icon-left="eye"
                            @click="verPedido(props.row.id)"
                        >
                        </b-button>
                        </div>
                    </b-table-column>
                    </b-table>


                    <!-- <div v-bind:class="{ 'entregado': pedido.estadoOrden==1,'noentregado':pedido.estadoOrden==0}" style="cursor: pointer;" @click="verPedido(pedido.id)">
                        <p class="subtitle">Fecha: {{pedido.fechaOrden}}</p>
                        <p class="subtitle">Estado: {{pedido.estadoOrden==1?"Entregado":"No entregado"}}</p>
                        <p class="subtitle">Valor Total: {{pedido.valorTotal}}</p>
                    </div> -->

                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            tablaPedidos:[]

        }
    },
    watch: {
  '$route' () {
    if(this.$route.query.pedido)
    {
        console.log("???? ~ file: PedidosUsuario.vue ~ line 91 ~ this.$route.query.pedido", this.$route.query.pedido)
        this.$buefy.dialog.alert({
            message:"Pedido realizado correctamente",
            title:"Pedido Completado",
            onConfirm:()=>{console.log("confirm ok......"); this.$router.push("/usuario/pedidos")}
            });

    }
  }
  },
  mounted(){
        console.log("Mounted pedidos ++++++++++++++++++")
        if(this.$route.query.pedido)
        {
            console.log("???? ~ file: PedidosUsuario.vue ~ line 100 ~ mounted ~ this.$route.query.pedido", this.$route.query.pedido)
            this.$buefy.dialog.alert({
            message:"Pedido realizado correctamente",
            title:"Pedido Completado",
            onConfirm:()=>{console.log("confirm ok......"); this.$router.push("/usuario/pedidos")}
            });
        }
        this.fetchOrdenesByUserId()
    },
    computed:{
        authenticated() {
            return this.$store.state.authenticated;
        },
        cartList(){
            return this.$store.state.cartList;
        },
        currentUser(){
            return this.$store.state.currentUser;
        }
    },
    methods:{
        verPedido(id)
        {
            console.log("???? ~ file: PedidosUsuario.vue ~ line 55 ~ id", id)
            this.$router.push("/usuario/pedidos/"+id)
        },
        fetchOrdenesByUserId()
        {
            try {
                fetch(process.env.MIX_API_URL+"api/ordenes/user/"+this.currentUser.id, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                })
                .then((response) => response.json())
                .then((data) => {
                    var resp = data;

                    if (data) {
                    this.tablaPedidos = data.respuesta;
                    console.log("tablaPedidos");
                    console.log(this.tablaPedidos);
                    } else {
                    //this.$router.push("/login")
                    this.tablaPedidos = [];
                    }
                });
            } catch (e) {

            }

        },
    }
}
</script>

<style>
.entregado
{
    background-color: rgb(38, 141, 47);
}
.noentregado
{
    background-color: rgb(150, 97, 87);
}
</style>
