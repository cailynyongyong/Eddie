import Homepage from "../components/modules/Homepage";
import BasicTable from "../components/modules/Table";

export default function Home() {
  return (
    <div>
      <Homepage />
      <div id="table">
        <BasicTable />
      </div>
    </div>
  );
}


/*
Stuff left to do:
1. Fix navbar coloring only questions
2. Make table dynamic
*/