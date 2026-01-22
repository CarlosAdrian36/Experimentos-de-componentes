import './assets/main.css'

import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'froala-editor/css/froala_editor.pkgd.min.css'
import 'froala-editor/css/froala_style.min.css'

import 'froala-editor/js/froala_editor.min.js'

import 'froala-editor/js/plugins/align.min.js'
import 'froala-editor/js/plugins/lists.min.js'
import 'froala-editor/js/plugins/paragraph_format.min.js'
import 'froala-editor/js/plugins/table.min.js'

import 'froala-editor/js/plugins/image.min.js'
import 'froala-editor/js/plugins/link.min.js'

import VueFroala from 'vue-froala-wysiwyg'

import 'katex/dist/katex.min.css'
import { FontAwesomeIcon } from './common/fontawesome//fontawesome.ts'

const pinia = createPinia()
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(router)
app.use(VueFroala)
app.mount('#app')
