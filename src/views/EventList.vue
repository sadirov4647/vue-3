<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Previous</router-link
      >

      <router-link
        id="page-next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next &#62;</router-link
      >
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import { watchEffect } from 'vue'
// import axios from 'axios'

export default {
  name: 'EventList',
  props:['page'],
  components: {
    EventCard
  },
  data() {
    return {
      events: null,
      totalEvents:0
    }
  },
  created() {
    watchEffect(() =>{
      this.events = null
    EventService.getEvents(2, this.page)
      // .get(
      //   'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3/events'
      // )
      .then(response => {
        this.events = response.data
        this.totalEvents = response.headers['x-total-count']
      })
      .catch(error => {
        console.log(error)
      })
    })
  },
  computed:{
    hasNextPage(){
      var totalPages  = Math.ceil(this.totalEvents / 2 )
      return this.page < totalPages
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
