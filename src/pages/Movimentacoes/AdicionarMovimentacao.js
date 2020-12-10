import React, { useState } from 'react'

const AdicionarMovimentacao = ({salvarNovaMovimentacao}) => {

    // Gestão do formulário
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
            await salvarNovaMovimentacao({
                descricao,
                valor: parseFloat(valor)
            })            
            setDescricao('')
            setValor(0)
        }
    }

    return (
        <tr>
            <td>
                <input type='text' value={descricao} onChange={onChangeDescricao} />
            </td>
            <td>
                <input type='number' value={valor} onChange={onChangeValor} />
                <button className='ml-4 btn btn-success' onClick={salvarMovimentacao}>+</button>
            </td>
        </tr>
    )
}

export default AdicionarMovimentacao