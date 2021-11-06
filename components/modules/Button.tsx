import ListItem from "@mui/material/ListItem";
import {useRouter} from "next/router";
import ListItemIcon from "@mui/material/ListItemIcon";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import ListItemText from "@mui/material/ListItemText"

export default function Button(content : any, icon: any) {
    const router = useRouter()
    content = content.content
    // icon = icon.icon
    console.log(icon)
    return (
        <ListItem button key={content} onClick={() => 
                                        router.push(content=="Questions" ? "/" : content)
                                        }>
            <ListItemIcon>
              {icon == 0 ? <QuestionAnswerIcon /> : icon == 1 ? <SupervisedUserCircleIcon /> : <BarChartIcon />}
            </ListItemIcon>
            <ListItemText primary={content} />
          </ListItem>
    )
}

// There must be better way than using line 11 and 12
// Must learn to pass arguments