import { useState } from "react"
import Card from "./components/Card"
import GetData from './data/GetData'


function App() {
  const data = GetData()
  const questions = data.questions
  const [currentIndex, setCurrentIndex ] = useState(0);

  return (
    <div className="bg-blue-400 h-screen flex justify-center items-center">
      <Card questions={questions} currentIndex={currentIndex} />
    </div>
  )
}

export default App
