import Vue from 'vue'
import Router from 'vue-router'

// Import components for each route
import Hello from '@/components/Hello'
import Incident from '@/components/Incident'  // New component for About page
import Risk from '@/components/Risk'  // New component for Contact page
import RiskAssesment from '@/components/RiskAssesment'  // New component for Contact page

Vue.use(Router)

export default new Router({
  base: '/http://localhost:8080/',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/incident',
      name: 'incident',
      component: Incident  // This will render the About component
    },
    {
      path: '/risk',
      name: 'risk',
      component: Risk ,
      props: route => ({
        id: route.params.id,
        publish: route.params.publish,
        ser: route.params.ser,
        cvss: route.params.cvss,
        max_version: route.params.max_version,
        min_version: route.params.min_version,
        product: route.params.product

      }) // This will render the Contact component
    },
    {
      path: '/assesment',
      name: 'assesment',
      component: RiskAssesment,
      props: route => ({
        id: route.params.id,
        publish: route.params.publish,
        ser: route.params.ser,
        cvss: route.params.cvss,
        max_version: route.params.max_version,
        min_version: route.params.min_version,
        product: route.params.product

      }) // This will render the Contact component  // This will render the Contact component
    }
  ]
})
