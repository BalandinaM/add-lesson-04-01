import { CreateDeckResponse, Deck } from './decksApi.types'

const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState
export type SetDecksAction = ReturnType<typeof setDecksAC>
export type AddDecksAction = ReturnType<typeof addDecksAC>

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'set_decks': {
      return {
        ...state,
        decks: action.payload.decks,
      }
    }
    case 'add_decks': {
      console.log(state.decks.length)
      const newState = {
        ...state,
        decks: [{ ...action.payload.deck, isFavorite: false }, ...state.decks],
      }
      console.log(newState.decks.length)
      return newState
    }
    default:
      return state
  }
}

type DecksActions = SetDecksAction | AddDecksAction

export const setDecksAC = (decks: Deck[]) =>
  ({
    type: 'set_decks',
    payload: {
      decks,
    },
  }) as const

export const addDecksAC = (deck: CreateDeckResponse) =>
  ({
    type: 'add_decks',
    payload: {
      deck,
    },
  }) as const
