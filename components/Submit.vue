<template>
    <div>
        <button type="submit">Submit</button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'Submit',
    })
</script>

<style scoped>
button{
  border-radius: 13px;
  padding: 12px;
  background: #13131f;
  color: azure;
}
div{
  display: flex;
  justify-content: start;
  align-items: center;
}
</style>