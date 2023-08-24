import {Col, Form, Row, Stack, Button} from "react-bootstrap"
import CreatableReactSelect from "react-select/creatable"

export default function NoteForm() {
    return (
        <Form>
            <Stack gap={4}>
            <Row>
                <Col>
                    <Form.Group controlID='title'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlID='Tags'>
                        <Form.Label>Title</Form.Label>
                        <CreatableReactSelect isMulti />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="markdown">
                <Form.Label>Body</Form.Label>
                <Form.Control required as='textarea' rows={15}/>
            </Form.Group>
            <Stack direction="horizontal" gap={2} className='justify-content-end'>
                <Button type='submit' variant='primary'>Save</Button>
                <Button variant='outline-secondary'>Cancel</Button>
            </Stack>
            </Stack>
        </Form>
    )
}