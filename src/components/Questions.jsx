import { useState } from "react"

const Questions = ({ questions, currentIndex }) => {
  const [clickedIndex,setClickedIndex] = useState(null)

  const handleClick = (index) => {
    setClickedIndex(index)
  }

  return (
    <div className='px-5 py-3'>
      <div className='flex font-bold text-lg'>
        <h1 className="pr-2">
          {
            currentIndex + 1
          }. 
        </h1>
        <h1>
          {
            questions[currentIndex].title
          }  
        </h1>
      </div>

      <div>
        {questions[currentIndex].answers.map((item , index) => (
          <div key={item} 
            className={`py-2 px-3 my-5 border rounded cursor-pointer bg-blue-100 border-blue-300 
            ${!clickedIndex ? '' : 'cursor-auto'}  
            ${clickedIndex === index && clickedIndex === questions[currentIndex].correctAnswerIndex ? 'bg-green-300' : ''}
            ${clickedIndex === index && index !== questions[currentIndex].correctAnswerIndex ? 'bg-red-400 pointer-events-none' : ''} 
            ${clickedIndex !== index && clickedIndex !== null && index !== questions[currentIndex].correctAnswerIndex ? 'bg-red-200 pointer-events-none' : ''} 
            ${clickedIndex !== null && index === questions[currentIndex].correctAnswerIndex ? 'bg-green-300 pointer-events-none' : ''} 
          `}
            onClick={() => handleClick(index)}
          >{item}</div>
        ))}
      </div>
    </div>
  )
}

export default Questions