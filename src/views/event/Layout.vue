<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <div id="nav">
            <router-link :to="{ name: 'EventDisplay' }"
              >Details</router-link
            >
            |
            <router-link :to="{ name: 'EventRegister' }"
              >Register</router-link
            >
            |
            <router-link :to="{ name: 'EventEdit' }"
              >Edit</router-link
            >
          </div>

          <router-view :event="event"/>
    </div>
</template>

<script>
    import EventService from '@/services/EventService.js'
export default {
    props:['id'],
    data(){
        return{
            event:null,
        }
    },
    created(){
        EventService.getEvent(this.id)
        .then(response => {
            this.event = response.data
        })
        .catch(error =>{
            console.log(error)
        })
    }
}
</script>

<style scoped>

</style>