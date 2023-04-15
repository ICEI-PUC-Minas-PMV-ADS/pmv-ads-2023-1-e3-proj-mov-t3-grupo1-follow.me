import './styles/global.css'
import { Atividade } from "./components/Atividade"

function App() {
  return (
    <div>
   <Atividade completed={3}/>
   <Atividade completed={13}/>
   <Atividade completed={23}/>
   <Atividade completed={33}/>
   <Atividade completed={43}/>
   <Atividade completed={53}/>
   </div>
  )
}

export default App
