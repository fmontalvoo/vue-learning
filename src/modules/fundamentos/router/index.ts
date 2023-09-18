export default {
    name: 'fundamentos',
    component: () => import('../layouts/FundamentosLayout.vue'),
    children: [
        {
            path: '',
            name: 'interpolacion',
            component: () => import('../views/InterpolacionView.vue')
        },
        {
            path: 'html-puro',
            name: 'html-puro',
            component: () => import('../views/HtmlPuroView.vue')
        },
        {
            path: 'vinculacion-atributos',
            name: 'vinculacion-atributos',
            component: () => import('../views/VinculacionAtributosView.vue')
        },
        {
            path: 'expresiones-js',
            name: 'expresiones-js',
            component: () => import('../views/ExpresionesJSView.vue')
        },
        {
            path: 'directivas',
            name: 'directivas',
            component: () => import('../views/DirectivasView.vue')
        }
    ]
}