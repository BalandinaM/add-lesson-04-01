import { Dispatch } from 'redux'
import { decksApi } from './decks-api'
import { addDecksAC, setDecksAC } from './decks-reducer'

export const fetchDecksTC = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await decksApi.getDecks()
      dispatch(setDecksAC(response.data.items))
    } catch (error) {
      console.error(error)
    }
  }
}

export const addDecksTC = (name: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await decksApi.addDecks(name)
      dispatch(addDecksAC(response.data))
    } catch (error) {
      console.error(error)
    }
  }
}
