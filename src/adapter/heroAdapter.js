export const nextIndex = () => ({type: 'NEXT_INDEX'})
export const prevIndex = () => ({type: 'PREV_INDEX'})
const fetchHeroes = (heroes) => ({type: 'FETCH_HEROES', payload: heroes})

export const getHeroes = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/heroes")
      .then(res => res.json())
      .then(heroesJSON => dispatch(fetchHeroes(heroesJSON)) )
  }
}