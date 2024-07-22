<template>
  <div id="app">
    <h1>Calcular Promedio de Notas Segun %</h1>
    <form @submit.prevent="calculatepromedioPonderado">
      <div class="notas">
        <label for="nota1">Nota 1 (35%):</label>
        <input type="number" step="0.1" v-model.number="ingreso.nota1" placeholder="Ingrese nota 1 en formato (1.0)" min="1" max="7" required>
      </div>
      <div class="notas">
        <label for="nota2">Nota 2 (35%):</label>
        <input type="number" step="0.1" v-model.number="ingreso.nota2" placeholder="Ingrese nota 2 en formato (1.0)" min="1" max="7" required>
      </div>
      <div class="notas">
        <label for="nota3">Nota 3 (30%):</label>
        <input type="number" step="0.1" v-model.number="ingreso.nota3" placeholder="Ingrese nota 3 en formato (1.0)" min="1" max="7" required>
      </div>
      <div class="notas">
        <label for="attendance">Porcentaje Asistencia (%):</label>
        <input type="number" v-model.number="asistencia" placeholder="Ingrese porcentajede Asistencia" min="0" max="100" required>
      </div>
      <button type="submit">Calcular Promedio </button>
    </form>
    <div v-if="promedioPonderado !== null" class="result">
      <p>Promedio : {{ promedioPonderado.toFixed(2) }}</p>
      <p v-if="aprobado">¡Aprobado!</p>
      <p v-else>Reprobado</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ingreso: {
        nota1: null,
        nota2: null,
        nota3: null
      },
      asistencia: null,
      promedioPonderado: null,
      aprobado: false
    };
  },
  methods: {
    calculatepromedioPonderado() {
      const { nota1, nota2, nota3 } = this.ingreso;
      const { asistencia } = this;

      this.promedioPonderado = (nota1 * 0.35) + (nota2 * 0.35) + (nota3 * 0.30);

      this.aprobado = this.promedioPonderado >= 4.0 && asistencia >= 80;
      
    }
  }
};
</script>
<style scoped>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}
h1 {
  text-align: center;
}
.notas {
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input[type="number"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
   border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px;
  margin-top: 10px;
  background-color: #000000;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
.result {
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
}

#app {
  max-width: 600px;
  margin: auto;
  padding: 1rem;
}

.grade-entry {
  margin-bottom: 1rem;
}

.result {
  margin-top: 1rem;
}

.result p {
  font-size: 1.2rem;
}
</style>
