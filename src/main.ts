import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/**
 *  createApp permite que varias aplicaciones Vue coexistan en la misma página, 
 *  cada una con su propio ámbito de configuración y recursos globales
 */
const app = createApp(App) // Instancia de la aplicacion

// Controlador de errores que captura los errores de todos los componentes
app.config.errorHandler = (err) => {
    console.error('errorHandler', err)
}

app.use(router)

// Aplicar todas las configuraciones de la aplicación antes de montarla
app.mount('#app')
