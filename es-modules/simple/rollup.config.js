import VuePlugin from 'rollup-plugin-vue'

export default {
  output:{
    format: "esm",
  },
  plugins: [VuePlugin(/* VuePluginOptions */)]
}