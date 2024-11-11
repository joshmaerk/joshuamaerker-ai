<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-sm">
          <h3 class="text-sm font-bold mb-4">Adresse</h3>
          <p class="text-gray-400">Joshua Märker | IT-Diensleistungen</p>
          <p class="text-gray-400">Harrauer Straße 29b</p>
          <p class="text-gray-400">4150 Rohrbach-berg</p>
          <p class="text-gray-400">Österreich</p>
        </div>
        <div class="text-sm">
          <h3 class="text-sm font-bold mb-4">Folgen Sie uns</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="https://facebook.com" target="_blank" class="hover:underline">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" class="hover:underline">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" class="hover:underline">LinkedIn</a></li>
            <li><a href="https://instagram.com" target="_blank" class="hover:underline">Instagram</a></li>
          </ul>
        </div>
        <div class="text-sm">
          <h3 class="text-sm font-semibold mb-4">Kontakt</h3>
          <p class="text-gray-400">Email: <a href="mailto:mail@joshuamaerker.com" class="hover:underline">mail@joshuamaerker.com</a></p>
          <p class="text-gray-400">Telefon: <a href="tel:+491234567890" class="hover:underline">+49 123 456 7890</a></p>

          <h3 class="text-sm font-semibold mb-4 mt-8">Rechtliches</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/impressum" class="text-gray-400 hover:text-white">Impressum &
                Datenschutz</router-link>
            </li>
          </ul>


        </div>
      </div>
      <div class="text-sm">
        <p class="mt-8">&copy; {{ new Date().getFullYear() }} Joshua Maerker. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
</template>