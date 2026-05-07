export type DeckResponse = {
  items: DeckItem[]
  pagination: DeckPagination
}

export type DeckItem = {
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
