export default {
    name: 'fundamentos',
    component: () => import('../layouts/FundamentosLayout.vue'),
    children: [
        {
            path: '',
            name: 'interpolacion',
            component: () => import('../views/plantilla/InterpolacionView.vue')
        },
        {
            path: 'html-puro',
            name: 'html-puro',
            component: () => import('../views/plantilla/HtmlPuroView.vue')
        },
        {
            path: 'vinculacion-atributos',
            name: 'vinculacion-atributos',
            component: () => import('../views/plantilla/VinculacionAtributosView.vue')
        },
        {
            path: 'expresiones-js',
            name: 'expresiones-js',
            component: () => import('../views/plantilla/ExpresionesJSView.vue')
        },
        {
            path: 'directivas',
            name: 'directivas',
            component: () => import('../views/plantilla/DirectivasView.vue')
        },
        {
            path: 'estado-reactivo',
            name: 'estado-reactivo',
            component: () => import('../views/reactividad/EstadoReactivoView.vue')
        },
        {
            path:'actualizacion-dom',
            name:'actualizacion-dom',
            component: () => import('../views/reactividad/ActualizacionDOMView.vue')
        },
        {
            path:'reactividad-profunda',
            name:'reactividad-profunda',
            component: () => import('../views/reactividad/ReactividadProfundaView.vue')
        },
        {
            path: 'variables-reactivas',
            name: 'variables-reactivas',
            component: () => import('../views/reactividad/VariablesReactivasView.vue')
        },
        {
            path: 'objetos-reactivos',
            name: 'objetos-reactivos',
            component: () => import('../views/reactividad/ObjetosReactivosView.vue')
        },
    ]
}