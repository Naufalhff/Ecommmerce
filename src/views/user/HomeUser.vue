<template>
  <div>
    <HeroUser />
    <NewArrivals />
    <BrowseSection />
    <FooterSection />
  </div>
</template>

<script>
import HeroUser from "@/components/user/HeroUser.vue";
import NewArrivals from "@/components/user/NewArrivals.vue";
import BrowseSection from "@/components/user/BrowseSection.vue";
import FooterSection from "@/components/user/FooterSection.vue";

export default {
  components: {
    HeroUser,
    NewArrivals,
    BrowseSection,
    FooterSection,
  },
};
</script>
