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
    addMessage: (state: any, action: any) => {
     if(state.message.length == 0){
       // Empty Array added
        state.message.push({"key":action.payload.key,"messages":[action.payload.text]})
      }else{
        for (var i = 0; i < state.message.length; i++) {
          if (state.message[i].key.includes(action.payload.key)) {
            //array update
            state.message[i].messages.push(action.payload.text)
           }else{
            // new chat to creeate new  
            let exists = state.message.filter((item:any) => item.key == action.payload.key);
            if(exists.length == 0){
              state.message.push({"key":action.payload.key,"messages":[action.payload.text]});
              break;
            }
          }
        }
      }

      console.log('>>>>>>>>>>><<<<<<<<<,'+JSON.stringify(state.message));

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
