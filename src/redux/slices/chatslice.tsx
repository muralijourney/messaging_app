import { createSlice } from '@reduxjs/toolkit'


const users = ["Murali", "Mukesh", 'Chris', 'Kevin', 'Sudhanshu', 'Kuladip', 'Ben', 'Brian']
const initialState = {
  test: false,
  loading: 'idle',
  fetchData: {},
  messageInsertStatus: false,
  message: [],
  selectedUserName: {},
  currentUser: null,

  allUsers: Array(users.length).fill(null).map((_, index) => ({
    name: users[index],
    image: "https://picsum.photos/200",
    lastMessage: '',
    count: 1,
    time: '00:00',
    id: index + 1
  }))
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
