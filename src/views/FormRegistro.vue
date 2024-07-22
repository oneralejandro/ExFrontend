<template>
  <div id="app">
    <h1>Formulario de Registro</h1>
    <form @submit.prevent="validarFormulario">
      <div class="formularioRegistro">
        <label for="name">Nombre:</label>
        <input type="text" v-model="nombre" required>
      </div>
      <div class="formularioRegistro">
        <label for="correo">Correo:</label>
        <input type="email" v-model="correo" @input="validarCorreo" required>
        <span v-if="errorCorreo" class="error">{{ errorCorreo }}</span>
      </div>
      <div class="formularioRegistro">
        <label for="contraseña">Contraseña:</label>
        <input type="password" v-model="contraseña" required>
      </div>
      <div class="formularioRegistro">
        <label for="confirmaContraseña">Repetir Contraseña:</label>
        <input type="password" v-model="confirmaContraseña" @input="validaContraseña" required>
        <span v-if="errorContraseña" class="error">{{ errorContraseña }}</span>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      correo: '',
      contraseña: '',
      confirmaContraseña: '',
      errorCorreo: '',
      errorContraseña: ''
    };
  },
  methods: {
    validarCorreo() {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(this.correo)) {
        this.errorCorreo = 'Favor ingrese un correo válido. EJ: Iplacex@iplacex.cl.';
      } else {
        this.errorCorreo = '';
      }
    },
    validaContraseña() {
      if (this.contraseña !== this.confirmaContraseña) {
        this.errorContraseña = 'Las contraseñas no coinciden.';
      } else {
        this.errorContraseña = '';
      }
    },
    validarFormulario() {
      this.validarCorreo();
      this.validaContraseña();
      
      if (!this.errorCorreo && !this.errorContraseña) {
        alert('El registro se ha realizado correctamente');
      }
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
.formularioRegistro {
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px;
  background-color: #000000;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
}
button:hover {
  background-color: #0056b3;
}
.error {
  color: red;
  font-size: 15px;
}
</style>
