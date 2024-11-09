<script setup lang="ts">
import { ref } from 'vue'

const isVisible = ref(true)
const hasConsent = ref(localStorage.getItem('cookieConsent') === 'true')

const acceptAll = () => {
  localStorage.setItem('cookieConsent', 'true')
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'cookieConsentAccepted' })
  isVisible.value = false
  hasConsent.value = true
  initializeAnalytics()
}

const declineAll = () => {
  localStorage.setItem('cookieConsent', 'false')
  isVisible.value = false
  hasConsent.value = false
}

const initializeAnalytics = () => {
  // Initialize Google Analytics when consent is given
  if (hasConsent.value) {
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    gtag('js', new Date())
    gtag('config', 'G-XXXXXXXXXX') // Replace with your GA4 measurement ID
  }
}
</script>

<template>
  <div v-if="isVisible" class="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 md:p-6">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="text-gray-700">
          <p class="mb-2">
            Diese Website verwendet Cookies und ähnliche Technologien, um Ihr Nutzererlebnis zu verbessern 
            und uns bei der Optimierung unserer Website zu unterstützen.
          </p>
          <p class="text-sm">
            Weitere Informationen finden Sie in unserer 
            <router-link to="/datenschutz" class="text-secondary hover:text-blue-700">
              Datenschutzerklärung
            </router-link>.
          </p>
        </div>
        <div class="flex gap-4">
          <button 
            @click="declineAll"
            class="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
          >
            Ablehnen
          </button>
          <button 
            @click="acceptAll"
            class="px-6 py-2 bg-secondary text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  </div>
</template>