<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center">
    <div class="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
        alt="AI Background"
        class="w-full h-full object-cover opacity-10"
      />
    </div>
    <div class="relative z-10 container-custom">
      <div class="text-center max-w-4xl mx-auto">
        <div class="mb-12">
          <img src="/logo.png" alt="Joshua Maerker Logo" class="h-32 w-auto mx-auto" />
        </div>
        <h1 class="mb-6">
          <span class="block">KI-Potenziale entfalten:</span>
          <span class="block text-secondary">Maßgeschneiderte KI-Strategie</span>
          <span class="block">für nachhaltigen Erfolg!</span>
        </h1>
        <p class="text-lead text-gray-600 mb-12 max-w-3xl mx-auto">
          Ihr Brückenbauer zwischen IT und Fachabteilung für erfolgreiche KI-Integration in Ihrem Unternehmen.
        </p>
        <a href="#contact" class="btn-section inline-flex items-center">
          Jetzt Erstberatung vereinbaren
          <ArrowRightIcon class="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  </section>
</template>