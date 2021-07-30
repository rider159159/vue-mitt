<template>
  <div>
    <ul>
      <li>
        <button type="button" @click="routerPush('/')">前往 page1</button>
      </li>
      <li>
        <button type="button" @click="routerPush('/page2')">前往 page2</button>
      </li>
    </ul>
    <button type="button" @click="emitt">測試emitt</button>
  </div>
</template>

<script>
import emitter from "../assets/js/methods/emitter";


export default {
  name: "navbar",
  methods: {
    routerPush(item) {
      this.$router.push(item);
    },
    emitt() {
      emitter.emit("test");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
