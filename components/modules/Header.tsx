import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useRouter } from "next/router";

export default function ColorTabs() {
  const router = useRouter();
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        centered
      >
        <Tab onClick={() => router.push("/")} value="one" label="Questions" />
        <Tab onClick={() => router.push("/Students")} value="two" label="Students" />
        <Tab onClick={() => router.push("/Insights")} value="three" label="Insights" />
      </Tabs>
    </Box>
  );
}