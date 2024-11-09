<script setup lang="ts">
import { ref } from 'vue'

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

const formData = ref<FormData>({
  name: '',
  email: '',
  company: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  isSubmitting.value = true
  submitError.value = ''
  
  try {
    // Here you would typically send the data to your backend
    // For now, we'll simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    submitSuccess.value = true
    formData.value = { name: '', email: '', company: '', message: '' }
  } catch (error) {
    submitError.value = 'Es gab einen Fehler beim Senden. Bitte versuchen Sie es später erneut.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-primary sm:text-4xl">
          Kontakt
        </h2>
        <p class="mt-4 text-xl text-gray-500">
          Lassen Sie uns gemeinsam Ihre KI-Strategie entwickeln
        </p>
      </div>

      <div class="mt-12 max-w-lg mx-auto">
        <div v-if="submitSuccess" class="mb-8 p-4 bg-green-100 text-green-700 rounded-md">
          Vielen Dank für Ihre Nachricht! Ich werde mich zeitnah bei Ihnen melden.
        </div>

        <form v-if="!submitSuccess" @submit="handleSubmit" class="grid grid-cols-1 gap-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name *</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary"
            >
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email *</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary"
            >
          </div>

          <div>
            <label for="company" class="block text-sm font-medium text-gray-700">Unternehmen</label>
            <input 
              type="text" 
              id="company" 
              v-model="formData.company"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary"
            >
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Ihre Nachricht *</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              rows="4" 
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary"
              placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Anfrage..."
            ></textarea>
          </div>

          <div v-if="submitError" class="text-red-600 text-sm">
            {{ submitError }}
          </div>

          <div>
            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting">Wird gesendet...</span>
              <span v-else>Nachricht senden</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>