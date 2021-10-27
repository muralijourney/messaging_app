import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  test: false,
  loading: 'idle',
  fetchData: {},
  messageInsertStatus:false,
  message:[],
  selectedUserName:{},
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    testDemo(state, action) {
      state.test = !state.test
    },
    fetchLoading(state, action) {
      if (state.loading === 'idle') state.loading = 'pending'
    },
    // addMessage(state:any, action:any) {
    //   console.log(state)
    //   state.verifications.push({
    //     completed: false,
    //     ...action.payload,
    //   })
    // },
  
    fetchComplete(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.fetchData = action.payload
      }
    },
    addMessage:(state:any,params:any) =>{
       console.log("asfkkdkdsakfkasdf"+JSON.stringify(params))
       state.message.push(params.payload[0])

    },
   selectedName:(state,action)=>{
    state.selectedUserName = action.payload;
    console.log("resule"+JSON.stringify(state.selectedUserName))
   },
    
    purgeChatSlice: state => initialState,
  },
})

const { actions, reducer } = chatSlice

export const {
  testDemo,
  fetchComplete,
  fetchLoading,
  addMessage,
  selectedName,
  purgeChatSlice,
} = actions

export default reducer
