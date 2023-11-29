import { useState } from 'react';

const GetData = () => {
  const [questions, setQuestions] = useState([
    {
      id: 0,
      title : 'What does HTML stand for?',
      answers : ['Hyper Text Preprocessor', 'Hyper Text Markup Language', 'Hyper Text Multiple Language', 'Hyper Tool Multi Language'],
      correctAnswerIndex : 1
    },
    {
      id: 1,
      title : 'Who is making the Web standards?',
      answers : ['Mozilla','Microsoft','The World Wide Consortium','Google'],
      correctAnswerIndex : 2
    },
    {
      id: 2,
      title : 'Choose the correct HTML element for the largest heading:',
      answers : ['<h1>','<head>','<heading>','<h6>'],
        correctAnswerIndex : 0
    },
    {
      id: 3,
      title : 'What is the correct HTML element for inserting a line break?',
      answers : ['<lb>','<br>','<break>'],
      correctAnswerIndex : 1
    }
  ]);

  const setData = (title, answers, correctAnswerIndex) => {
    setQuestions(prevQuestions => [
      ...prevQuestions,
      {
        id: questions.length + 1 ,
        title,
        answers,
        correctAnswerIndex
      }
    ]);
  };

  return {
    questions,
    setData
  };
};

export default GetData;
