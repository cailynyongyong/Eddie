import * as React from "react";
import Sidebar from "../components/modules/Sidebar";
import Box from "@mui/material/Box";
import Header from '../components/modules/Header';
import Typography from '@mui/material/Typography';
import ChatbotComponent from '../components/modules/ChatbotComponent';

export default function Chatbot() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar active={1} />
            <Box 
                margin='auto' 
                maxWidth='60%' 
                component='main' 
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Header
                    title='Chatbot'
                    subtitle='Use automated messages to engage with students'
                    link="eddie.io/basicalgo/questions"
                />

                <div>
                    <Typography 
                        component='h6' 
                        variant='h6'
                        style={{
                            color: '#2361FF',
                            paddingLeft: '24px',
                            marginTop: '20px'
                        }}
                    >
                        Create Chatbot
                    </Typography>
                </div>

                <ChatbotComponent text='Question Collector' button='Create'/>

            </Box>
        </Box>
    );
}