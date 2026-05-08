import axios from 'axios'
import { CreateDeckResponse, DeckResponse } from './decksApi.types'

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
  addDecks(name: string) {
    return instance.post<CreateDeckResponse>('/v1/decks', { name })
  },
}
