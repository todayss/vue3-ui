import { App, Plugin } from 'vue'
export type SFCWithInstall<T> = T & Plugin 

export const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
  ;(main as SFCWithInstall<T>).install = (app: App) => {
    const plugins = [main, ...Object.values(extra ?? {})]
    for(let comp of plugins) {
      app.component(comp.name, main)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;(main as any)[key] = comp
    }
  }
  return main as SFCWithInstall<T> & E
}

