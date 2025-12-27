import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

declare module "vue" {
  export interface ComponentCustomProperties {
    /** a custom directive */
    vLoading: any
  }
}