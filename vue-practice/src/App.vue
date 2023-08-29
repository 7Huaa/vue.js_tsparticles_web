<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import CustomParticles from './components/practice.vue'

</script>

<template>

  <main> 
    <div class="welcome">
      Welcome
    </div>
    <CustomParticles />
  </main>
</template>



<style scoped>
@import url("common/font/font.css");
  .welcome {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh; /* 使该区域撑满整个视口高度 */
   font-size: 10rem; /* 调整字体大小 */
   line-height: 1;
   margin-left: 300px;
   bottom:300px;
   color:white;
   font-weight: bold;
   font-family: 'ChakraPetch';
  }

body {
  margin: 0;
  padding: 0;
}
</style>
