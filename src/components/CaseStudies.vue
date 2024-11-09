<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <section id="case-studies" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-primary sm:text-4xl">
          Erfolgreiche KI-Implementierungen
        </h2>
        <p class="mt-4 text-xl text-gray-600">
          Das haben andere Unternehmen erreicht
        </p>
      </div>

      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-gray-50 rounded-lg p-6 shadow-md">
          <div class="flex items-center gap-2 mb-4">
            <CheckCircleIcon class="w-6 h-6 text-secondary" />
            <h3 class="text-xl font-semibold text-primary">Produktionsoptimierung</h3>
          </div>
          <p class="text-gray-600 mb-4">
            30% Effizienzsteigerung durch KI-gestützte Prozessoptimierung in der Fertigung
          </p>
          <p class="text-sm text-gray-500">Maschinenbauunternehmen, 500+ Mitarbeiter</p>
        </div>

        <div class="bg-gray-50 rounded-lg p-6 shadow-md">
          <div class="flex items-center gap-2 mb-4">
            <CheckCircleIcon class="w-6 h-6 text-secondary" />
            <h3 class="text-xl font-semibold text-primary">Kundenservice</h3>
          </div>
          <p class="text-gray-600 mb-4">
            Implementierung eines KI-Chatbots mit 85% Erstlösungsquote
          </p>
          <p class="text-sm text-gray-500">E-Commerce Unternehmen, 200+ Mitarbeiter</p>
        </div>

        <div class="bg-gray-50 rounded-lg p-6 shadow-md">
          <div class="flex items-center gap-2 mb-4">
            <CheckCircleIcon class="w-6 h-6 text-secondary" />
            <h3 class="text-xl font-semibold text-primary">Datenanalyse</h3>
          </div>
          <p class="text-gray-600 mb-4">
            Vorhersagegenauigkeit von 94% bei der Bedarfsplanung durch ML-Modelle
          </p>
          <p class="text-sm text-gray-500">Logistikunternehmen, 1000+ Mitarbeiter</p>
        </div>
      </div>
    </div>
  </section>
</template>