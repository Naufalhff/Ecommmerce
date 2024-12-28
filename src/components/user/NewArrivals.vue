<template>
  <div class="max-w-7xl mx-auto px-4 py-5">
    <!-- New Arrivals Section -->
    <section id="new-arrival-section" class="mb-16">
      <h2 class="text-3xl font-bold text-center mb-12">NEW ARRIVALS</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- New Arrivals Products -->
        <div
          v-for="product in newArrivals"
          :key="product.id"
          class="flex flex-col items-center cursor-pointer"
          @click="goToDetail(product.id)"
        >
          <!-- Card -->
          <div
            class="bg-gray-100 rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div
              class="bg-transparent w-full max-w-[10rem] sm:max-w-[20rem] mx-auto h-64 flex justify-center items-center"
            >
              <img
                :src="product.image"
                :alt="product.title"
                class="object-contain w-full h-full rounded-lg"
              />
            </div>
          </div>
          <!-- Product Info -->
          <h3 class="font-medium mt-4 mb-2 text-center">{{ product.title }}</h3>
          <div class="flex items-center justify-center mb-2">
            <div class="flex text-yellow-400">
              <span v-for="star in 5" :key="star" class="text-lg"> ★ </span>
            </div>
            <span class="text-gray-500 ml-2">4.5/5</span>
          </div>
          <div class="text-lg font-bold text-center">${{ product.price }}</div>
        </div>
      </div>
      <div class="text-center mt-8">
        <button
          class="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition duration-300 w-full sm:w-auto"
        >
          View All
        </button>
      </div>
    </section>

    <!-- Top Selling Section -->
    <section>
      <h2 class="text-3xl font-bold text-center mb-12">TOP SELLING</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- New Arrivals Products -->
        <div
          v-for="product in topSelling"
          :key="product.id"
          class="flex flex-col items-center cursor-pointer"
          @click="goToDetail(product.id)"
        >
          <!-- Card -->
          <div
            class="bg-gray-100 rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div
              class="bg-transparent w-full max-w-[10rem] sm:max-w-[20rem] mx-auto h-64 flex justify-center items-center"
            >
              <img
                :src="product.image"
                :alt="product.title"
                class="object-contain w-full h-full rounded-lg"
              />
            </div>
          </div>
          <!-- Product Info -->
          <h3 class="font-medium mt-4 mb-2 text-center">{{ product.title }}</h3>
          <div class="flex items-center justify-center mb-2">
            <div class="flex text-yellow-400">
              <span v-for="star in 5" :key="star" class="text-lg"> ★ </span>
            </div>
            <span class="text-gray-500 ml-2">4.5/5</span>
          </div>
          <div class="text-lg font-bold text-center">${{ product.price }}</div>
        </div>
      </div>
      <div class="text-center mt-8">
        <button
          class="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition duration-300 w-full sm:w-auto"
        >
          View All
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductSections",
  data() {
    return {
      newArrivals: [],
      topSelling: [],
    };
  },

  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        this.newArrivals = response.data.slice(0, 4);
        this.topSelling = response.data.slice(14, 18);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    },
    goToDetail(productId) {
      this.$router.push({ name: "DetailProduk", params: { id: productId } });
    },
  },

  created() {
    this.fetchProducts();
  },
};
</script>
