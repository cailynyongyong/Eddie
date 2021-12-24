import React, { useEffect, useState } from 'react';
import firebase from '../firebase/index';
import Box from '@mui/material/Box';
import IPageProps from '../interfaces/page.interface';
import QuestionObj from '../interfaces/question.interface';
import Header from "../components/modules/Header";
import SideBar from "../components/modules/Sidebar";
import QuestionFilters from "../components/modules/QuestionFilters";
import Question from "../components/modules/Question";

// Home page with course questions
const HomePage: React.FunctionComponent<IPageProps> = props => {

  // hold the questions data for each course
  const [questions, updateQuestions] = useState([]);

  // Once content loads, request database for stored questions
  useEffect(() => {
    // load questions from db
    const questionRef = firebase.database().ref('Questions');

    questionRef.on('value', (snapshot) => {
      const questionsVal = snapshot.val();
      const questionList: QuestionObj[] = [];

      // for each question
      for (let id in questionsVal) {
        // firebase doesn't store empty lists, needed to avoid errors later
        if (!questionsVal[id].answers) {
          let tmp: string[];
          tmp = []
          questionsVal[id].answers = tmp;
        }
        // invisible field determines if display: none; (for filtering questions)
        questionList.push({ ...questionsVal[id], invisible: false });
      }
      updateQuestions(questionList)
    })
  }, []);

  // BUG: BOTH FILTERS DON'T WORK AT THE SAME TIME NEED TO UPDATE
  // Manages display of questions based on the filtering options
  const filterQuestions = (value: string, category: string) => {
    // '' encodes displaying all options
    if (value === '') {
      updateQuestions(questions.map((e, i) => {
        return { ...e, invisible: false }
      }))
    }
    else {
      updateQuestions(questions.map((e, i) => {
        // set invisible to true for all values that don't match
        let hidden = (e[category] !== value);
        return { ...e, invisible: hidden }
      }))
    }
  }

  // map all posted questions to the Question React module
  const questionsElem = questions.map((elem, index) => {
    return <Question question={elem} />
  });


  return (
    <Box sx={{ display: 'flex' }}>

      {/* Links to other sites and profile info */}
      <SideBar active={0} />

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>

        {/* Header with page title, basic info, and link to class chatbot */}
        <Header
          title="Questions"
          link="eddie.io/basicalgo/questions"
          subtitle='All questions submitted by students in Basic Algo appear here'
        />

        <div>
          {/* Filters to manage which questions get displayed */}
          <QuestionFilters update={filterQuestions} />
        </div>
        <div>
          {/* List of question react objects to display */}
          {questionsElem}
        </div>
      </Box>
    </Box>

  );
}

export default HomePage;