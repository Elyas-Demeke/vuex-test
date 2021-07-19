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
    updateMemo(state:any, mem:{id:String, data:Object}){
    // const record = state.memos.find( (memo: { id: String }) => memo.id === mem.id)
    state.memos = state.memos.map((memo: any) =>{
        if (memo.id === mem.id) {
            return Object.assign({}, memo, mem)
          }
          return memo
    })
    console.log(state.memos)
   }
   // deleteMemo(state:any, newMemos: any){
    //     state.memos = newMemos
    // }
}

export const actions = {
   async getMemos(context: any){
    let lists: { id: string; data: firebase.firestore.DocumentData }[] = []
    await firebaseinit.collection('tasks').get().then((querySnapshot:any) => {
                querySnapshot.forEach((doc:any) => {
                    lists.push({id:doc.id, data:doc.data()})
                })            
    })
    context.commit("setMemos", lists)
   },
   
}

export const getters = {
    getMemo(state: any){
        return state.memos.find((memo:any) =>{

        })
    }
}