import { combineReducers } from 'redux'
import chatSlice, { purgeChatSlice } from '../slices/chatslice'


const rootReducer = combineReducers({
  chat: chatSlice,
})

export default rootReducer

export const purgeStore = () => async (dispatch:any, getState:any) => {
  console.log('Purging...')
  console.log(getState())
  await dispatch(purgeChatSlice())
  console.log('Purged store')
  console.log(getState())
}
