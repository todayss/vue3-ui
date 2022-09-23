declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare function defineOptions(arg:Record<string, any>)