<template>
  <div>
    <NavbarUser />
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarUser from "@/components/user/NavbarUser.vue";

export default {
  components: {
    NavbarUser,
  },
};
</script>
