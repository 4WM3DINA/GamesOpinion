<template>
  <div>
    <h1 class="my-5">Editando la opinión del Juego:</h1>

    <div class="form w-50 m-auto">
      <div>
        <label>Nombre:</label>
        <input class="form-control" v-model="opinion.usuario.nombre" />
      </div>
      <div>
        <label>Opiniones:</label>
        <textarea class="form-control" v-model="opinion.descripcion"></textarea>
      </div>
      <div>
        <button
          class="btn btn-primary mt-3 mx-4 border-2 border-dark"
          @click="$router.push('/administracion')"
        >
          🔙 Regresar
        </button>
        <button
          class="btn btn-info mt-3 mx-4 border-2 border-dark"
          @click="modificarOpinion"
        >
          💾 Guardar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["id"],
  methods: {
    ...mapActions(["modificar_Opinion"]),
    modificarOpinion() {
      const { opinion } = this;
      this.modificar_Opinion(opinion);
      this.$router.push("/administracion");
    },
  },
  computed: {
    ...mapGetters(["getOpinionById"]),
    opinion() {
      const { id } = this;
      return {
        ...this.getOpinionById(+id),
        usuario: { ...this.getOpinionById(+id).usuario },
      };
    },
  },
};
</script>