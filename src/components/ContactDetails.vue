<template>
  <div>
    <div class="card">
      <ul class="list-group list-group-flush" v-if="contact">
        <li class="list-group-item"><i class="fas fa-user fa-fw"></i> {{ contact.first_name }} {{ contact.last_name }}</li>
        <li class="list-group-item"><i class="fas fa-envelope fa-fw"></i> {{ contact.email }}</li>
        <li class="list-group-item"><i class="fas fa-phone fa-fw"></i> {{ contact.number }}</li>
        <li class="list-group-item">
          <button class="btn btn-danger" @click="onDelete">Delete</button>
          <router-link :to="{name: 'add-contact', params: {id: contact.id}}">
            <button class="btn btn-primary">
              <i class="fa fa-pencil-alt"></i>
            </button>
          </router-link>
        </li>
      </ul>
      <div class="card-body" v-else>
        &larr; Please select a contact you want to see or click <router-link to="/add-contact">here</router-link> to create a new contact.
      </div>
    </div>
  </div>
</template>

<script>
import { contacts } from './../services/Contacts'

export default {
  props: ['contact'],

  methods: {
    onDelete() {
      contacts
      .deleteContact(this.contact.id)
      .then(response => this.$emit('contactDeleted', this.contact))
      .catch(err => console.log(err))
    }
  }
}
</script>
