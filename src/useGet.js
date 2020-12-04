import { useReducer, useEffect } from 'react'
import axios from 'axios'


// funcao pura
const reducer = (state, action) => {
  if (action.type === 'REQUEST') {
    return {
      ...state, // spread operator, onde chama tudo que ta dentro do state operation
      loading: true
    }
  }

  if (action.type === 'SUCCESS') {
    return {
      ...state,
      loading: false,
      data: action.data
    }
  }
  // manipular meu estado
  return state
}

const useGet = url => {
  const [data, dispatch] = useReducer(reducer, {
    loading: true,
    data: {}


  })

  useEffect(() => {
    dispatch({ type: 'REQUEST' })
    axios
      .get(url)
      .then(res => {
        dispatch({ type: 'SUCCESS', data: res.data })
      })
  }, [])
  return data

}


export default useGet