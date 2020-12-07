import React from 'react'
import Rest from './rest'
import Header from './elements/Header'
import Meses from './Meses'
import AdicionarMes from './AdicionarMes'

const baseURL = 'https://mymoney-development.firebaseio.com/'

const { useGet, usePost, useDelete } = Rest(baseURL)

function App() {
  //const data = useGet('movimentacoes/2020-12')
  const data = useGet('meses')
  //const [postData, post] = usePost('movimentacoes/2020-10')
  //const [deleteData, remove] = useDelete()

  const saveNew = () => {
    //post({ valor: 10, descricao: 'novo' })
  }

  const doRemove = () => {
    //remove('movimentacoes/2020-10/-MNjmTf3vLciQ3I7tRwd')
  }
  return (
    <div>
      <Header />

      <div className='container'>
        
        <Meses/>
        <AdicionarMes/>
      </div>
    </div>
  )
}

export default App
