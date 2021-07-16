import firebase from 'firebase'
import firebaseinit from '../plugins/firebaseinit'

export const state = () =>({
    user: 'User data',
    memos: [],
})

export const mutations = {
    setMemos(state: any, memos:[]){
        state.memos = memos
    },
    addMemo(state: any, memo: any){
        state.memos.push(memo)
    },
    // deleteMemo(state:any, newMemos: any){
    //     state.memos = newMemos
    // }
}

export const actions = {
   async getMemos(context: any){
    let lists: { id: string; data: firebase.firestore.DocumentData }[] = []
    await firebaseinit.collection('tasks').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    lists.push({id:doc.id, data:doc.data()})
                })            
    })
    context.commit("setMemos", lists)
   } 
}

export const getters = {
    getMemo(state: any){
        return state.memos.find((memo:any) =>{
            
        })
    }
}