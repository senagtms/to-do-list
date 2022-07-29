<template>


<Navbar/>

  <router-view/>
</template>
<script>

import Navbar from "./components/Navbar.vue";


export default{
  components:{
    Navbar,

}
}



</script>





<style>

body{
  background-color:rgb(27, 45, 63);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin:auto;
  max-width: 800px;



}

</style>
