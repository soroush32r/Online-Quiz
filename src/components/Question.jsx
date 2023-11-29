
const Question = ({handleNextQuestionClick, handleClick, clickedIndex, questions, currentIndex}) => {
  return (
    <>
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

        <hr />
        <div className="flex justify-between pt-5">
          <div><h1>{currentIndex + 1} of {questions.length} Questions</h1></div>
          <div>
            <button className={`py-1 px-2 bg-blue-500 text-white shadow rounded disabled:opacity-20`}
            disabled={clickedIndex === null}
            onClick={handleNextQuestionClick}>{currentIndex != questions.length - 1 ? 'Next Question' : 'Finish'}</button>
          </div>
        </div>
    </>
  )
}

export default Question