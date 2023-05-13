import { configureStore } from '@reduxjs/toolkit'
import testReducer from '../features/test/testSlice'

export default configureStore({
  reducer: {
    test: testReducer
  }
})