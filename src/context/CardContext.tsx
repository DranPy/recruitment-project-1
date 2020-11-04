import React, { createContext, ReactNode, useContext, useReducer } from 'react'

import { Product } from 'types/Product'

type Action = { type: 'addProduct'; payload: Product } | { type: 'removeProduct'; payload: Product }
type Dispatch = (action: Action) => void
type State = { products: Product[] }

type CardProviderProps = { children: ReactNode }

const CardStateContext = createContext<State | undefined>(undefined)
const CardDispatchContext = createContext<Dispatch | undefined>(undefined)

function cardReducer(state: State, action: Action) {
  switch (action.type) {
    case 'addProduct': {
      return { products: [...state.products, action.payload] }
    }
    case 'removeProduct': {
      return { products: state.products.filter((product) => product.id !== action.payload.id) }
    }
    default: {
      throw new Error('Unhandled action type')
    }
  }
}

function CardProvider({ children }: CardProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(cardReducer, { products: [] })

  return (
    <CardStateContext.Provider value={state}>
      <CardDispatchContext.Provider value={dispatch}>{children}</CardDispatchContext.Provider>
    </CardStateContext.Provider>
  )
}

function useCardState(): State {
  const context = useContext(CardStateContext)

  if (context === undefined) {
    throw new Error('useCardState must be used within a CardProvider')
  }

  return context
}

function useCardDispatch(): Dispatch {
  const context = useContext(CardDispatchContext)

  if (context === undefined) {
    throw new Error('useCardDispatch must be used within a CardProvider')
  }

  return context
}

export { CardProvider, useCardState, useCardDispatch }
