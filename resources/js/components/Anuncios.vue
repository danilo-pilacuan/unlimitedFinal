<template>
  <div>
    <div class="has-text-centered">
      <h1 class="title">Anuncios</h1>
    </div>
    <div class="has-text-left">
       <b-button type="is-primary" @click="addFunction">Registrar</b-button>
    </div>
    <hr />
    <div class="container">
      <div class="block">
        <b-table
          :data="tablaDatos"
          :bordered="true"
          :striped="true"
          :narrowed="true"
          :hoverable="false"
          :loading="false"
          :focusable="false"
          :mobile-cards="false"
          :searchable="true"
          :paginated="true"
          :per-page="20"
        >
          <b-table-column
            v-slot="props"
            label="Descripción"
            field="descripcionCorta"
            searchable
          >
            {{ props.row.descripcionCorta }}
          </b-table-column>
          <b-table-column
            v-slot="props"
            label="Foto"
            field="urlFoto"
            searchable
          >
            {{ props.row.urlFoto }}
          </b-table-column>
          <b-table-column
            v-slot="props"
            label="Acción"
            field="urlAccion"
            searchable
          >
            {{ props.row.urlAccion }}
          </b-table-column>
          <b-table-column
            v-slot="props"
            label="Estado"
            field="estado"
            searchable
          >
            {{ props.row.estado?"Activo":"Inactivo" }}
          </b-table-column>

          <b-table-column field="actions" label="Acciones" v-slot="props">
            <div class="buttons">
            <!-- <b-button
                rounded
                type="is-link"
                icon-left="eye"
                @click="veranuncio(props.row)"
              >
              </b-button> -->


              <b-button
                rounded
                type="is-warning"
                icon-left="pencil"
                @click="editFunction(props.row)"
              >
              </b-button>
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
    </div>

    <b-modal v-model="showModalCreateEdit">
      <form @submit.prevent="submit">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Registrar Anuncio</p>
            <button type="button" class="delete" @click="cancelForm" />
          </header>
          <section class="modal-card-body">
            <div class="columns">
              <div class="column">
                <b-field label="Descripción corta">
                  <b-input v-model="anuncio.descripcionCorta" maxlength="50"></b-input>
                </b-field>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <b-field label="Descripción Detallada">
                  <b-input v-model="anuncio.descripcionLarga" type="textarea"></b-input>
                </b-field>
              </div>
            </div>


            <div class="columns">
              <div class="column">
                <b-field label="Estado">
                    <b-select placeholder="Seleccionar Estado" v-model="anuncio.estado">
                        <option value="1">Activo</option>
                        <option value="0">Inactivo</option>
                    </b-select>
                </b-field>
              </div>
            </div>


          </section>
          <footer class="modal-card-foot">
            <div class="columns">
              <div class="column">
                <b-button
                  type="is-primary"
                  v-show="isEdit"
                  @click="submit"
                  label="Actualizar"
                />
                <b-button
                  type="is-primary"
                  v-show="isAdd"
                  @click="submit"
                  label="Registrar"
                />
              </div>
              <div class="column">
                <b-button type="is-danger" @click="cancelForm" label="Cancelar" />
              </div>
            </div>
          </footer>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      tablaDatos:[],
      showModalCreateEdit: false,
      isEdit:false,
      isAdd:false,
      anuncio:{
        id: 1,
        descripcionCorta: "",
        descripcionLarga: "",
        urlFoto: "C:",
        urlAccion: "https://",
        estado: 1,
      }
    };
  },
  mounted() {
    this.fetchDatos();
  },
  methods: {
    cancelForm() {
      this.anuncio={
        id: 1,
        descripcionCorta: "",
        descripcionLarga: "",
        urlFoto: "C:",
        urlAccion: "https://",
        estado: 1,
      }

      this.showModalCreateEdit=false;
      //this.$buefy.dialog.alert("Usuario agregado correctamente");
    },
    addFunction()
    {
        this.showModalCreateEdit=true
        this.isAdd=true
        this.isEdit=false
    },
    confirmDelete(data)
    {
        this.$buefy.dialog.confirm({
            message: 'Está seguro de eliminar?',
            onConfirm: () => this.deleteFunction(data)
        })
    },
    deleteFunction(data)
    {
        fetch(process.env.MIX_API_URL+"api/anuncios/"+data.id, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            })
                .then((response) => response.json())
                .then((data) => {
                var resp = data.message;
                console.log(resp);
                    this.$buefy.dialog.alert("Anuncio eliminado correctamente");

                });

                this.fetchDatos()
                this.cancelForm()
    },
    editFunction(data)
    {
        this.anuncio=data

        this.showModalCreateEdit=true
        this.isAdd=false
        this.isEdit=true
    },
    submit()
    {
        if(this.isAdd)
        {
            fetch(process.env.MIX_API_URL+"api/anuncios", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(this.anuncio)
            })
                .then((response) => response.json())
                .then((data) => {
                var resp = data.message;
                console.log(resp);
                    this.$buefy.dialog.alert("Anuncio registrado correctamente");

                });
                this.cancelForm()
                this.fetchDatos()

        }
        if(this.isEdit)
        {
            fetch(process.env.MIX_API_URL+"api/anuncios/"+this.anuncio.id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(this.anuncio)
            })
                .then((response) => response.json())
                .then((data) => {
                var resp = data.message;
                console.log(resp);
                    this.$buefy.dialog.alert("Anuncio editado correctamente");

                });

                this.fetchDatos()
                this.cancelForm()
        }
    },
    fetchDatos() {
      try {
        fetch(process.env.MIX_API_URL+"api/anuncios", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        })
          .then((response) => response.json())
          .then((data) => {
            var resp = data;

            if (data) {
              this.tablaDatos = data.respuesta;
              console.log("this.tablaDatos");
              console.log(this.tablaDatos);
            } else {
              //this.$router.push("/login")
              this.tablaDatos = [];
            }
          });
      } catch (e) {

      }
    },
  },
};
</script>
