import "bootstrap/dist/css/bootstrap.min.css";
import {useLocalStorage} from "./components/UseLocalStorage"
import { Container } from "react-bootstrap";
import {Routes, Route, Navigate } from "react-router-dom"
import NewNote from "./components/NewNote"

export type Note = {
  id: string 
} & NoteData

export type RawNote = {
  id:string
}

export type RawNotesData = {
  id: string
  markdown: string
  tagIds: string[]
}
  
export type NoteData = {
  title: string
  markdown: string
  tags : Tag[]
}
export type Tag ={
  id: string
  label: string
}
function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>('NOTES', [])
  const [tags, SetTags] = useLocalStorage<Tag[]>('TAGS', [])
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
