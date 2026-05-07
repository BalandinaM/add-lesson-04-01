import { useEffect } from 'react'
import s from './DecksList.module.css'
import { decksApi } from '../decks-api'
import { setDecksAC } from '../decks-reducer'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { DeckItem } from './DeckItem/DeckItem'

export const DecksList = () => {
  const decks = useAppSelector((state) => state.decksReducer.decks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    decksApi.getDecks().then((res) => dispatch(setDecksAC(res.data.items)))
  }, [dispatch])

  return (
    <ul className={s.list}>
      {decks.map((deck) => {
        return <DeckItem deck={deck} key={deck.id} />
      })}
    </ul>
  )
}
