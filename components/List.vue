<template>
    <div>
        <ul class="task-list">
            <li class="task" :key="list.id" v-for='list in lists'>
                <div class="content">
                <span> {{ list.data.title }}</span><span>{{ list.data.description }}</span>
                </div>
                <div class="action">
                <!-- <button style="background: blue;" @click="updateItem(list.id)">Update</button> -->
                <button style="background: #bcbdee;"><nuxt-link :to="'update/'+list.id">Update</nuxt-link></button>
                <button style="background: red;" @click=deleteItem(list.id)>Delsete</button>                
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import firebaseInit from '../plugins/firebaseinit'
    import {mapActions} from 'vuex'

    export default Vue.extend({
        name: 'List',
        created(){
            if(this.$store.state.memos.length == 0){
                this.$store.dispatch('getMemos').then(() =>{
                    this.lists = this.$store.state.memos
                })
                
            }else{
                this.lists = this.$store.state.memos
                
            }
        },
        data(){
            return {
                lists:[],
                update: 'update/'
            }
        },
        methods:{
            ...mapActions([
                'getMemos',
            ]),
            clicked(){
                if(this.$store.state.memos.length == 0){
                this.$store.dispatch('getMemos').then(() =>{
                    console.log(this.$store.state.memos)
                })
                
            }else{
                console.log('Store')
                console.log(this.$store.state.memos)
            }
            },
            deleteItem(id: any){
                firebaseInit.collection('tasks').doc(id).delete().then(()=>{
                    this.lists = this.lists.filter(list => list.id != id)
                    this.$store.commit('setMemos', this.lists)
                    console.log(this.$store.state.memos)
                }).catch((error) => {
                console.error("Error removing document: ", error);
                });
            },
            updateItem(id: string|undefined){

                firebaseInit.collection('tasks').doc(id).get().then((doc) => {
                    if(doc.exists){
                        this.$emit('memo', doc.data())
                    }else{
                        console.log('No such data')
                    }
                })
            }
        }
    })
</script>

<style scoped>
button{
    border: none;
    padding: .75rem .5rem;
    border-radius: 5px;
    color: wheat;
    width: 12%;
    margin: 3px 10% ;
}

.task-list {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: space-between;
    flex-direction: column;
}

.task {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.content {
    width: 5rem;
    overflow: auto;
}

.action {   
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
}

button {
    opacity: .85;
    transition: all .25s;
    border: none;

}

button:hover {
    cursor: pointer;
    opacity: 1;
}

</style>