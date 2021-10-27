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
   fetchComplete(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.fetchData = action.payload
      }
    },
  addMessage:(state:any,params:any) =>{
    state.message.push(params)
  },
  selectedName:(state,action)=>{
    state.selectedUserName = action.payload;
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
