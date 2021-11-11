import QuestionsHeader from "../components/modules/QuestionsHeader";
import SideBar from "../components/modules/Sidebar";
import Box from '@mui/material/Box';
import drawerWidth from "../components/modules/Sidebar";
import windowDimensions from "../components/modules/Sidebar";
import Filters from "../components/modules/Filters";
import Question from "../components/modules/Question"

export default function Home() {
  const postObjects = [
    {
      questionType : "conceptual",
      questionCount : 5,
      question : "What is css?",
      description : "Question description...",
      answers : [],
      ta : ""
    }
  ];

  const questions = postObjects.map((elem, index) => {
    return <Question questionType={elem.questionType} 
                     questionCount={elem.questionCount} 
                     question={elem.question} description={elem.description} 
                     answers={elem.answers}
                     ta={elem.ta}/>
  });

  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Box width="100%" paddingTop="60px">
        <div>
          <QuestionsHeader course="Basic Algorithms" link="eddie.io/basicalgo/questions" />
        </div>
        <div>
          <Filters />
        </div>
        <div>
          {questions}
        </div>
      </Box>
    </Box>
  );
}