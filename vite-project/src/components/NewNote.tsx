import { NoteData } from "../App"
import NoteForm from "./NoteForm"

export type NewNoteProps = {
    onSubmit : (data: NoteData) => void
}

export default function NewNote( { onSubmit }: NewNoteProps) {
    return (
        <>
        <h1>NewNote</h1>
        <NoteForm onSubmit={onSubmit}/>
        </>
    )
}