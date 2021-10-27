import Homepage from "../components/modules/Homepage";
import BasicTable from "../components/modules/Table";
import styles from "../styles/Students.module.css";

export default function Home() {
  return (
    <div>
      <Homepage />
      <div id={styles.headers}>
        <a href="#" className={styles.active + ' ' + styles.btn}>Students</a>
        <a href="#" className={styles.btn}>Teaching Assistants</a>
      </div>
      <div className={styles.width}>
        <p>Manage which of your students receive messages from the chatbot</p>
      </div>
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
3. Make a button module with its own styles
4. Font
5. Refactor repetitive CSS
6. Unify CSS with rest of stuff
*/