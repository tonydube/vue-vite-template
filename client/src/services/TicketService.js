import Api from './Api'

export default {
  getTicketById (params) {
    return Api().post('get-ticket-by-id', params)
  },
  getAllTickets () {
    return Api().get('get-all-tickets')
  },
  createTicket (params) {
    return Api().post('create-ticket', params)
  },
  updateTicket (params) {
    return Api().post('update-ticket', params)
  },
  deleteTicket (params) {
    return Api().post('delete-ticket', params)
  }
}