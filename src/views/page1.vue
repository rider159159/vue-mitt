<template>
  <Navbar></Navbar>
  <div>page1</div>
</template>

<script>
import Navbar from "../components/Navbar";
import emitter from "../assets/js/methods/emitter";


export default {
  components: {
    Navbar,
  },
  mounted() {
    emitter.on("test", () => {
      console.log("測試測試");
    });
  },
  unmounted() {
    emitter.off("test")
  },
};
</script>
