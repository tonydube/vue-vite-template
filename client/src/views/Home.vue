<template>
  <q-layout>
    <q-page-container class="page-container">
      <q-page class="background-image q-pt-md q-px-xl column" style="border-bottom: 1px solid red">
        <Toolbar />

        <div class="fill-height column justify-center" style="width: 55%">
          <div class="text-h1 text-weight-medium q-pb-lg">Your solution for agile issue management</div>
          <div class="text-h5 text-weight-regular text-grey-7 q-pb-lg">Experience the power of robust ticket tracking</div>
          <div class="">
            <q-btn class="q-px-lg" color="primary" size="lg" label="Learn more" no-caps />
            <q-btn class="q-ml-lg q-px-lg" size="lg" color="black" label="Get a quick tour" icon="fa-solid fa-circle-play" no-caps flat />
          </div>
        </div>
        <div class="column" style="width: 45%">
          <div class="row">
            <div class="col q-pb-xl">
              <div class="row">
                <span class="text-h6 text-weight-bold">+500k</span>
              </div>
              <div class="row">
                <span class="text-body1 text-grey-7">issues tracked</span>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <span class="text-h6 text-weight-bold">+20k</span>
              </div>
              <div class="row">
                <span class="text-body1 text-grey-7">projects monitored</span>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <span class="text-h6 text-weight-bold">+5k</span>
              </div>
              <div class="row">
                <span class="text-body1 text-grey-7">users strong</span>
              </div>
            </div>
          </div>
        </div>
      </q-page>
      <!-- <q-page class="q-pt-xl q-px-xl column" style="border-bottom: 1px solid red">
        <div class="row text-center">
          <div class="col-12 q-pb-lg">
            <span class="text-h6 text-primary text-center">Treatments</span>
          </div>
          <div class="col-12 q-mb-xl">
            <span class="text-h3 text-center">What we can do for your teeth</span>
          </div>
        </div>

        <div class="row text-center">
          <div class="col-4 column items-center q-px-xl">
            <q-img :src="url" class="q-mb-xs" style="height: 100px; max-width: 100px" />
            <span class="text-h6 text-weight-bold q-mb-xs">Implants</span>
            <span class="text-body1 text-grey-7 q-px-xl q-mb-xs">An implant, covers the process of placing the artificially.</span>
            <span class="text-h6 text-primary q-mb-xl">Learn More</span>
          </div>
          <div class="col-4 column items-center q-px-xl">
            <q-img :src="url" class="q-mb-xs" style="height: 100px; max-width: 100px" />
            <span class="text-h6 text-weight-bold q-mb-xs">Braces</span>
            <span class="text-body1 text-grey-7 q-px-xl q-mb-xs">An implant, covers the process of placing the artificially.</span>
            <span class="text-h6 text-primary">Learn More</span>
          </div>
          <div class="col-4 column items-center q-px-xl">
            <q-img :src="url" class="q-mb-xs" style="height: 100px; max-width: 100px" />
            <span class="text-h6 text-weight-bold q-mb-xs">Teeth Whitening</span>
            <span class="text-body1 text-grey-7 q-px-xl q-mb-xs">An implant, covers the process of placing the artificially.</span>
            <span class="text-h6 text-primary">Learn More</span>
          </div>
          <div class="col-4 column items-center q-px-xl">
            <q-img :src="url" class="q-mb-xs" style="height: 100px; max-width: 100px" />
            <span class="text-h6 text-weight-bold q-mb-xs">Teeth Removal</span>
            <span class="text-body1 text-grey-7 q-px-xl q-mb-xs">An implant, covers the process of placing the artificially.</span>
            <span class="text-h6 text-primary">Learn More</span>
          </div>
          <div class="col-4 column items-center q-px-xl">
            <q-img :src="url" class="q-mb-xs" style="height: 100px; max-width: 100px" />
            <span class="text-h6 text-weight-bold q-mb-xs">Tooth Checkup</span>
            <span class="text-body1 text-grey-7 q-px-xl q-mb-xs">An implant, covers the process of placing the artificially.</span>
            <span class="text-h6 text-primary">Learn More</span>
          </div>
          <div class="col-4 column items-center q-px-xl">
            <q-img :src="url" class="q-mb-xs" style="height: 100px; max-width: 100px" />
            <span class="text-h6 text-weight-bold q-mb-xs">Flossing</span>
            <span class="text-body1 text-grey-7 q-px-xl q-mb-xs">An implant, covers the process of placing the artificially.</span>
            <span class="text-h6 text-primary">Learn More</span>
          </div>
        </div>
      </q-page>
      <q-page class="q-pt-xl q-px-xl column" style="border-bottom: 1px solid red">
        <div class="row text-center flex justify-center">
          <div class="col-12 q-pb-xl">
            <span class="text-h6 text-primary text-center">Who We Are</span>
          </div>
          <div class="col-12 q-mb-lg">
            <span class="text-h3 text-center">Meet our top experts</span>
          </div>
          <div class="col-6 q-px-xl q-mb-xl">
            <span class="text-h6 flex justify-center">We aim to provide the highest standards of dental service and we demonstrates great understanding and respect for patient rights and all while pursuing patient satisfaction.</span>
          </div>
        </div>

        <div class="row text-center q-mt-xl">
          <div class="col-3 column items-center q-px-xl">
            <q-img :src="url" class="q-mb-xs" style="height: 200px; max-width: 125px" />
            <span class="text-h6 text-weight-bold q-mb-xs">Diana Chang</span>
            <span class="text-body1 text-grey-7 q-px-xl q-mb-xs">Dental Doctor</span>
          </div>
          <div class="col-3 column items-center q-px-xl">
            <q-img :src="url" class="q-mb-xs" style="height: 200px; max-width: 125px" />
            <span class="text-h6 text-weight-bold q-mb-xs">Diana Chang</span>
            <span class="text-body1 text-grey-7 q-px-xl q-mb-xs">Dental Doctor</span>
          </div>
          <div class="col-3 column items-center q-px-xl">
            <q-img :src="url" class="q-mb-xs" style="height: 200px; max-width: 125px" />
            <span class="text-h6 text-weight-bold q-mb-xs">Diana Chang</span>
            <span class="text-body1 text-grey-7 q-px-xl q-mb-xs">Dental Doctor</span>
          </div>
          <div class="col-3 column items-center q-px-xl">
            <q-img :src="url" class="q-mb-xs" style="height: 200px; max-width: 125px" />
            <span class="text-h6 text-weight-bold q-mb-xs">Diana Chang</span>
            <span class="text-body1 text-grey-7 q-px-xl q-mb-xs">Dental Doctor</span>
          </div>
        </div>
      </q-page>
      <q-page class="q-pt-xl q-px-xl column" style="border-bottom: 1px solid red">
        <div class="row text-center flex justify-center">
          <div class="col-12 q-pb-md">
            <span class="text-h6 text-primary text-center">Testimonials</span>
          </div>
          <div class="col-12 q-mb-lg">
            <span class="text-h3 text-center">What our patients are saying</span>
          </div>
          <div class="col-6 q-px-xl q-mb-xl">
            <span class="text-h6 text-grey-7 flex justify-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate corrupti omnis velit?</span>
          </div>
        </div>

        <div class="row text-center q-mt-xl">
          <div class="col-4 column items-center q-px-xl">
            <q-img :src="url" class="q-mb-xs" style="height: 200px; max-width: 125px" />
            <span class="text-h6 text-weight-bold q-mb-xs">Diana Chang</span>
            <span class="text-body1 text-grey-7 q-px-xl q-mb-xs">Dental Doctor</span>
          </div>
          <div class="col-4 column items-center q-px-xl">
            <q-img :src="url" class="q-mb-xs" style="height: 200px; max-width: 125px" />
            <span class="text-h6 text-weight-bold q-mb-xs">Diana Chang</span>
            <span class="text-body1 text-grey-7 q-px-xl q-mb-xs">Dental Doctor</span>
          </div>
          <div class="col-4 column items-center q-px-xl">
            <q-img :src="url" class="q-mb-xs" style="height: 200px; max-width: 125px" />
            <span class="text-h6 text-weight-bold q-mb-xs">Diana Chang</span>
            <span class="text-body1 text-grey-7 q-px-xl q-mb-xs">Dental Doctor</span>
          </div>
        </div>
      </q-page>
      <q-page class="column">
        <div class="fill-height column">
          <div class="fill-height column justify-center items-center" style="border: 1px solid blue">
            <div class="fill-height column justify-center" style="border: 1px solid red">
              <div class="column fill-height items-center" style="border: 1px solid black">
                <span class="text-h4 text-center">Did You Know Our Consultations Are Completely Free and Confidential?</span>
                <q-btn class="" label="Request Appointment" no-caps />
              </div>
            </div>
          </div>
          <div class="fill-height bg-primary">
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-6 q-ma-xl">
                    <div class="q-ma-xl column">
                      <q-img
                      :src="'https://macsnh.org/wp-content/uploads/2019/08/demo-logo-black.png'"
                      class="q-mb-lg"
                      style="height: 50px; max-width: 125px"
                    />
                     <q-icon class="fa-regular fa-user"></q-icon>
                     23242 Something, Somewhere, New York
                     <q-icon class="fa-regular fa-user"></q-icon>
                     123-456-7890
                     <q-icon class="fa-regular fa-user"></q-icon>
                     Mon - Thu: 8:30am-4pm
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="row">
                      <div class="col-6">

                      </div>
                      <div class="col-6">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-page> -->
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import Toolbar from '../components/Toolbar.vue'

export default {
  setup () {
    return {
      tab: ref('')
    }
  },
  name: "Home",
  props: [],
  components: {
    Toolbar
  },
  data() {
    return {
      url: 'https://via.assets.so/img.jpg?w=100&h=100',
    };
  },
  computed: {},
  watch: {},
  methods: {
    goTo(route) {
      this.$router.push(route);
    }
  },
  created() {},
  mounted() {
    // Set the width of the page container to 1280 on large screens
    this.$nextTick(() => {
      const media = this.$q.screen.gt.lg
      const pageContainer = document.querySelector('.page-container')
      if (media && pageContainer) {
        pageContainer.style.maxWidth = '1440px'
        pageContainer.style.marginLeft = 'auto'
        pageContainer.style.marginRight = 'auto'
      }
    })
  },
};
</script>

<style scoped>
:deep(.q-tab__label) {
  font-size: 1.5em;
}
.fill-height {
  flex: 1;
}
.background-image {
  background-image: url('/assets/main.jpg');
  background-size: cover;
}
</style>
