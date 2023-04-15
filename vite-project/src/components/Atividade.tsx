interface AtividadeProps{
    completed: number
}

export function Atividade(props: AtividadeProps){
    return (
        
        <div className="bg-zinc-900 w-10 h-10 text-white rounded m-2 items-center justify-center">
            {props.completed}
        </div>
    )
}

//  w-10 h-10 text-white rounded m-2 items-center justify-center