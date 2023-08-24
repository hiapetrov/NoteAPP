import { FormEvent, useRef } from "react"
import {Col, Form, Row, Stack, Button} from "react-bootstrap"
import CreatableReactSelect from "react-select/creatable"
import { Link } from "react-router-dom"

export default function NoteForm( { onSubmit } ) {
    const titleRef = useRef<HTMLInputElement>(null)
    const markdownRef = useRef<HTMLTextAreaElement>(null)

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Stack gap={4}>
            <Row>
                <Col>
                    <Form.Group controlId='title'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control ref={titleRef} required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId='Tags'>
                        <Form.Label>Title</Form.Label>
                        <CreatableReactSelect isMulti />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="markdown">
                <Form.Label>Body</Form.Label>
                <Form.Control ref={markdownRef} required as='textarea' rows={15}/>
            </Form.Group>
            <Stack direction="horizontal" gap={2} className='justify-content-end'>
                <Button type='submit' variant='primary'>Save</Button>
                <Link to='..'>
                <Button variant='outline-secondary'>Cancel</Button>
                </Link>
            </Stack>
            </Stack>
        </Form>
    )
}