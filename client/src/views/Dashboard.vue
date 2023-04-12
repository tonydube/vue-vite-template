<template>
  <q-layout>
    <q-header elevated class="text-white fire-brick">
      <AppToolbar :projects="projects" />
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
                        <q-select dense label="Project" outlined v-model="project" :options="projects" stack-label
                          options-dense hide-dropdown-icon>
                          <template v-slot:append>
                            <q-icon name="fa-solid fa-angle-down" size="12px" />
                          </template>
                        </q-select>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>
                        <q-item-label class="q-pb-xs">Issue Type *</q-item-label>
                        <q-select dense label="Issue Type" outlined v-model="issue" :options="issues" stack-label
                          options-dense hide-dropdown-icon>
                          <template v-slot:append>
                            <q-icon name="fa-solid fa-angle-down" size="12px" />
                          </template></q-select>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>
                        <q-item-label class="q-pb-xs">Priority *</q-item-label>
                        <q-rating v-model="priority" size="2em" :max="5" color="primary">
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
                        <q-input v-model="description" filled input-style="height: 200px;" type="textarea" />
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>
                        <q-item-label class="q-pb-xs">Reporter</q-item-label>
                        <q-select dense outlined v-model="reporter" label="Reporter" value="Admin" :options="users"
                          stack-label options-dense hide-dropdown-icon>
                          <template v-slot:append>
                            <q-icon name="fa-solid fa-angle-down" size="12px" />
                          </template>
                        </q-select>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>
                        <q-item-label class="q-pb-xs">Assignee</q-item-label>
                        <q-select dense label="Assignee" outlined v-model="assignee" :options="users" stack-label
                          options-dense hide-dropdown-icon>
                          <template v-slot:append>
                            <q-icon name="fa-solid fa-angle-down" size="12px" />
                          </template></q-select>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>
                        <q-item-label class="q-pb-xs">Status</q-item-label>
                        <q-select dense label="Status" outlined v-model="status" :options="statuses" stack-label
                          options-dense hide-dropdown-icon>
                          <template v-slot:append>
                            <q-icon name="fa-solid fa-angle-down" size="12px" />
                          </template></q-select>
                      </q-item-section>
                    </q-item>
                  </q-list>
                  <q-card-actions class="justify-end q-mr-sm">
                    <q-btn no-caps label="Save" color="primary" v-close-popup @click="save" />
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
                <q-table :rows="data" :hide-header="mode === 'grid'" row-key="name" :columns="columns"
                  :grid="mode == 'grid'" :pagination.sync="pagination">
                  <template v-slot:top-left="props">
                    <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
                      <template v-slot:append>
                        <q-icon name="fa-solid fa-magnifying-glass" size="12px"/>
                      </template>
                    </q-input>
                  </template>
                  <template v-slot:top-right="props">
                    <q-btn flat round dense :icon="props.inFullscreen ? 'fa-solid fa-compress' : 'fa-solid fa-expand'"
                      @click="props.toggleFullscreen" v-if="mode === 'list'" class="q-mr-sm">
                      <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{
                        props.inFullscreen
                        ? "Exit Fullscreen"
                        : "Toggle Fullscreen"
                      }}
                      </q-tooltip>
                    </q-btn>

                    <q-btn flat round dense :icon="mode === 'grid' ? 'fa-solid fa-list' : 'fa-solid fa-table-cells'"
                      @click="
                        mode = mode === 'grid' ? 'list' : 'grid';
                      separator = mode === 'grid' ? 'none' : 'horizontal';
                                                                      " v-if="!props.inFullscreen" class="q-mr-md">
                      <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid" }}
                      </q-tooltip>
                    </q-btn>

                    <q-btn color="primary" label="Export to csv" no-caps @click="exportDepositsTable">
                      <q-icon class="q-pl-sm" name="fa-solid fa-box-archive" size="14px"></q-icon>
                    </q-btn>
                  </template>
                  <template v-slot:body-cell-actions="props">
                    <q-td :props="props">
                      <q-btn dense round flat color="info" @click="editIssue(props)">
                        <q-icon name="fa-solid fa-pencil" size="14px"></q-icon>
                      </q-btn>
                      <q-btn dense round flat color="primary" @click="deleteIssue(props)">
                        <q-icon name="fa-solid fa-trash" size="14px"></q-icon>
                      </q-btn>
                    </q-td>
                  </template>
                </q-table>

                <!-- Start Edit Ticket Dialog  -->
                <q-dialog v-model="prompt" persistent>
                  <q-card style="min-width: 700px" class="q-pa-lg">
                    <q-card-section class="row justify-between items-center">
                      <div class="text-h6">Quick Edit Issue</div>
                      <div class="text-caption">Go to detailed view</div>
                    </q-card-section>
                    <q-form>
                      <q-list>
                        <q-item>
                          <q-item-section>
                            <q-item-label class="q-pb-xs">Project *</q-item-label>
                            <q-select dense label="Project" outlined v-model="currentIssue.project" :options="projects"
                              stack-label options-dense hide-dropdown-icon>
                              <template v-slot:append>
                                <q-icon name="fa-solid fa-angle-down" size="12px" />
                              </template></q-select>
                          </q-item-section>
                        </q-item>
                        <q-item>
                          <q-item-section>
                            <q-item-label class="q-pb-xs">Issue Type *</q-item-label>
                            <q-select dense label="Issue Type" outlined v-model="currentIssue.issue" :options="issues"
                              stack-label options-dense hide-dropdown-icon>
                              <template v-slot:append>
                                <q-icon name="fa-solid fa-angle-down" size="12px" />
                              </template></q-select>
                          </q-item-section>
                        </q-item>
                        <q-item>
                          <q-item-section>
                            <q-item-label class="q-pb-xs">Priority *</q-item-label>
                            <q-rating v-model="currentIssue.priority" size="2em" :max="5" color="primary">
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
                            <q-input v-model="currentIssue.description" filled type="textarea" autogrow />
                          </q-item-section>
                        </q-item>
                        <q-item>
                          <q-item-section>
                            <q-item-label class="q-pb-xs">Reporter</q-item-label>
                            <q-select dense outlined v-model="currentIssue.reporter" label="Reporter" :options="users"
                              stack-label options-dense hide-dropdown-icon>
                              <template v-slot:append>
                                <q-icon name="fa-solid fa-angle-down" size="12px" />
                              </template></q-select>
                          </q-item-section>
                        </q-item>
                        <q-item>
                          <q-item-section>
                            <q-item-label class="q-pb-xs">Assignee</q-item-label>
                            <q-select dense outlined v-model="currentIssue.assignee" label="Assignee" :options="users"
                              stack-label options-dense hide-dropdown-icon>
                              <template v-slot:append>
                                <q-icon name="fa-solid fa-angle-down" size="12px" />
                              </template></q-select>
                          </q-item-section>
                        </q-item>
                        <q-item>
                          <q-item-section>
                            <q-item-label class="q-pb-xs">Status</q-item-label>
                            <q-select dense outlined v-model="currentIssue.status" label="Status" :options="statuses"
                              stack-label options-dense hide-dropdown-icon>
                              <template v-slot:append>
                                <q-icon name="fa-solid fa-angle-down" size="12px" />
                              </template></q-select>
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-card-actions class="text-primary justify-end q-mr-sm">
                        <q-btn no-caps flat label="Cancel" v-close-popup />
                        <q-btn no-caps label="Save" color="primary" v-close-popup @click="saveIssue()" />
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
import AppToolbar from '../components/AppToolbar.vue'
import TicketService from '../services/TicketService';
import ProjectService from '../services/ProjectService';
import { ref } from 'vue'

export default {

  name: 'Dashboard',
  components: {
    AppToolbar
  },
  setup() {
    const text = ref('')
    const search = ref(null)

    return {
      loading: ref(true),
      project: ref(null),
      issue: ref(null),
      priority: ref(0),
      description: ref(null),
      reporter: ref(null),
      assignee: ref(null),
      status: ref('Planning'),
      exportDepositsTable: '',
      text,
      search,
      filter: "",
      mode: "list",
      deposit: {},
      pagination: {
        rowsPerPage: 10
      },
      currentIssue: {
        createdAt: null,
        description: null,
        id: null,
        issue: null,
        priority: null,
        project: null,
        reporter: null,
        assignee: null,
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
        "Task",
        "Bug",
        "Error",
      ],
      users: ['Anthony Dube', 'Test User'],
      statuses: ['Planning', 'To Do', 'In Progress', 'In Review', 'Done'],
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
          name: "assignee",
          label: "Assignee",
          align: "left",
          field: "assignee",
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
    navigateTo(route) {
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
        params['assignee'] = this.assignee;
        params['status'] = this.status;

        await TicketService.createTicket(params);
        this.clear();
        await this.getData();
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    async getData() {
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
        this.currentIssue.priority = data.priority;
        this.currentIssue.description = data.description;
        this.currentIssue.reporter = data.reporter;
        this.currentIssue.assignee = data.assignee;
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
        params['priority'] = this.currentIssue.priority;
        params['description'] = this.currentIssue.description;
        params['reporter'] = this.currentIssue.reporter;
        params['assignee'] = this.currentIssue.assignee;
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
    clear() {
      this.project = null;
      this.issue = null;
      this.priority = null;
      this.description = null;
      this.reporter = null;
      this.assignee = null;
      this.status = null;
    },
    async getProjects() {
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
  async mounted() {
    await this.getData();
    await this.getProjects();
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