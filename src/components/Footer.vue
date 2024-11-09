<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Joshua Maerker</h3>
          <p class="text-gray-400">KI-Strategie & Unternehmensberatung</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Kontakt</h3>
          <p class="text-gray-400">Email: kontakt@joshuamaerker.com</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Rechtliches</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/impressum" class="text-gray-400 hover:text-white">Impressum & Datenschutz</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Joshua Maerker. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
</template>