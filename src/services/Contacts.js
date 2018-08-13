import axios from 'axios'

export default class Contacts {
  constructor () {
    axios.defaults.baseURL = 'http://localhost:3000/api/'
  }

  getAll () {
    return axios.get('contacts')
  }

  get(id) {
    return axios.get(`contacts/${id}`)
  }

  edit(contact) {
    return axios.put(`contacts/${contact.id}`, contact)
  }

  addContact(contact) {
    return axios.post('contacts', contact);
  }

  deleteContact(id) {
    return axios.delete(`contacts/${id}`) // isto kao 'contacts/'  + id
  }
}

export const contacts = new Contacts()
