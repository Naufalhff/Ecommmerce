<template>
  <section class="max-w-7xl mx-auto px-4 py-16">
    <div class="bg-gray-100 rounded-xl p-8">
      <h2 class="text-3xl font-bold text-center mb-12">
        BROWSE BY DRESS STYLE
      </h2>

      <div class="grid grid-cols-2 gap-4">
        <!-- Casual Style -->
        <div class="relative group cursor-pointer overflow-hidden rounded-lg">
          <img
            src="@/assets/images/casual.png"
            alt="Casual Style"
            class="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
          >
            <span class="text-white text-2xl font-semibold">Casual</span>
          </div>
        </div>

        <!-- Formal Style -->
        <div class="relative group cursor-pointer overflow-hidden rounded-lg">
          <img
            src="@/assets/images/MenAndwomen.png"
            alt="Formal Style"
            class="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
          >
            <span class="text-white text-2xl font-semibold">Formal</span>
          </div>
        </div>

        <!-- Party Style -->
        <div class="relative group cursor-pointer overflow-hidden rounded-lg">
          <img
            src="@/assets/images/party.png"
            alt="Party Style"
            class="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
          >
            <span class="text-white text-2xl font-semibold">Party</span>
          </div>
        </div>

        <!-- Gym Style -->
        <div class="relative group cursor-pointer overflow-hidden rounded-lg">
          <img
            src="@/assets/images/gym.png"
            alt="Gym Style"
            class="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
          >
            <span class="text-white text-2xl font-semibold">Gym</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BrowseStyle",
};
</script>
