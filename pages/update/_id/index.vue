<template>
    <div>
        <UpdateForm />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Vuex from 'vuex'
    import UpdateForm from '../../../components/UpdateForm.vue';

    export default Vue.extend({
        layout: 'home',
        created(){
            const store = new Vuex.Store({
            state: {
            count: 0
            },
            mutations: {
            increment (state) {
                state.count++
            }
            }
        })
            console.log(store.state.count)
        },
        components:{
            UpdateForm
        },
        props:{
            memo:Object
        }
    })
</script>

<style scoped>

</style>