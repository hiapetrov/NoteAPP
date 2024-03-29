import { NoteData , Tag} from "../App"
import NoteForm from "./NoteForm"

export type NewNoteProps = {
    onSubmit : (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

export default function NewNote( { onSubmit, onAddTag, availableTags }: NewNoteProps) {
    return (
        <>
        <h1 className="mb-4">NewNote</h1>
        <NoteForm 
            onSubmit={onSubmit}
            onAddTag={onAddTag}
            availableTags={availableTags}/>
        </>
    )
}