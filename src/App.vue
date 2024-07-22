<template>
    <div id="nav">    
        <router-link to="/">Promedio </router-link> |
        <router-link to="/FormRegistro">Fromulario de Registro</router-link>
    </div>
    <router-view />
</template>


<style>
    .router-link{
         padding: 10px;
  margin-top: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
    }
</style>
