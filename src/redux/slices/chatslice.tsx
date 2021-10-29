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
      message: '',
      count: 1,
      time: '00:00',
      id: 1
    },
    {
      name: "Mukesh",
      message: '',
      count: 3,
      time: '00:00',
      id: 2
    },
    {
      name: "Chris",
      message: '',
      count: 3,
      time: '00:00',
      id: 3
    },
    {
      name: "Kevin",
      message: '',
      count: 4,
      time: '00:00',
      id: 4
    },
    {
      name: "Sudhanshu",
      message: '',
      count: 5,
      time: '00:00',
      id: 5
    },
    {
      name: "Kuladip",
      message: '',
      count: 6,
      time: '00:00',
      id: 6
    },
    {
      name: "Ben",
      message: '',
      count: 7,
      time: '00:00',
      id: 7
    },
    {
      name: "Brian",
      message: '',
      count: 8,
      time: '00:00',
      id: 8
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
    setLastMessage: (state: any, params: any) => {
      state.allUsers.map(function (val: any, index: any) {
        if (params.payload.id == val.id) {
          state.allUsers[index].message = params.payload.message.text
          state.allUsers[index].time = new Date().getHours() + ':' + new Date().getMinutes()
        }
      });
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
  setLastMessage,
  selectedName,
  purgeChatSlice,
  loggedInUser
} = actions

export default reducer
