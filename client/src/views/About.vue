<template>
  <q-layout>
    <q-header elevated class="text-white fire-brick">
      <q-toolbar class="q-py-sm q-px-md">
        <q-btn 
          @click="navigateTo('home')"
          round 
          unelevated>
          <q-avatar size="sm">
            <img src="../assets/logo.png" />
          </q-avatar>
        </q-btn>
        <div v-if="$q.screen.gt.sm" class="toolbar-white-plain q-mr-xl q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
          <a href="/" class="text-white">
            Fragility
          </a>
        </div>
        <div v-if="$q.screen.gt.sm" class="toolbar-white-plain q-ml-xs q-gutter-lg row items-center no-wrap">
          <q-btn-dropdown no-caps square color="rgba(0,0,0,0)" style="border-bottom: 1px solid" unelevated label="Fragility">
            <q-list>
              <q-item v-for="project in projects" clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>{{project}}</q-item-label>
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
        <q-select
          ref="search" dark dense standout use-input hide-selected
          class="toolbar-select"
          color="black" :stack-label="false" label="Search for bugs.."
          v-model="search" :options="filteredOptions"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section>
                <div class="text-center">
                  <q-spinner-pie
                    style="color:firebrick"
                    size="24px"
                  />
                </div>
              </q-item-section>
            </q-item>
          </template>

        </q-select>

        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
          <q-btn v-if="$q.screen.gt.xs" dense flat round size="sm" icon="fa-solid fa-bell" />
          <q-btn v-if="$q.screen.gt.xs" dense flat>
            <div class="row items-center no-wrap">
              <q-icon name="fa-solid fa-plus" size="20px" />
              <q-icon name="fa-solid fa-caret-down" size="16px" style="margin-left: -2px" />
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
            <q-icon name="fa-solid fa-caret-down" size="16px" />

            <q-menu auto-close>
              <q-list dense>
                <q-item class="toolbar__menu-link-signed-in">
                  <q-item-section>
                    <div>Signed in as <strong>Admin</strong></div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="toolbar__menu-link-status">
                  <q-item-section>
                    <div>
                      <q-icon name="tag_faces" style="color: firebrick" size="18px" />
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
    </q-header>

    <q-page-container>


    <q-page>
        <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-card flat bordered class>
              <q-card-section>
                <div class="text-h6">Create Issue</div>
              </q-card-section>
    
              <q-separator inset></q-separator>
    
              <q-card-section>
                <q-form>
                  <q-list>
                    <q-item>
                      <q-item-section>
                        <q-item-label class="q-pb-xs">Project *</q-item-label>
                        <q-select
                          dense
                          label="Project"
                          outlined
                          v-model="project"
                          :options="projects"
                          stack-label
                          options-dense
                        ></q-select>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>
                        <q-item-label class="q-pb-xs">Issue Type *</q-item-label>
                        <q-select
                          dense
                          label="Issue Type"
                          outlined
                          v-model="issue"
                          :options="issues"
                          stack-label
                          options-dense
                        ></q-select>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>
                        <q-item-label class="q-pb-xs">Priority *</q-item-label>
                        <q-rating
                          v-model="priority"
                          size="2em"
                          :max="5"
                          color="primary"
                        >
                          <template v-slot:tip-1>
                            <q-tooltip>Unknown</q-tooltip>
                          </template>
                          <template v-slot:tip-2>
                            <q-tooltip>Low Priority</q-tooltip>
                          </template>
                          <template v-slot:tip-3>
                            <q-tooltip>Neutral</q-tooltip>
                          </template>
                          <template v-slot:tip-4>
                            <q-tooltip>High Priority</q-tooltip>
                          </template>
                          <template v-slot:tip-5>
                            <q-tooltip>Critical</q-tooltip>
                          </template>
                        </q-rating>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>
                        <q-item-label class="q-pb-xs">Description *</q-item-label>
                        <q-input
                          v-model="description"
                          filled
                          type="textarea"
                          autogrow
                        />
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>
                        <q-item-label class="q-pb-xs">Reporter</q-item-label>
                        <q-input
                          dense
                          outlined
                          v-model="reporter"
                          label="Reporter"
                          value="Admin"
                        />
                      </q-item-section>
                    </q-item>
                  </q-list>
                  <q-card-actions align="right" class="text-teal">
                    <q-btn
                      no-caps
                      label="Save"
                      color="primary"
                      v-close-popup
                      @click="save"
                    />
                  </q-card-actions>
                </q-form>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <q-card flat bordered class>
              <q-card-section>
                <div class="text-h6">Recent Issues</div>
              </q-card-section>
    
              <q-separator inset></q-separator>
    
              <q-card-section v-if="!loading">
                <q-table
                  :rows="data"
                  :hide-header="mode === 'grid'"
                  row-key="name"
                  :columns="columns"
                  :grid="mode == 'grid'"
                  :pagination.sync="pagination"
                >
                  <template v-slot:top-right="props">
                    <q-input
                      outlined
                      dense
                      debounce="300"
                      v-model="filter"
                      placeholder="Search"
                    >
                      <template v-slot:append>
                        <q-icon name="fa-solid fa-magnifying-glass" />
                      </template>
                    </q-input>
    
                    <q-btn
                      flat
                      round
                      dense
                      :icon="props.inFullscreen ? 'fa-solid fa-compress' : 'fa-solid fa-expand'"
                      @click="props.toggleFullscreen"
                      v-if="mode === 'list'"
                    >
                      <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                        >{{
                          props.inFullscreen
                            ? "Exit Fullscreen"
                            : "Toggle Fullscreen"
                        }}
                      </q-tooltip>
                    </q-btn>
    
                    <q-btn
                      flat
                      round
                      dense
                      :icon="mode === 'grid' ? 'fa-solid fa-list' : 'fa-solid fa-table-cells'"
                      @click="
                        mode = mode === 'grid' ? 'list' : 'grid';
                        separator = mode === 'grid' ? 'none' : 'horizontal';
                      "
                      v-if="!props.inFullscreen"
                    >
                      <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                        >{{ mode === "grid" ? "List" : "Grid" }}
                      </q-tooltip>
                    </q-btn>
    
                    <q-btn
                      color="primary"
                      icon-right="fa-solid fa-box-archive"
                      label="Export to csv"
                      no-caps
                      @click="exportDepositsTable"
                    />
                  </template>
                  <template v-slot:body-cell-actions="props">
                    <q-td :props="props">
                      <q-btn dense round flat color="info" @click="editIssue(props)" icon="fa-solid fa-pencil"></q-btn>
                      <q-btn dense round flat color="primary" @click="deleteIssue(props)" icon="fa-solid fa-trash"></q-btn>
                    </q-td>          
                  </template>
                </q-table>
                
                <!-- Start Edit Ticket Dialog  -->
                <q-dialog v-model="prompt" persistent>
                  <q-card style="min-width: 350px" class="q-pa-lg">
                    <q-card-section>
                      <div class="text-h6">Edit Issue</div>
                    </q-card-section>
                    <q-form>
                      <q-list>
                        <q-item>
                          <q-item-section>
                            <q-item-label class="q-pb-xs">Project *</q-item-label>
                            <q-select
                              dense
                              label="Project"
                              outlined
                              v-model="currentIssue.project"
                              :options="projects"
                              stack-label
                              options-dense
                            ></q-select>
                          </q-item-section>
                        </q-item>
                        <q-item>
                          <q-item-section>
                            <q-item-label class="q-pb-xs">Issue Type *</q-item-label>
                            <q-select
                              dense
                              label="Issue Type"
                              outlined
                              v-model="currentIssue.issue"
                              :options="issues"
                              stack-label
                              options-dense
                            ></q-select>
                          </q-item-section>
                        </q-item>
                        <q-item>
                          <q-item-section>
                            <q-item-label class="q-pb-xs">Priority *</q-item-label>
                            <q-rating
                              v-model="priority"
                              size="2em"
                              :max="5"
                              color="primary"
                            >
                              <template v-slot:tip-1>
                                <q-tooltip>Unknown</q-tooltip>
                              </template>
                              <template v-slot:tip-2>
                                <q-tooltip>Low Priority</q-tooltip>
                              </template>
                              <template v-slot:tip-3>
                                <q-tooltip>Neutral</q-tooltip>
                              </template>
                              <template v-slot:tip-4>
                                <q-tooltip>High Priority</q-tooltip>
                              </template>
                              <template v-slot:tip-5>
                                <q-tooltip>Critical</q-tooltip>
                              </template>
                            </q-rating>
                          </q-item-section>
                        </q-item>
                        <q-item>
                          <q-item-section>
                            <q-item-label class="q-pb-xs">Description *</q-item-label>
                            <q-input
                              v-model="currentIssue.description"
                              filled
                              type="textarea"
                              autogrow
                            />
                          </q-item-section>
                        </q-item>
                        <q-item>
                          <q-item-section>
                            <q-item-label class="q-pb-xs">Reporter</q-item-label>
                            <q-input
                              dense
                              outlined
                              v-model="currentIssue.reporter"
                              label="Reporter"
                              value="Admin"
                            />
                          </q-item-section>
                        </q-item>
                         <q-item>
                          <q-item-section>
                            <q-item-label class="q-pb-xs">Status</q-item-label>
                            <q-select
                              dense
                              outlined
                              v-model="currentIssue.status"
                              label="Status"
                              value="Admin"
                              :options="options"
                              
                            />
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-card-actions align="right" class="text-primary">
                        <q-btn no-caps flat label="Cancel" v-close-popup />
                        <q-btn
                          no-caps
                          label="Save"
                          color="primary"
                          v-close-popup
                          @click="saveIssue()"
                        />
                      </q-card-actions>
                    </q-form>
                  </q-card>
                </q-dialog>
                <!-- End Edit Ticket Dialog  -->
                        
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import TicketService from '../services/TicketService';
import ProjectService from '../services/ProjectService';
import { exportFile } from "quasar";
import { ref } from 'vue'
const stringOptions = [
  'FRG-001',
  'FRG-002',
  'FRG-003'
];
                  
export default {
  
  name: 'MyLayout',
  setup () {
    const text = ref('')
    const options = ref(null)
    const filteredOptions = ref([])
    const search = ref(null) // $refs.search
    function filter (val, update) {
      if (options.value === null) {
        // load data
        setTimeout(() => {
          options.value = stringOptions
          search.value.filter('')
        }, 2000)
        update()
        return
      }
      if (val === '') {
        update(() => {
          filteredOptions.value = options.value.map(op => ({ label: op }))
        })
        return
      }
      update(() => {
        filteredOptions.value = [
          {
            label: val,
            type: 'In this repository'
          },
          {
            label: val,
            type: 'All GitHub'
          },
          ...options.value
            .filter(op => op.toLowerCase().includes(val.toLowerCase()))
            .map(op => ({ label: op }))
        ]
      })
    }
    return {
      loading: ref(true),
      project: ref(null),
      issue: ref(null),
      priority: ref(1),
      description: ref(null),
      reporter: ref(null),
      status: ref('Planning'),
      exportDepositsTable: '',
      text,
      options,
      filteredOptions,
      search,
      filter: "",
      mode: "list",
      deposit: {},
      pagination: {
        rowsPerPage: 10
      },
      options: ["Planning", "In Progress", "In Review", "Done"],
      currentIssue: {
        createdAt: null,
        description: null,
        id: null,
        issue: null,
        project: null,
        reporter: null,
        status: null,
        updatedAt: null,
      },
      projects: ref([]),
      issues: [
        "Epic",
        "User Story",
        "Subtask",
        "Feature",
        "Issue",
        "Bug",
        "Error",
      ],
      columns: [
        {
          name: "project",
          align: "left",
          label: "Project",
          field: "project",
          sortable: true
        },
        {
          name: "issue",
          align: "left",
          label: "Issue Type",
          field: "issue",
          sortable: true
        },
        {
          name: "priority",
          align: "left",
          label: "Priority",
          field: "priority",
          sortable: true
        },
        {
          name: "description",
          align: "left",
          label: "Description",
          field: "description",
          sortable: true
        },
        {
          name: "reporter",
          label: "Reporter",
          align: "left",
          field: "reporter",
          sortable: true
        },
        {
          name: "status",
          label: "Status",
          align: "left",
          field: "status",
          sortable: true
        },
        {
          name: "actions",
          label: "Actions",
          field: "actions"
        }
      ],
      data: [],
      prompt: ref(false),
    };
  },
  methods: {
    navigateTo(route){
      this.$router.push(route);
    },
    async save() {
      try {
        let params = {}
        params['project'] = this.project;
        params['issue'] = this.issue;
        params['priority'] = this.priority;
        params['description'] = this.description;
        params['reporter'] = this.reporter;
        params['status'] = this.status;
        
        await TicketService.createTicket(params);
        await this.getData();
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    async getData(){
      this.loading = true;
      const response = await TicketService.getAllTickets();
      this.data = response.data;
      this.loading = false;
    },
    async editIssue(item) {
      try {
        // get ticket by id
        let params = {}
        params['id'] = item.row.id;
        const response = await TicketService.getTicketById(params);
        const data = response.data[0];

        // update currentIssue
        this.currentIssue.id = data.id;
        this.currentIssue.project = data.project;
        this.currentIssue.issue = data.issue;
        this.currentIssue.description = data.description;
        this.currentIssue.reporter = data.reporter;
        this.currentIssue.status = data.status;
        
        this.prompt = true;
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
     async saveIssue() {
      try {
        let params = {}
        params['id'] = this.currentIssue.id;
        params['project'] = this.currentIssue.project;
        params['issue'] = this.currentIssue.issue;
        params['description'] = this.currentIssue.description;
        params['reporter'] = this.currentIssue.reporter;
        params['status'] = this.currentIssue.status;

        const response = await TicketService.updateTicket(params);
        // const data = response.data[0];
        // this.currentIssue = {};

        this.prompt = false;
        await this.getData();
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    async deleteIssue(item) {
      try {
        let params = {}
        params['id'] = item.row.id;
        
        await TicketService.deleteTicket(params);
        await this.getData();
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    async getProjects(){
      const response = await ProjectService.getAllProjects();
      this.projects = response.data.map(a => a.name);
    },
    
    async saveProject(name) {
      const response2 = await ProjectService.getAllProjects();
        let params = {}
        params['name'] = name;
        await ProjectService.createProject(params);
    },
  },
  async mounted(){
    await this.getData();
    await this.getProjects();
    // this.saveProject("Maven Corp");
  },
}
</script>

<style lang="sass">
.fire-brick
  background-color: firebrick

.toolbar
  &-white-plain
    a
      color: white
      text-decoration: none
      &:hover
        opacity: 0.7
  &__menu-link:hover
    background: #b22222
    color: white
  &__menu-link-signed-in,
  &__menu-link-status
    &:hover
      & > div
        background: white !important
  &__menu-link-status
    color: firebrick
    &:hover
      color: firebrick
  &-select.q-field--focused
    width: 500px !important
    .q-field__append
      display: none
</style>