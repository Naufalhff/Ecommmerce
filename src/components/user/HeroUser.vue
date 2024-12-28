<template>
  <!-- Hero Section -->
  <section class="bg-gray-50 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center justify-between">
        <!-- Left content -->
        <div class="lg:w-1/2 mb-8 lg:mb-0">
          <h1 class="text-5xl font-bold mb-4 leading-tight text-gray-800">
            Discover Your Style with Our Collection
          </h1>
          <p class="text-gray-600 mb-8 max-w-lg">
            Explore our wide range of products from electronics to fashion.
            Quality meets affordability in our carefully curated selection.
          </p>
          <button
            class="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition duration-300 w-full sm:w-auto"
          >
            Shop Now!
          </button>

          <!-- Stats -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10 sm:mt-20">
            <div class="text-center">
              <h3 class="text-3xl font-bold mb-1 text-gray-800">20+</h3>
              <p class="text-gray-600 text-sm">Categories</p>
            </div>
            <div class="text-center">
              <h3 class="text-3xl font-bold mb-1 text-gray-800">1000+</h3>
              <p class="text-gray-600 text-sm">Happy Customers</p>
            </div>
            <div class="text-center sm:col-span-1 col-span-2">
              <h3 class="text-3xl font-bold mb-1 text-gray-800">2000+</h3>
              <p class="text-gray-600 text-sm">High-Quality Products</p>
            </div>
          </div>
        </div>

        <!-- Right image -->
        <div class="lg:w-1/2 relative">
          <img
            src="@/assets/images/MenAndwomen.png"
            alt="featured products"
            class="w-3/4 h-auto rounded-lg mx-auto"
          />
          <!-- Decorative Elements -->
          <div class="absolute -top-4 -right-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#1F2937">
              <path d="M12 0L14 8L22 12L14 16L12 24L10 16L2 12L10 8L12 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!-- Features -->
    <div class="bg-white py-8 px-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="flex flex-col items-center text-center p-6 hover:shadow-lg rounded-xl transition duration-300"
          >
            <div class="mb-4 text-gray-800" v-html="feature.icon"></div>
            <h3 class="text-sm font-bold mb-2 tracking-wider text-gray-800">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600 text-sm">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><circle cx="12" cy="12" r="10"></circle><path d="m16 12-4-4-4 4M12 8v8"></path></svg>`,
          title: "QUALITY PRODUCTS",
          description:
            "Carefully selected products from top manufacturers worldwide, ensuring the best quality for our customers",
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path><path d="M18 12c-1.1 0-2 .9-2 2s.9 2 2 2h4v-4h-4z"></path></svg>`,
          title: "FAST DELIVERY",
          description:
            "Quick and reliable shipping services to get your products to your doorstep as soon as possible",
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
          title: "SECURE CHECKOUT",
          description:
            "Safe and secure payment processing with multiple payment options for your convenience",
        },
      ],
      products: [],
    };
  },
};
</script>
