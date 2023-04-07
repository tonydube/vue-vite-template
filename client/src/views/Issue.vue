<template>
  <q-layout>
    <q-header elevated class="text-white fire-brick">
      <AppToolbar :projects="projects" />
    </q-header>

    <q-page-container>
      <q-page>
        
      </q-page>
    </q-page-container>
  </q-layout>
</template>
  
<script>
import AppToolbar from '../components/AppToolbar.vue'
import TicketService from '../services/TicketService';
import ProjectService from '../services/ProjectService';
import { ref } from 'vue'

export default {

  name: 'Issue',
  components: {
    AppToolbar
  },
  setup() {
    return {
    };
  },
  methods: {
  },
  async mounted() {
  },
}
</script>