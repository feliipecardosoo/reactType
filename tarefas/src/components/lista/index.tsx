import React from "react";
import style from './lista.module.scss'
import Item from "./item";

function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },
    {
        tarefa: 'Node',
        tempo: '00:30:00'
    },
    {
        tarefa: 'TypeScript',
        tempo: '01:40:00'
    }
]
    return(
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map((item, index) => (
                 <Item 
                    key={
                        index
                    }
                    {...item}
                 />
                ))}
            </ul>
        </aside>
    )
}

export default Lista