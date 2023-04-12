<template>
  <q-toolbar class="q-px-none">
    <q-img :src="imageSrc" style="width: 20px;" />
    <div v-if="$q.screen.gt.sm"
      class="toolbar-white-plain q-mr-xl q-gutter-md text-body2 text-weight-light row items-center no-wrap">
      <q-item-label class="text-h6 text-weight-light q-ml-lg">Fragility</q-item-label>
    </div>
    <q-btn label="Products" class="text-weight-light" no-caps flat>
      <q-icon class="q-ml-xs q-mt-xs" name="fa-solid fa-angle-down" size="12px"></q-icon>
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">

          </div>
        </div>
      </q-menu>
    </q-btn>
    <q-btn label="Teams" class="text-weight-light" no-caps flat>
      <q-icon class="q-ml-xs q-mt-xs" name="fa-solid fa-angle-down" size="12px"></q-icon>
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">

          </div>
        </div>
      </q-menu>
    </q-btn>
    <q-btn label="Platform" class="text-weight-light" no-caps flat>
      <q-icon class="q-ml-xs q-mt-xs" name="fa-solid fa-angle-down" size="12px"></q-icon>
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">

          </div>
        </div>
      </q-menu>
    </q-btn>
    <q-btn label="Resources" class="text-weight-light" no-caps flat>
      <q-icon class="q-ml-xs q-mt-xs" name="fa-solid fa-angle-down" size="12px"></q-icon>
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">

          </div>
        </div>
      </q-menu>
    </q-btn>
    <q-space />
    <q-btn label="Contact" class="text-weight-light" no-caps flat />
    <q-btn label="Log in" class="text-weight-light" no-caps flat />
    <q-btn class="q-ml-lg q-px-lg" size="md" color="primary" label="Get Started" />
  </q-toolbar>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Toolbar',
  setup () {
    return {
      imageSrc: '/assets/fragility.svg'
    };
  },
  methods: {},
  async mounted(){},
}
</script>