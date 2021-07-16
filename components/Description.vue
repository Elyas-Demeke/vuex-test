<template>
    <div>
        <label for="">Description</label>
        <textarea name="" id="" cols="30" rows="10" v-model="description" v-on:blur="handleDescription"></textarea>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'Description',
        data(){
            return{
                description: ''
            }
        },
        methods:{
            handleDescription(){
                this.$emit('descriptionSubmit', this.description)
            }
        }
    })
</script>

<style scoped>
textarea{
  margin: 10px;
  border:1px solid black;
  border-radius: 13px;
}
div{
  display: flex;
  justify-content: start;
  align-items: center;
}

</style>