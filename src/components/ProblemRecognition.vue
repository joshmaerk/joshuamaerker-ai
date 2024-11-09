<script setup lang="ts">
import { 
  NoSymbolIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  ArrowsRightLeftIcon,
  DocumentMagnifyingGlassIcon,
  UserGroupIcon
} from '@heroicons/vue/24/outline'

const problems = [
  {
    icon: ArrowsRightLeftIcon,
    title: 'Kommunikationslücken',
    description: 'Fehlende Verbindung zwischen IT und Fachbereich führt zu ineffizienten Umsetzungen'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Unklarer ROI',
    description: 'Hohe Investitionen ohne klare Rentabilitätsaussichten oder langfristige Strategie'
  },
  {
    icon: UserGroupIcon,
    title: 'Überforderung',
    description: 'Mitarbeiter fühlen sich durch mangelnde Change-Begleitung überfordert'
  },
  {
    icon: DocumentMagnifyingGlassIcon,
    title: 'Fehlende Expertise',
    description: 'Mangel an KI-spezifischem Fachwissen für fundierte Entscheidungen'
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'Risikomanagement',
    description: 'Unzureichende Bewertung von Risiken und Compliance-Anforderungen'
  },
  {
    icon: NoSymbolIcon,
    title: 'Gescheiterte Projekte',
    description: 'Erfolglose Implementierungsversuche durch mangelhafte Planung'
  }
]
</script>

<template>
  <section id="problem-recognition" class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-primary sm:text-4xl">
          Warum viele KI-Projekte scheitern
        </h2>
        <p class="mt-4 text-xl text-gray-600">
          Und wie Sie das verhindern
        </p>
      </div>

      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(problem, index) in problems" 
             :key="index"
             class="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <div class="flex items-start space-x-4">
            <component 
              :is="problem.icon"
              class="w-8 h-8 text-secondary flex-shrink-0"
            />
            <div>
              <h3 class="text-lg font-semibold text-primary mb-2">
                {{ problem.title }}
              </h3>
              <p class="text-gray-600">
                {{ problem.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <a href="#contact" 
           class="btn-section inline-flex items-center space-x-2"
           style="--btn-color: #E84C4A">
          <span>Jetzt Beratungsgespräch vereinbaren</span>
        </a>
      </div>
    </div>
  </section>
</template></content>