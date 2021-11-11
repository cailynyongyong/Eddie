import ListItem from "@mui/material/ListItem";
import {useRouter} from "next/router";
import ListItemText from "@mui/material/ListItemText"
import * as React from 'react';



interface Props {
  content: string,
  link: string;
}

export default function Button(props: Props) {

    const router = useRouter()
    return (
      <>
        <ListItem button key={props.content} onClick={() => 
                                        router.push(props.link)}>
            <ListItemText primary={props.content} />
        </ListItem>
      </>
    )
}

// There must be better way than using line 11 and 12
// Must learn to pass arguments