<template>
  <q-toolbar class="q-py-sm q-px-md">
    <q-btn @click="navigateTo('home')" round unelevated>
      <q-avatar size="sm">
        <img src="../assets/logo.png" />
      </q-avatar>
    </q-btn>
    <div v-if="$q.screen.gt.sm"
      class="toolbar-white-plain q-mr-xl q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
      <a href="/" class="text-white">
        Fragility
      </a>
    </div>
    <div v-if="$q.screen.gt.sm" class="toolbar-white-plain q-ml-xs q-gutter-lg row items-center no-wrap">
      <q-btn-dropdown no-caps square color="rgba(0,0,0,0)" style="border-bottom: 1px solid" unelevated label="Fragility">
        <q-list>
          <q-item v-for="project in projects" clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>{{ project }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <a href="javascript:void(0)" class="text-white">
        My Tickets
      </a>
      <a href="javascript:void(0)" class="text-white">
        Projects
      </a>
      <a href="javascript:void(0)" class="text-white">
        Issues
      </a>
      <a href="javascript:void(0)" class="text-white">
        Reports
      </a>
    </div>
    <q-space />
    <q-select ref="search" dark dense standout use-input hide-selected class="toolbar-select" color="black"
      :stack-label="false" label="Search for bugs.." v-model="search">
      <template v-slot:no-option>
        <q-item>
          <q-item-section>
            <div class="text-center">
              <q-spinner-pie style="color:firebrick" size="24px" />
            </div>
          </q-item-section>
        </q-item>
      </template>

    </q-select>

    <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
      <q-btn v-if="$q.screen.gt.xs" dense flat round size="sm" icon="fa-solid fa-bell" />
      <q-btn v-if="$q.screen.gt.xs" dense flat>
        <div class="row items-center no-wrap">
          <q-icon name="fa-solid fa-plus" size="14px" />
          <q-icon class="q-pl-xs q-pt-xs" name="fa-solid fa-angle-down" size="12px" />
        </div>
        <q-menu auto-close>
          <q-list dense style="min-width: 100px">
            <q-item clickable class="toolbar__menu-link">
              <q-item-section>New Project</q-item-section>
            </q-item>
            <q-item clickable class="toolbar__menu-link">
              <q-item-section>New Issue</q-item-section>
            </q-item>
            <q-item clickable class="toolbar__menu-link">
              <q-item-section>New Report</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn dense flat no-wrap>
        <q-avatar rounded size="20px">
          AD
        </q-avatar>
        <q-icon class="q-pl-xs q-pt-xs" name="fa-solid fa-angle-down" size="12px" />

        <q-menu auto-close>
          <q-list dense>
            <q-item class="toolbar__menu-link-signed-in">
              <q-item-section>
                <div>Signed in as <strong>Anthony Dube</strong></div>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable class="toolbar__menu-link-status">
              <q-item-section>
                <div>
                  <q-icon name="fa-regular fa-face-smile" style="color: firebrick" size="14px" class="q-pr-xs" />
                  Set your status
                </div>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable class="toolbar__menu-link">
              <q-item-section>Your Profile</q-item-section>
            </q-item>
            <q-item clickable class="toolbar__menu-link">
              <q-item-section>Your Tickets</q-item-section>
            </q-item>
            <q-item clickable class="toolbar__menu-link">
              <q-item-section>Your Projects</q-item-section>
            </q-item>
            <q-item clickable class="toolbar__menu-link">
              <q-item-section>Your Issues</q-item-section>
            </q-item>
            <q-item clickable class="toolbar__menu-link">
              <q-item-section>Your Reports</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable class="toolbar__menu-link">
              <q-item-section>Help</q-item-section>
            </q-item>
            <q-item clickable class="toolbar__menu-link">
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-item clickable class="toolbar__menu-link">
              <q-item-section>Sign out</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </q-toolbar>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AppToolbar',
  setup() {
    return {};
  },
  methods: {},
  async mounted() { },
}
</script>