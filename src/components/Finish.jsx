const Finish = ({restartQuiz}) => {

  const handleAgainClick = () => {
    restartQuiz()
  }
  
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="py-10">Congratulation You Finish the Quiz Successfully</h1> 
      <hr />
      <button className="py-1 px-2 bg-blue-500 text-white shadow rounded hover:opacity-80" onClick={handleAgainClick}>Again</button>
    </div>
  )
}


export default Finish