<template>
	<div @click="changeName()">
		Hello, {{name}}.
	</div>
</template>

<script>
var doc = document.currentScript.ownerDocument;
var template = doc.querySelector("template");

Vue.component("my-component", {
  template,
  data() {
    return {
      name: "world"
    };
  },
  methods: {
    changeName() {
      this.name = "foobar";
    }
  }
});
</script>

<style lang="less" scoped>
div {
  font-weight: bold;
  color: red;
}
</style>