import { useState } from 'react'
import './App.css'

function App() {
  const [textInput, setTextInput] = useState("");
  const [list, setList] = useState(["Ready", "Set", "Go"]);

  return (
    <>
      <h1>Simple Title</h1>
      <form 
        onSubmit={(event) => {
          event.preventDefault();
          setList(list => [...list, textInput]);
          //setInputValue('');
        }}
      >
        <label htmlFor="textInput">Enter Your Text:</label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          value={textInput}
          onChange={(event) => {
          setTextInput(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {list.map((element, index, arr) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </>
  );
}

export default App



//Another example to handle 
//<form onSubmit={handleSubmit}>

//this would go above return
//function handleSubmit(event) {
  //event.preventDefault();
  //setTextInput([......list, textInput]);
//}