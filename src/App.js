import { useEffect, useState } from "react";
import db from "./firebase";
import firebase from "../node_modules/firebase/compat";

function App() {
  const [todos, setTodos] = useState(["Read books 📚", "Do some workout 🏏"]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data().todo));
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); //will stop refresh the page

    //add todo to database
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput(""); //clear up the input after clicking add todo button
    //console.log(todos);

    //ok button
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>Hi Iam Danuka Thimira 🚀</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button disabled={!input} type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li
            style={{
              fontSize: "20px",
              fontFamily: "sans-serif",
              padding: "10px",
              listStyle: "none",
            }}
          >
            {todo.todo}
            <button
              onClick={(event) => db.collection("todos").doc(todo.id).delete()}
              style={{ marginLeft: "15px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
