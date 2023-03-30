<template>
  <q-layout>
    <q-btn color="primary" label="Home" @click="goTo('/')" />
    <q-btn color="primary" label="About" @click="goTo('about')"/>
  </q-layout>
</template>

<script>

export default {
  name: "About",
  props: [],
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    goTo(route) {
      this.$router.push(route);
    }
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
</style>
