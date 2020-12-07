import React from 'react'

const AdicionarMes = () => {
    return (
        <React.Fragment>
            <h2>Adicionar Mês</h2>

            <select>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
            </select>
            <select>
                <option value='01'>1</option>
                <option value='02'>2</option>
            </select>
            <button className='btn-success'>Adicionar Mês</button>
        </React.Fragment>
    )
}
export default AdicionarMes
