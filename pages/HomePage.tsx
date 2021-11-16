import React from 'react';
import IPageProps from '../interfaces/page.interface';
import Header from "../components/modules/Header";
import SideBar from "../components/modules/Sidebar";
import Box from '@mui/material/Box';
import QuestionFilters from "../components/modules/QuestionFilters";
import Question from "../components/modules/Question"
import { useState } from 'react';


const HomePage: React.FunctionComponent<IPageProps> = props => {
  const allQuestions = [
    {
      questionType: "conceptual",
      questionCount: 5,
      question: "What is css?",
      description: "Question description...",
      answers: [],
      ta: ""
    },
    {
      questionType: "administrative",
      questionCount: 4,
      question: "What will be in the midterm?",
      description: "Question description...",
      answers: ['Dude, it was yesterday'],
      ta: "James"
    }
  ]



  const [questions, updateQuestions] = useState(allQuestions)

  const filterQuestionType = (v) => {
    // console.log(v)
    if (v === 1) {
      updateQuestions(allQuestions)
    }
    else if (v === 2) {
      updateQuestions(allQuestions.filter((elem) => elem.questionType.toUpperCase() === 'ADMINISTRATIVE'))
    }
    else {
      updateQuestions(allQuestions.filter((elem) => elem.questionType.toUpperCase() === 'CONCEPTUAL'))
    }
  }

  const filterQuestionStatus = (v) => {
    // console.log(v)
    if (v === 1) {
      updateQuestions(allQuestions)
    }
    else if (v === 2) {
      updateQuestions(allQuestions.filter((elem) => elem.answers.length))
    }
    else {
      updateQuestions(allQuestions.filter((elem) => !elem.answers.length))
    }
  }


  const questionsElem = questions.map((elem, index) => {
    return <Question questionType={elem.questionType}
      questionCount={elem.questionCount}
      question={elem.question} description={elem.description}
      answers={elem.answers}
      ta={elem.ta} />
  });


  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar active={0} />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>

        <Header
          title="Questions"
          link="eddie.io/basicalgo/questions"
          subtitle='All questions submitted by students in Basic Algo appear here' />

        <br />
        <div>
          <QuestionFilters updateType={filterQuestionType} updateStatus={filterQuestionStatus}/>
        </div>
        <div>
          {questionsElem}
        </div>
      </Box>
    </Box>

  );
}

export default HomePage;