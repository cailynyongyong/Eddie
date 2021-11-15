import React from 'react';
import IPageProps from '../interfaces/page.interface';
import Header from "../components/modules/Header";
import SideBar from "../components/modules/Sidebar";
import Box from '@mui/material/Box';
import QuestionFilters from "../components/modules/QuestionFilters";
import Question from "../components/modules/Question"

const HomePage: React.FunctionComponent<IPageProps> = props => {
  const postObjects = [
    {
      questionType: "conceptual",
      questionCount: 5,
      question: "What is css?",
      description: "Question description...",
      answers: [],
      ta: ""
    }
  ];

  const questions = postObjects.map((elem, index) => {
    return <Question questionType={elem.questionType}
      questionCount={elem.questionCount}
      question={elem.question} description={elem.description}
      answers={elem.answers}
      ta={elem.ta} />
  });
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar active={0}/>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>

        <Header 
          title="Questions" 
          link="eddie.io/basicalgo/questions" 
          subtitle='All questions submitted by students in Basic Algo appear here'/>

        <br />
        <div>
          <QuestionFilters />
        </div>
        <div>
          {questions}
        </div>
      </Box>
    </Box>

  );
}

export default HomePage;