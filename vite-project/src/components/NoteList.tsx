import {Col, Row, Stack, Button, Form} from "react-bootstrap"
import { Link, useNavigate} from "react-router-dom"
import ReactSelect from "react-select"
import { useState, useMemo } from "react"
import { Tag , Note} from "../App"
import { NoteCard } from "./NoteCard"

type NoteListProps = {
    availableTags: Tag[]
    notes: Note[]
}
export function Notelist({ availableTags, notes }: NoteListProps) {
    const [ selectedTags, setSelectedTags] = useState<Tag[]>([])  
    const [title, setTitle] = useState("")
    
    const filteredNotes = useMemo(() => {
        return notes.filter(notes => {
            return (title === "" || notes.title.toLowerCase().includes(title.toLowerCase())) 
            && (selectedTags.length === 0 || selectedTags.every( tag => notes.tags.some(noteTag => noteTag.id === tag.id)))
        })
    }, [title, selectedTags, notes]) 

    return (
        <>
        <Row className="align-items-center mb-4">
            <Col>
                <h1>Notes</h1>
            </Col>
            <Col xs="auto" >
                <Stack direction="horizontal" gap={2}>
                    <Link to="/new">
                        <Button variant="primary">Create</Button>
                        </Link>
                    <Button variant="outline-secondary">Edit Tags</Button>
                </Stack>
            </Col>
        </Row>
        <Form>
            <Row className="mb-4">
                <Col>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId='Tags'>
                        <Form.Label>Tags</Form.Label>
                        <ReactSelect 
                            value={selectedTags.map( tag => {
                                return { label: tag.label, value: tag.id }
                            })}
                            options={availableTags.map( tag => {
                                return { label: tag.label, value: tag.id }
                            })}
                            onChange={tags => {
                                setSelectedTags(tags.map( tag => {
                                return { label:tag.label, id: tag.value }
                            }))
                            }}
                             isMulti />
                    </Form.Group>
                </Col>
            </Row>
        </Form>
        <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
            {filteredNotes.map(note => (
                <Col key={note.id}>
                    <NoteCard/>
                </Col>
            ))}
        </Row>
        </>
    )
}
