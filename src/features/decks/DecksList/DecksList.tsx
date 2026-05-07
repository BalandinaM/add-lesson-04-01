import { useEffect } from 'react'
import s from './DecksList.module.css'
import { decksApi } from '../decks-api'

export const DecksList = () => {
  useEffect(() => {
    decksApi.getDecks().then((res) => console.log(res.data.items))
  }, [])
  return <ul className={s.list}></ul>
}
