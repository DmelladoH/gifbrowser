import { useContext } from 'react'
import GifsContext from 'context/GifsContext'

export default function useGifsGlobal () {
  return useContext(GifsContext).gifs
}
