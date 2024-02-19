import React from "react";

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
        tarefa: 'Namorar a Leticia',
        tempo: 'A vida toda'
    }
]
    return(
        <aside>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista