import Api from './Api'

export default {
  getAllProjects () {
    return Api().get('get-all-projects')
  },
  createProject (params) {
    return Api().post('create-project', params)
  },
  deleteProject (params) {
    return Api().post('delete-project', params)
  }
}