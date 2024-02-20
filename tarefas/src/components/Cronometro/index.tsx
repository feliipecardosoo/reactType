import Botao from "../botao"
import Relogio from "./relogio"

export default function Cronometro() {
    return(
        <div>
            <p>Escolha um card e inicie o cronometro</p>
            <div>
                <Relogio/>
            </div>
            <Botao
              texto="Começar!"
              />  
        </div>
    )
}