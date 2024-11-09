import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Contact from '../components/Contact.vue'
import Hero from '../components/Hero.vue'
import Services from '../components/Services.vue'

describe('Component Tests', () => {
  it('renders hero section with CTA', () => {
    const wrapper = mount(Hero)
    expect(wrapper.text()).toContain('KI-Potenziale entfalten')
    expect(wrapper.text()).toContain('Jetzt Erstberatung vereinbaren')
  })

  it('renders services section with all service cards', () => {
    const wrapper = mount(Services)
    expect(wrapper.text()).toContain('KI-Strategie')
    expect(wrapper.text()).toContain('Prozessoptimierung')
    expect(wrapper.text()).toContain('Change Management')
  })

  it('handles contact form submission', async () => {
    const wrapper = mount(Contact)
    
    await wrapper.find('input[type="email"]').setValue('test@example.com')
    await wrapper.find('input[type="text"]').setValue('Test User')
    await wrapper.find('textarea').setValue('Test message')
    
    await wrapper.find('form').trigger('submit')
    
    // Wait for form submission simulation
    await new Promise(resolve => setTimeout(resolve, 1100))
    
    expect(wrapper.text()).toContain('Vielen Dank für Ihre Nachricht')
  })
})