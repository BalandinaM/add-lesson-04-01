export type DeckResponse = {
  items: Deck[]
  pagination: DeckPagination
}

export type Deck = {
  isFavorite: boolean
  author: DeckItemAuthor
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

export type DeckItemAuthor = {
  id: string
  name: string
}

export type DeckPagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type CreateDeckResponse = Omit<Deck, 'isFavorite'>
