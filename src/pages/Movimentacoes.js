import { useState } from 'react'
import React from 'react'
import Rest from '../utils/rest'

const baseURL = 'https://mymoney-development.firebaseio.com/'

const { useGet, usePost, useDelete } = Rest(baseURL)

const Movimentacoes = ({ match }) => {
    const data = useGet(`movimentacoes/${match.params.data}`)
    const dataMeses = useGet(`meses/${match.params.data}`)
    const [postData, salvar] = usePost(`movimentacoes/${match.params.data}`)
    const [removeData, remover] = useDelete()
    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState('')

    const onChangeDescricao = evt => {
        setDescricao(evt.target.value)
    }

    const onChangeValor = evt => {
        setValor(evt.target.value)
    }

    const salvarMovimentacao = async () => {
        if (!isNaN(valor) && valor.search(/^[-]?\d+(\.)?\d+?$/) >= 0) {
            await salvar({
                descricao,
                valor: parseFloat(valor)
            })
            setDescricao('')
            setValor(0)
            data.refetch()
            dataMeses.refetch()
        }
    }

    const removerMovimentacao = async (id) => {
        await remover(`movimentacoes/${match.params.data}/${id}`)
        data.refetch()
        dataMeses.refetch()
    }

    return (
        <div className='container text-center'>
            <h1>Movimentacoes</h1>
            {
                !dataMeses.loading && 
                <div>
                Previsão entrada: {dataMeses.data.previsao_entrada} / Previsão de saída: {dataMeses.data.previsao_saidas}<br/>
                Entrada: {dataMeses.data.entradas} / Saídas: {dataMeses.data.saidas}
                </div>
            }
            <table className='table'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data &&
                        Object
                            .keys(data.data)
                            .map(movimentacao => {
                                return (
                                    <tr key={movimentacao}>
                                        <td>
                                            {data.data[movimentacao].descricao}
                                        </td>
                                        <td>
                                            {data.data[movimentacao].valor}
                                            <button className='ml-4 btn btn-danger' onClick={() => removerMovimentacao(movimentacao)}>-</button>
                                        </td>
                                    </tr>
                                )
                            })
                    }
                    <tr>
                        <td>
                            <input type='text' value={descricao} onChange={onChangeDescricao} />
                        </td>
                        <td>
                            <input type='number' value={valor} onChange={onChangeValor} />
                            <button className='ml-4 btn btn-success' onClick={salvarMovimentacao}>+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Movimentacoes