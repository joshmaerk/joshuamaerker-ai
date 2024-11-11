<script setup lang="ts">
import { ref, computed } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useRoute, useRouter } from 'vue-router'

const isOpen = ref(false)
const route = useRoute()
const router = useRouter()

const navigateTo = async (path: string, section?: string) => {
  isOpen.value = false
  
  if (route.path !== path) {
    await router.push(path)
  }
  
  if (section) {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

const isHomePage = computed(() => route.path === '/')
</script>

<template>
  <nav class="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
    <div class="container-custom">
      <div class="flex justify-between h-20">
        <div class="flex items-center">
          <button @click="navigateTo('/')" class="flex items-center space-x-3">
            <img src="../assets/Logo.svg" alt="Joshua Maerker Logo" class="h-12 w-auto" />
           <!-- <span class="text-xl font-bold text-primary">Joshua Maerker</span>  --->
          </button>
        </div>
        
        <div class="hidden md:flex items-center space-x-8">
          <template v-if="isHomePage">
            <button @click="navigateTo('/', 'home')" 
                    class="text-primary hover:text-secondary transition-colors">
              Home
            </button>
            <button @click="navigateTo('/', 'problem-recognition')" 
                    class="text-primary hover:text-secondary transition-colors">
              Probleme & Lösungen
            </button>
            <button @click="navigateTo('/', 'services')" 
                    class="text-primary hover:text-secondary transition-colors">
              Services
            </button>
            <button @click="navigateTo('/', 'about')" 
                    class="text-primary hover:text-secondary transition-colors">
              Über mich
            </button>
            <button @click="navigateTo('/', 'case-studies')" 
                    class="text-primary hover:text-secondary transition-colors">
              Referenzen
            </button>
            <button @click="navigateTo('/', 'contact')" 
                    class="btn-section">
              Kontakt
            </button>
          </template>
          <template v-else>
            <button @click="navigateTo('/')" 
                    class="text-primary hover:text-secondary transition-colors">
              Zurück zur Startseite
            </button>
          </template>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="isOpen = !isOpen" class="text-primary">
            <Bars3Icon v-if="!isOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <div v-if="isOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 bg-white">
        <template v-if="isHomePage">
          <button @click="navigateTo('/', 'home')" 
                  class="block w-full text-left px-3 py-2 text-primary hover:text-secondary transition-colors">
            Home
          </button>
          <button @click="navigateTo('/', 'problem-recognition')" 
                  class="block w-full text-left px-3 py-2 text-primary hover:text-secondary transition-colors">
            Probleme & Lösungen
          </button>
          <button @click="navigateTo('/', 'services')" 
                  class="block w-full text-left px-3 py-2 text-primary hover:text-secondary transition-colors">
            Services
          </button>
          <button @click="navigateTo('/', 'about')" 
                  class="block w-full text-left px-3 py-2 text-primary hover:text-secondary transition-colors">
            Über mich
          </button>
          <button @click="navigateTo('/', 'case-studies')" 
                  class="block w-full text-left px-3 py-2 text-primary hover:text-secondary transition-colors">
            Referenzen
          </button>
          <button @click="navigateTo('/', 'contact')" 
                  class="block w-full text-left px-3 py-2 text-primary hover:text-secondary transition-colors">
            Kontakt
          </button>
        </template>
        <template v-else>
          <button @click="navigateTo('/')" 
                  class="block w-full text-left px-3 py-2 text-primary hover:text-secondary transition-colors">
            Zurück zur Startseite
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>