// shims-vue.d.ts
declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const ComponentOptions: ComponentOptions;
  export default componentOptions;
}
