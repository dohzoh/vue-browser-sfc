<template>
	<div @click="changeName()">
		Hello, {{name}}.
	</div>

  <style>
    div {
      font-weight: bold;
      color: red;
    }
  </style>  
</template>

<script>
define(['Vue'], (Vue) =>{

  return Vue.extend({
    template: template,
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

});
</script>

