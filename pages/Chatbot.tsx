import * as React from "react";
import Sidebar from "../components/modules/Sidebar";
import { Box, Typography } from "@mui/material";
import Header from '../components/modules/Header';
import ChatbotComponent from '../components/modules/ChatbotComponent';

// Page to customize chat bot 
export default function Chatbot() {
    return (
        <Box sx={{ display: 'flex' }}>

            {/* Links to other sites and profile info */}
            <Sidebar active={1} authenticated={true} />

            <Box
                margin='auto'
                maxWidth='60%'
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >

                {/* Header with page title, basic info, and link to class chatbot */}
                <Header
                    title='Chatbot'
                    subtitle='Use automated messages to engage with students'
                    link="eddie.io/basicalgo/questions"
                />
                
                {/* Create and customize chatbot */}
                <div style={{marginTop: '30px'}}>
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
                    
                    {/* Customization and creation */}
                    <ChatbotComponent text='Question Collector' button='Create' />
                </div>

            </Box>
        </Box>
    );
}