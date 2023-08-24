import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {Routes, Route, Navigate } from "react-router-dom"
import NewNote from "./components/NewNote"

type Note = {
  id: String 
} & NoteData

type NoteData ={
  title: String
  markdown: String
  Tag : Tags[]
}
type Tags ={
  id: String
  lable: String
}
function App() {

  return (
    <Container className="my=4">
      <Routes>
        <Route path="/" element={<h1>hello</h1>}/>
        <Route path="/new" element={<NewNote/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
      </Routes>
    </Container>
  )
}

export default App
