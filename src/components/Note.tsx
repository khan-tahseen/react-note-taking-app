import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { useNote } from "./NoteLayout";
import { Link, useNavigate } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type NoteProps = {
    onDelete: (id: string) => void
}

export function Note({onDelete}: NoteProps) {
    const note = useNote();
    const navigate = useNavigate();

    return <>
    <Row className="align-items-center mb-4">
        <Col>
        <h2>{note.title}</h2>
        {note.tags.length > 0 && (
             <Stack gap={1} direction="horizontal" className="flex-wrap">
             {note.tags.map(tag => (
                 <Badge className="text-truncate" key={tag.id}>{tag.label}</Badge>
             ))}
         </Stack>
        )}
        </Col>
        <Col xs="auto">
            <Stack gap={2} direction="horizontal">
                <Link to={`/${note.id}/edit`}>
                <Button variant="primary" >Edit</Button>
                </Link>
                <Button variant="danger" onClick={() => {
                    onDelete(note.id)
                    navigate('/')
                }} >Delete</Button>
                <Button variant="secondary" href="/">Back</Button>
            </Stack>
        </Col>
    </Row>

    <ReactMarkdown>{note.markdown}</ReactMarkdown>
    
    </>
}