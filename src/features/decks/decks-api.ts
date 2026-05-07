import axios from 'axios'
import { DeckResponse } from './decksApi.types'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks() {
    return instance.get<DeckResponse>('/v2/decks')
  },
}
