import { createStore, compose, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

export default function configureStore(initialState) {
    const store = createStore(
        initialState,
         compose (
     applyMiddleware(ReduxPromise),
     window.devToolsExtension ? window.devToolsExtension() : f => f
   )
    )

    return store

}
