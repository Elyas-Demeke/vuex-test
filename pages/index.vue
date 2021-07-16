<template>
  <div>
    <Form/>
    <List @memo="updateItem"/>
  </div>
</template>

<script>
import Form from '../components/Form';
import List from '../components/List'
import { mapState } from 'vuex'

export default {
  computed:{
    local(){
    mapState(['count'])
    },     
            // if(this.$store.state.memos.length == 0){
            //     alert('yes')
            //     this.$store.dispatch('getMemos')
            // }else{

            // }
  },
  layout: "home",
  components: {
    Form,
    List
    },
  data(){
    return {
      title: '',
      description: '',
    }
  },
  methods:{
    
    updateItem(memo){
      console.log(memo)
      this.$router.push(
        {
          path: '/update/'+memo.title,
          params: memo
        },


      )
    }
  }
};
</script>
<style scoped>

</style>