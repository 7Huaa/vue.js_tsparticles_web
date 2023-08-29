
<style scoped>
.custom-button {
  background-color: black; 
  text-align: center;
  position: fixed;
  bottom:200px;
  left:700px;

}

button.custom-button img{
  width: 100px; /* 调整图像宽度 */
  height: auto; /* 保持比例 */
}


</style>

<template>
  <router-link to ='/second'>
    <button class="custom-button">
      <img src="@/assets/playicon03.png" alt="Image" />
    </button>
  </router-link>
   
    <!-- tsParticles Repository: https://github.com/matteobruni/tsparticles -->
    <!-- tsParticles Website: https://particles.js.org -->
    <Particles
      id="tsparticles"
      :options="options"
      :particlesInit="particlesInit"
    
    />
  </template>
  
  <script lang="ts">
  import type { Engine } from "tsparticles-engine";
  import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
import { RouterLink } from "vue-router";
  //import { loadFull } from "tsparticles"; // loads tsparticles
  
  export default {
    data() {
        return {
            // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
            // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
            options: {
                background: {
                    color: "#000", // this sets a background color for the canvas
                },
                fullScreen: {
                    enable: true,
                    zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
                },
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push", // adds the particles on click
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse", // repulse the particles on mouse hover
                        },
                    },
                    modes: {
                        push: {
                            quantity: 5, // number of particles to add on click
                        },
                        repulse: {
                            distance: 300, // distance of the particles from the cursor
                        },
                    },
                },
                particles: {
                    links: {
                        distance: 200,
                        enable: true, // enabling this will make the particles linked together
                    },
                    move: {
                        enable: true,
                        speed: { min: 1, max: 5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particle has its own value, it won't change over time by default
                    },
                    number: {
                        value: 50,
                    },
                    opacity: {
                        value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
                    },
                    size: {
                        value: { min: 1, max: 3 }, // let's randomize the particles size a bit
                    },
                },
            },
        };
    },
    methods: {
        async particlesInit(engine: Engine) {
            await loadSlim(engine);
            // await loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
        },
    },
    components: { RouterLink }
};
  </script>