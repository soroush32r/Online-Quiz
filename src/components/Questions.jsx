import { useState } from "react"
import Question from './Question'
import Finish from "./Finish"

const Questions = ({ questions, currentIndex, nextQuestion, restartQuiz }) => {
  const [clickedIndex,setClickedIndex] = useState(null)

  const handleClick = (index) => {
    setClickedIndex(index)
  }

  const handleNextQuestionClick = () => {
    nextQuestion()
    if (currentIndex < questions.length - 1){
      setClickedIndex(null)
    }
  }

  return (
    <div className='px-5 py-3'>
      {currentIndex < questions.length ? 
      <Question handleNextQuestionClick={handleNextQuestionClick} handleClick={handleClick} clickedIndex={clickedIndex} currentIndex={currentIndex} questions={questions} /> : <Finish restartQuiz={restartQuiz} /> }
      
    </div>
  )
}

export default Questions