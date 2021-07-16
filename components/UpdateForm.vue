<template>
    <div>
    <form @submit.prevent="submitHandler">
      <div>
        <label for="">Title</label>
        <input type="text" v-model="title" />
    </div>
      <div>
        <label for="">Description</label>
        <textarea name="" id="" cols="30" rows="10" v-model="description"></textarea>
    </div>
     <div>
        <button type="submit">Submit</button>
    </div>
    </form>
    </div>
</template>

<script lang="ts">
    import 'firebase'
    import Vue from 'vue'
    import Title from './Title.vue';
    import Description from './Description.vue';
    import Submit from './Submit.vue';
    import firebaseInit from '../plugins/firebaseinit';
    

    export default Vue.extend({
       name: 'Form',
       created(){
           let memos = this.$store.state.memos
           let mem: {id:String, data:any} = memos.find((memo: any) => 
               memo.id === this.$route.params.id
               )
           console.log(mem)
           this.title = mem.data.title
           this.description = mem.data.description
       },
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
                // firebaseInit
            await firebaseInit.collection('tasks').doc().set(memo).then(
                ()=>{
                    alert('Document successfully written')
            }).catch((error)=>{
                console.error("Error writing document:", error)
            })
            
             

            },
            titleHandle(titleValue: string){
                this.title = titleValue
            },
            descriptionHandle(descriptionValue: string){
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