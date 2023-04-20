import { useState } from "react";
import styled from "styled-components";


function App() {
  const[username, setUsername] = useState("")
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value)
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  return (
  <div>
    <form onSubmit={onSubmit}>
      <input value={username} onChange={onChange} type="text" placeholder="user name" />
    </form>
  </div>
  );
}

export default App;