
import CardHeader from './CardHeader'
import Questions from './Questions'

const Card = ({ questions, currentIndex, nextQuestion, restartQuiz }) => {
  
  return (
    <div className="bg-gray-100 w-2/4 rounded shadow-2xl" id='Card'>
        <CardHeader progress={((currentIndex  / questions.length) * 100)} />
        <Questions questions={questions} currentIndex={currentIndex} nextQuestion={nextQuestion} restartQuiz={restartQuiz}/>
      </div>
  )
}

export default Card