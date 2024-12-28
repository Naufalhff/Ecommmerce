<template>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    rel="stylesheet"
  />

  <div>
    <!-- Testimonials Section -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold">OUR HAPPY CUSTOMERS</h2>
        <div class="flex gap-2">
          <button class="p-2 border rounded-full hover:bg-gray-100">←</button>
          <button class="p-2 border rounded-full hover:bg-gray-100">→</button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div
          v-for="review in reviews"
          :key="review.id"
          class="p-6 border rounded-lg"
        >
          <div class="flex text-yellow-400 mb-2">
            <span v-for="star in 5" :key="star">★</span>
          </div>
          <p class="text-gray-700 mb-4">{{ review.comment }}</p>
          <div class="flex items-center">
            <span class="font-medium">{{ review.name }}</span>
            <span class="text-blue-500 ml-2">✓</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="bg-black text-white py-12 px-4">
      <div class="max-w-7xl mx-auto">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-8 mb-16"
        >
          <h2 class="text-2xl font-bold">
            STAY UP TO DATE ABOUT<br />OUR LATEST OFFERS
          </h2>
          <div class="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              class="px-4 py-2 rounded-lg text-black w-full sm:w-64"
            />
            <button
              class="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-100"
            >
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        <!-- Footer Links -->
        <div
          class="grid grid-cols-1 md:grid-cols-5 gap-8 pb-8 border-b border-gray-700"
        >
          <div>
            <h3 class="font-bold text-xl mb-4">SHOP.CO</h3>
            <p class="text-gray-400 mb-4">
              We have clothes that suits your style and which you're proud to
              wear.
            </p>
            <div class="flex gap-4">
              <a href="#" class="text-white hover:text-gray-300">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="text-white hover:text-gray-300">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="text-white hover:text-gray-300">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 class="font-bold mb-4">COMPANY</h4>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white">About</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">Features</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">Works</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">Career</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold mb-4">HELP</h4>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white"
                  >Customer Support</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white"
                  >Delivery Details</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white"
                  >Terms & Conditions</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white"
                  >Privacy Policy</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold mb-4">FAQ</h4>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white">Account</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white"
                  >Manage Deliveries</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">Orders</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">Payments</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold mb-4">RESOURCES</h4>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white"
                  >Free eBooks</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white"
                  >Development Tutorial</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white"
                  >How to - Blog</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white"
                  >Youtube Playlist</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div
          class="flex flex-col md:flex-row justify-between items-center pt-8"
        >
          <p class="text-gray-400">Shop.co © 2024. All rights reserved.</p>
          <div class="flex gap-4">
            <i class="fab fa-cc-visa text-2xl"></i>
            <i class="fab fa-cc-mastercard text-2xl"></i>
            <i class="fab fa-cc-paypal text-2xl"></i>
            <i class="fab fa-apple-pay text-2xl"></i>
            <i class="fab fa-google-pay text-2xl"></i>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
  data() {
    return {
      reviews: [
        {
          id: 1,
          name: "Sarah M.",
          comment:
            "Im blown away by the quality and style of the clothes I received. Each piece feels like it was tailored just for me.",
        },
        {
          id: 2,
          name: "Alex K.",
          comment:
            "The shopping experience was seamless. Their style quiz helped me find pieces that perfectly match my preferences.",
        },
        {
          id: 3,
          name: "James L.",
          comment:
            "The attention to detail in the clothes is remarkable. The fit is perfect and the materials are high quality.",
        },
      ],
    };
  },
};
</script>
