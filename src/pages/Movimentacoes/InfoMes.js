import React from 'react'
import { useMesApi } from '../../api'


const InfoMes = ({ data }) => {
    const { infoMes, alterarMes } = useMesApi(data)

    const alterarPrevisaoEntrada = (evt) => {
        alterarMes({ previsao_entrada: evt.target.value })
    }
    const alterarPrevisaoSaida = (evt) => {
        alterarMes({ previsao_saida: evt.target.value })
    }

    if (infoMes.loading) {
        return <p>Carregando dados do mês...</p>
    }
    if (infoMes.data) {
        return (
            <div>
                Previsão entrada: {infoMes.data.previsao_entrada} <input type='text' onBlur={alterarPrevisaoEntrada}></input> / Previsão de saída: {infoMes.data.previsao_saidas}<input type='text' onBlur={alterarPrevisaoSaida}></input><br />
            Entrada: {infoMes.data.entradas} / Saídas: {infoMes.data.saidas}
            </div>
        )
    }
    return null
}

export default InfoMes