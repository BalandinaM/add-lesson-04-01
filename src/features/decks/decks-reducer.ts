import { Deck } from './decksApi.types'

const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState
export type SetDecksAction = ReturnType<typeof setDecksAC>

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'set_decks': {
      return {
        ...state,
        decks: action.payload.decks,
      }
    }
    default:
      return state
  }
}

type DecksActions = SetDecksAction

export const setDecksAC = (decks: Deck[]) =>
  ({
    type: 'set_decks',
    payload: {
      decks,
    },
  }) as const
