import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from '../reducers/index'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default function configureStore(initialState, history) {
//   const middleware = [thunk]
//   const store = createStore(persistedReducer, applyMiddleware(...middleware))
//   const persistor = persistStore(store)
//
//   // persistor.purge()
//
//   return { store, persistor }
// }

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export let persistor = persistStore(Store)
