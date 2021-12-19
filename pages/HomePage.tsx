import React, { useEffect } from 'react';
import IPageProps from '../interfaces/page.interface';
import Header from "../components/modules/Header";
import SideBar from "../components/modules/Sidebar";
import Box from '@mui/material/Box';
import QuestionFilters from "../components/modules/QuestionFilters";
import Question from "../components/modules/Question"
import { useState } from 'react';
import firebase from '../firebase/index';
import QuestionObj from '../interfaces/question.interface';


const HomePage: React.FunctionComponent<IPageProps> = props => {
  const temp: QuestionObj[] = []
  const [questions, updateQuestions] = useState(temp)

  let questionList: QuestionObj[];

  useEffect(() => {
    const questionRef = firebase.database().ref('Questions')
    questionRef.on('value', (snapshot) => {
      const questionsVal = snapshot.val();
      questionList = [];
      // console.log(questions)
      for (let id in questionsVal) {
        if (!questionsVal[id].answers) {
          let tmp: string[];
          tmp = []
          questionsVal[id].answers = tmp;
        }
        questionList.push({ ...questionsVal[id], invisible: false });
      }
      updateQuestions(questionList)
    })
  }, []);

  //   const allQuestions = [
  //     {
  //       questionType: "conceptual",
  //       questionCount: 5,
  //       question: "What is css?",
  //       description: "Question description...",
  //       answers: [],
  //       ta: ""
  //     },
  //     {
  //       questionType: "administrative",
  //       questionCount: 4,
  //       question: "What will be in the midterm?",
  //       description: "Question description...",
  //       answers: ['Dude, it was yesterday'],
  //       ta: "James"
  //     }
  //   ]



  const filterQuestions = (value:string, category:string) => {
    console.log(`Value: ${value}\nCategory: ${category}`)
    if (value.toUpperCase() === '') {
      console.log('All options')
      updateQuestions(questions.map((e, i) => {
        return {...e, invisible: false}
      }))
    }
    else {
      updateQuestions(questions.map((e, i) => {
        let hidden = (e[category].toUpperCase() !== value.toUpperCase());
        return {...e, invisible: hidden}
      }))
    }
  }


  const questionsElem = questions.length ? questions.map((elem, index) => {
    // console.log(elem)
    return <Question question={elem} />
  }) : '';


  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar active={0} />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>

        <Header
          title="Questions"
          link="eddie.io/basicalgo/questions"
          subtitle='All questions submitted by students in Basic Algo appear here' />

        <div>
          <QuestionFilters update={filterQuestions} />
        </div>
        <div>
          {questionsElem}
        </div>
      </Box>
    </Box>

  );
}

export default HomePage;