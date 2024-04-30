import React,{useState,useCallback} from 'react'
import QUESTION from '../question'
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from './Question';
import Summary from './Summary';
const Quiz = () => {
    
    const [userAnswers,setUserAnswers]=useState([]);
    const [answerState,setAnswerState]=useState('');
    const activeQuestionIndex=answerState===''? userAnswers.length: userAnswers.length-1;


    const quizIsComplete=activeQuestionIndex===QUESTION.length;

    const handleSelectAnswer=useCallback(function handleSelectAnswer(selectedAnswer){
        setAnswerState('answered');
        setUserAnswers((prevAnswer)=>{
            return [ ...prevAnswer,selectedAnswer];
        });

        setTimeout(()=>{
            if(selectedAnswer===QUESTION[activeQuestionIndex].answers[0]){
                setAnswerState('correct');
            }
            else{
                setAnswerState('wrong');
            }

            setTimeout(()=>{
                setAnswerState('');
            },2000);
        },1000);
    },[activeQuestionIndex]);
     

    const handleSkipAnswer=useCallback(
        ()=>handleSelectAnswer(null),[handleSelectAnswer]
    );

    if(quizIsComplete)
    {
        return <Summary userAnswers={userAnswers}/>
    }

   
    const question = QUESTION[activeQuestionIndex];
if (!question) {
    <div id="summary">
        <h1>Quiz Completed!</h1>
        <img src={quizCompleteImg} alt="Quiz Over" />
    </div>
}
    
  return (
    <div id="quiz">
        <Question
        key={activeQuestionIndex}
        questionText={QUESTION[activeQuestionIndex].text}
        answers={QUESTION[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswer}
        selectedAnswer={userAnswers[userAnswers.length-1]}
        answerState={answerState}
        onSkipAnswer={handleSkipAnswer}
        />
    </div>
  )
}

export default Quiz