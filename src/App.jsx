import { useState } from "react"
import Card from "./components/Card"
import GetData from './data/GetData'


function App() {
  const data = GetData()
  const questions = data.questions
  const [currentIndex, setCurrentIndex ] = useState(0);

  const nextQuestion = () => {
    setCurrentIndex( currentIndex + 1 )
  }

  const restartQuiz = () => {
    setCurrentIndex(0)
  }

  return (
    <div className="bg-blue-400 h-screen flex justify-center items-center">
      <Card questions={questions} currentIndex={currentIndex} nextQuestion={nextQuestion} restartQuiz={restartQuiz}/>
    </div>
  )
}

export default App
