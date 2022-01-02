import React, { useEffect, useState } from 'react';
import firebase, { auth } from '../firebase/index';
import Box from '@mui/material/Box';
import IPageProps from '../interfaces/page.interface';
import SignUp from '../auth/SignUpPage';
import QuestionObj from '../interfaces/question.interface';
import Header from "../components/modules/Header";
import SideBar from "../components/modules/Sidebar";
import QuestionFilters from "../components/modules/QuestionFilters";
import Question from "../components/modules/Question";

// id of course, temp measure
// eventually the page will determine what courses to load depending on the professor
// currently logged in
export const id = '-MriCZgPemTZqde40xSa';


// Home page with course questions
const HomePage: React.FunctionComponent<IPageProps> = props => {

  const [authenticated, updateAuthentication] = useState(auth.currentUser ? true : false);

  // hold the questions data for each course
  const [questions, updateQuestions] = useState([]);
  // hold ta data
  const [tas, updateTAs] = useState([])

  // Once content loads, request database for stored questions
  useEffect(() => {
    // load questions from db
    const coursesRef = firebase.database().ref('Courses');

    coursesRef.on('value', (snapshot) => {
      const coursesVal = snapshot.val();
      updateTAs(coursesVal[id]['tas']);

      const questions_db = coursesVal[id]['questions']
      // console.log(questions_db)

      // convert stored question objects to objects usable by front end
      const questionList = questions_db.map((elem, index) => {
        // firebase doesn't store empty lists, needed to avoid errors later
        if (!elem.answers) {
          elem.answers = [];
        }

        // invisible field determines if display: none; (for filtering questions)
        return { ...elem, invisible: false }
      });

      updateQuestions(questionList)

    });
    updateAuthentication(auth.currentUser ? true : false);
  }, []);

  // manage filters to set questions visible/invisible
  const [filters, updateFilters] = useState({
    questionType: undefined,
    answered: undefined
  });


  // Manages display of questions based on the filtering options
  const filterQuestions = (category: string, filter: string | boolean | undefined) => {
    // update filters, undefined encodes all options
    updateFilters(() => {
      filters[category] = filter;
      return filters;
    })

    // reset visibility of all questions before applying new filters
    updateQuestions(questions.map((elem) => {
      elem.invisible = false;
      return elem;
    }))

    // apply questionType filter
    if (filters.questionType !== undefined) { // undefined encondes no filters need to be applied
      updateQuestions(questions.map((elem) => {
        elem.invisible = elem.invisible || elem.questionType !== filters.questionType;
        return elem;
      }))
    }

    // apply answered filter
    if (filters.answered !== undefined) {
      updateQuestions(questions.map((elem) => {
        elem.invisible = elem.invisible || elem.answered !== filters.answered;
        return elem;
      }))
    }
  }

  // Assign a ta to a question
  const assignTas = (question_id: number, ta: { name: string, email: string }) => {
    // update local values
    // add 1 question to TA
    updateTAs(tas.map((elem) => {
      elem.email === ta.email ? elem.assignedQuestions += 1 : '';
      return elem;
    }));

    // update local questions
    // assign question to ta
    updateQuestions(questions.map((elem) => {
      elem.id === question_id ? elem.ta = { name: ta.name, email: ta.email } : '';
      return elem
    }));

    // get course database from firebase
    const courseRef = firebase.database().ref('Courses').child(id);

    // update database values
    courseRef.update({
      tas: tas,
      questions: questions.map((elem) => {
        return { ...elem, invisible: [] }
      })
    });


  }

  // Add answer to questions
  const addAnswer = (question_id: number, account: {name: string, email: string}, answer: string, answered: boolean) => {
    // update questions locally
    updateQuestions(questions.map((elem) => {
      if (question_id === elem.id) {
        elem.answers.push({ answer: answer, author: account });
        elem.answered = answered;

        // if answered and assigned to TA, reduces that TA's question count
        answered && elem.ta.name ? updateTAs(tas.map((e) => {
          e.email === elem.ta.email ? e.assignedQuestions-- : '';
          return e;
        })) : '';
      }

      return elem;
    }));

    // update firebase
    const courseRef = firebase.database().ref('Courses').child(id);

    // update database values
    courseRef.update({
      tas: tas,
      questions: questions.map((elem) => {
        return { ...elem, invisible: [] } // firebase won't store empty array
      })
    });

  }

  // log in user
  const signIn = () => {
    updateAuthentication(true);
    console.log(authenticated);
  }

  // map all posted questions to the Question React module
  const questionsElem = questions.map((elem, index) => {
    return <Question question={elem} tas={tas} update={assignTas} addAnswer={addAnswer} />
  });


  return (
    <Box sx={{ display: 'flex' }}>

      {/* Links to other sites and profile info */}
      <SideBar active={0} authenticated={authenticated} authenticate={signIn}/>

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>

        {/* Header with page title, basic info, and link to class chatbot */}
        <Header
          title="Questions"
          link="eddie.io/basicalgo/questions"
          subtitle='All questions submitted by students in Basic Algo appear here'
        />

        <div>
          {/* Filters to manage which questions get displayed */}
          {authenticated ? <QuestionFilters update={filterQuestions} /> : <SignUp authenticate={signIn} />}
        </div>
        <div>
          {/* List of question react objects to display */}
          { authenticated ? questionsElem : ''}
        </div>
      </Box>
    </Box>

  );
}

export default HomePage;