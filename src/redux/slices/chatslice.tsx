import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  test: false,
  loading: 'idle',
  fetchData: {},
  messageInsertStatus: false,
  message: [],
  selectedUserName: {},
  currentUser: null,
  allUsers: [
    {
      name: "MuraliTharan",
      message: 'Hi Murali',
      count: 1,
      id: 0
    },
    {
      name: "Mukesh",
      message: 'Hi Mukesh',
      count: 3,
      id: 1
    },
    {
      name: "Chris",
      message: 'Hi Chirs',
      count: 3,
      id: 2
    }
  ]
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
    loggedInUser: (state: any, action: any) => {
      state.currentUser = action.payload;
    },
    fetchComplete(state: any, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.fetchData = action.payload
      }
    },
    addMessage: (state: any, params: any) => {
      state.message.push(params)
    },
    selectedName: (state, action) => {
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
  loggedInUser
} = actions

export default reducer
