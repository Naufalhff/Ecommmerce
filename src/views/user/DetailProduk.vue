<template>
  <div class="container mx-auto px-4 py-8" v-if="product">
    <!-- Breadcrumb -->
    <nav class="text-sm text-gray-500 mb-4">
      <ol class="flex items-center space-x-2">
        <li>
          <router-link :to="{ path: '/' }" class="hover:underline"
            >Home</router-link
          >
        </li>
        <li>/</li>
        <li>
          <router-link :to="{ path: '/shop' }" class="hover:underline"
            >Shop</router-link
          >
        </li>
        <li>/</li>
        <li>
          <span class="text-black font-semibold">{{ product.title }}</span>
        </li>
      </ol>
    </nav>

    <!-- Product Section -->
    <div class="flex flex-wrap lg:flex-nowrap">
      <!-- Left: Images -->
      <div class="w-full lg:w-1/2 space-y-4">
        <img
          :src="product.image"
          :alt="product.title"
          class="max-w-[10rem] sm:max-w-[20rem] mx-auto rounded-lg object-contain mt-5 mb-5"
        />
      </div>

      <!-- Right: Details -->
      <div class="w-full lg:w-1/2 lg:pl-8">
        <!-- Product Title -->
        <h1 class="text-2xl font-bold mb-2">{{ product.title }}</h1>

        <!-- Rating and Reviews -->
        <div class="flex items-center mb-4">
          <div class="flex items-center text-yellow-400">
            <span>★★★★☆</span>
          </div>
          <span class="ml-2 text-sm text-gray-500">4.5/5</span>
        </div>

        <!-- Price -->
        <div class="flex items-center mb-4">
          <span class="text-2xl font-bold text-black"
            >${{ product.price }}</span
          >
        </div>

        <!-- Description -->
        <p class="text-gray-600 mb-4">{{ product.description }}</p>

        <!-- Quantity and Add to Cart -->
        <div class="flex items-center space-x-4 mb-6">
          <div class="flex items-center border rounded-full">
            <button
              class="px-4 py-2 hover:bg-gray-100"
              @click="decrementQuantity"
            >
              -
            </button>
            <span class="px-4">{{ quantity }}</span>
            <button
              class="px-4 py-2 hover:bg-gray-100"
              @click="incrementQuantity"
            >
              +
            </button>
          </div>
          <button
            class="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
            @click="addToCart"
          >
            Add to Cart
          </button>
        </div>

        <!-- Product Tabs -->
        <div class="border-t">
          <div class="flex space-x-6 text-sm font-medium text-gray-500 mt-6">
            <button class="hover:text-black" @click="selectTab('details')">
              Product Details
            </button>
            <button class="hover:text-black" @click="selectTab('reviews')">
              Rating & Reviews
            </button>
            <button class="hover:text-black" @click="selectTab('faqs')">
              FAQs
            </button>
          </div>
        </div>
        <!-- Tab Content -->
        <div class="mt-6">
          <div v-if="selectedTab === 'details'" class="text-gray-600">
            <h3 class="font-semibold mb-2">Specifications:</h3>
            <ul class="list-disc list-inside">
              <li>Material: {{ product.material || "N/A" }}</li>
              <li>Category: {{ product.category }}</li>
              <li>Weight: {{ product.weight || "N/A" }} kg</li>
            </ul>
          </div>

          <div v-if="selectedTab === 'reviews'" class="text-gray-600">
            <h3 class="font-semibold mb-2">Customer Reviews:</h3>
            <p>Coming soon!</p>
          </div>

          <div v-if="selectedTab === 'faqs'" class="text-gray-600">
            <h3 class="font-semibold mb-2">Frequently Asked Questions:</h3>
            <p>Coming soon!</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Loading State -->
  <div v-else class="text-center py-20">
    <p>Loading product details...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      product: null,
      quantity: 1,
      selectedTab: "details",
    };
  },
  methods: {
    async fetchProduct() {
      try {
        const { id } = this.$route.params;
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        this.product = response.data;
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    },
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 1) this.quantity--;
    },
    addToCart() {
      alert(
        `Added to cart:\nProduct: ${this.product.title}\nQuantity: ${this.quantity}`
      );
    },
    selectTab(tab) {
      this.selectedTab = tab;
    },
  },
  created() {
    this.fetchProduct();
  },
};
</script>
