<script setup lang="ts">
import { 
  UserGroupIcon,
  AcademicCapIcon,
  ArrowPathIcon,
  ShieldExclamationIcon,
  DocumentCheckIcon,
  UserIcon
} from '@heroicons/vue/24/outline'
</script>

<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-primary sm:text-4xl">
          Effektives Change Management
        </h2>
        <p class="mt-4 text-xl text-gray-500">
          Ihr Team für die KI-Zukunft rüsten
        </p>
      </div>

      <div class="mt-16 max-w-3xl mx-auto">
        <div class="bg-gray-50 p-8 rounded-lg">
          <p class="text-center text-gray-600 mb-8">
            Begleitung und Schulung Ihres Teams – von den ersten Schritten bis zur eigenständigen Nutzung der KI-Lösungen.
          </p>
          
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <ShieldExclamationIcon class="h-8 w-8 text-secondary flex-shrink-0" />
              <span class="text-gray-700">Unsicherheit im Umgang mit neuen Technologien abbauen</span>
            </div>
            
            <div class="flex items-center space-x-4">
              <AcademicCapIcon class="h-8 w-8 text-secondary flex-shrink-0" />
              <span class="text-gray-700">Wissenslücken durch gezielte Schulungen schließen</span>
            </div>
            
            <div class="flex items-center space-x-4">
              <ArrowPathIcon class="h-8 w-8 text-secondary flex-shrink-0" />
              <span class="text-gray-700">Veränderungsprozesse aktiv gestalten und begleiten</span>
            </div>

            <div class="flex items-center space-x-4">
              <UserGroupIcon class="h-8 w-8 text-secondary flex-shrink-0" />
              <span class="text-gray-700">Teams bei der Transformation unterstützen</span>
            </div>
          </div>
          
          <div class="mt-8 text-center">
            <a href="#contact" class="inline-block bg-secondary text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Mehr über Change Management erfahren
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>