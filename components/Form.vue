<template>
    <div>
    <form @submit.prevent="submitHandler">
      <Title @titleSubmit="titleHandle" />
      <Description @descriptionSubmit="descriptionHandle"/>
      <Submit />
    </form>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Title from './Title.vue';
    import Description from './Description.vue';
    import Submit from './Submit.vue';
    import db from '../plugins/firebaseinit';
    

    export default Vue.extend({
       name: 'Form',
       data(){
           return{
               title:'',
               description:'',
           }
       },
       components: {
        Title,
        Description,
        Submit,
        },
        methods:{
            
            async submitHandler(){
            let memo = {title: this.title, description:this.description}
                    // db
            const docRef = db.collection("tasks").doc();
            const docId = docRef.id;
            await docRef.set(memo)
           .then( () => {
                    this.$store.commit('addMemo', {id:docId, data: memo})
            }).catch((error:any)=>{
                console.error("Error writing document:", error)
            })
            
            
            },
            titleHandle(titleValue: any){
                this.title = titleValue
            },
            descriptionHandle(descriptionValue: any){
                this.description = descriptionValue
            }
        }
    })
</script>

<style scoped>
form{
  width: 80%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
</style>