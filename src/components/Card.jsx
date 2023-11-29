
import CardHeader from './CardHeader'
import Questions from './Questions'

const Card = ({ questions, currentIndex }) => {
  return (
    <div className="bg-gray-100 w-2/4 rounded shadow-2xl" id='Card'>
        <CardHeader progress={30} />
        <Questions questions={questions} currentIndex={currentIndex}/>
      </div>
  )
}

export default Card