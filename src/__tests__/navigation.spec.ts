import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Home from '../views/Home.vue'
import Imprint from '../views/Imprint.vue'
import Privacy from '../views/Privacy.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/impressum', component: Imprint },
    { path: '/datenschutz', component: Privacy }
  ]
})

describe('Navigation Tests', () => {
  it('renders navbar with correct links', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router]
      }
    })
    
    expect(wrapper.text()).toContain('Joshua Maerker')
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('Services')
    expect(wrapper.text()).toContain('Kontakt')
  })

  it('renders footer with legal links', () => {
    const wrapper = mount(Footer, {
      global: {
        plugins: [router]
      }
    })
    
    expect(wrapper.text()).toContain('Impressum')
    expect(wrapper.text()).toContain('Datenschutzerklärung')
  })

  it('navigates to legal pages', async () => {
    await router.push('/impressum')
    expect(router.currentRoute.value.path).toBe('/impressum')
    
    await router.push('/datenschutz')
    expect(router.currentRoute.value.path).toBe('/datenschutz')
  })
})