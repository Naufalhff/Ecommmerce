<template>
  <div>
    <!-- Top Announcement Banner -->
    <div class="relative bg-black text-white text-center text-sm py-2">
      <p>
        Sign up and get 20% off to your first order.
        <a href="#" class="underline hover:text-gray-300">Sign Up Now</a>
      </p>
      <button
        @click="closeBanner"
        class="absolute right-4 top-2 text-white hover:text-gray-300"
      >
        ×
      </button>
    </div>

    <!-- Main Navigation -->
    <nav class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="/" class="font-bold text-xl">SHOP.CO</a>
          </div>

          <!-- Navigation Links -->
          <div class="hidden md:flex items-center space-x-8">
            <div class="relative group">
              <button class="flex items-center text-gray-700 hover:text-black">
                Shop
                <svg
                  class="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <!-- Dropdown Menu -->
              <div
                class="absolute hidden group-hover:block w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >Casual</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >Formal</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >Party</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >Gym</a
                >
              </div>
            </div>
            <a href="#" class="text-gray-700 hover:text-black">On Sale</a>
            <router-link
              :to="{ name: 'NewArrivals' }"
              class="text-gray-700 hover:text-black"
            >
              New Arrivals
            </router-link>

            <a href="#" class="text-gray-700 hover:text-black">Brands</a>
          </div>

          <!-- Search Bar -->
          <div class="flex-1 max-w-lg mx-8">
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                class="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md leading-5 bg-gray-100 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-gray-300 transition duration-150 ease-in-out text-sm"
                placeholder="Search for products..."
              />
            </div>
          </div>

          <!-- Right Icons -->
          <div class="flex items-center space-x-6">
            <button class="text-gray-700 hover:text-black">
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
            <button class="text-gray-700 hover:text-black">
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button
              @click="toggleMobileMenu"
              class="text-gray-700 hover:text-black"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            class="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50"
            >Shop</a
          >
          <a
            href="#"
            class="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50"
            >On Sale</a
          >
          <a
            href="#"
            class="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50"
            >New Arrivals</a
          >
          <a
            href="#"
            class="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50"
            >Brands</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
      showBanner: true,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeBanner() {
      this.showBanner = false;
    },
  },
};
</script>
