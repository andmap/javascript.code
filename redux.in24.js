const createStore = (yourReducer) => {
  let listeners = []
  let currentState = yourReducer(undefined, {})

  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = yourReducer(currentState, action)

      listeners.forEach((listener) => {
        listener()
      })
    },
    subscribe: (newListener) => {
      listeners.push(newListener)

      const unsubscribe = () => {
        listeners = listeners.filter((l) => l !== newListener)
      }

      return unsubscribe
    },
  }
}

const initialState = { count: 0 }

const actions = {
  increment: { type: 'INCREMENT' },
  decrement: { type: 'DECREMENT' },
}

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.increment.type:
      return {
        count: state.count + 1,
      }

    case actions.decrement.type:
      return {
        count: state.count - 1,
      }

    default:
      return state
  }
}

const store = createStore(countReducer)

store.subscribe(() => {
  const state = store.getState()
  console.log(state.count)
})

store.subscribe(() => {
  const state = store.getState()
  console.log(`this is cool, another listener: ${state.count}`)
})

store.dispatch(actions.increment)
store.dispatch(actions.increment)
