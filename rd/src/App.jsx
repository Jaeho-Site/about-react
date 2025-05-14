import "./App.css";
import { useState,useEffect } from "react";
import useInput from "./hooks/useInput";

function App() {
  const [title,onChnageTitle]=useInput();
  const [body,onChnageBody]=useInput();

  return (
    <> 
    <input type="text" value={title} onChange={onChnageTitle} />
    <input type="text" value={body} onChange={onChnageBody}  />
    </>
  )
}

export default App;