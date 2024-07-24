import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import { Col, Container, Row } from 'react-bootstrap';

const project1Data = [
  {
    id: 1,
    title: 'Project 1',
    text: 'This was a form ',
    link: '/'
  }
  // {
  //   id: 2,
  //   title: 'Contact Me',
  //   text: 'Feel free to reach out to me.',
  //   link: '/contact'
  // },
  // {
  //   id: 3,
  //   title: 'Projects',
  //   text: 'A few of my projects',
  //   link: '/projects'
  // },
  // {
  //   id: 4,
  //   title: 'Education',
  //   text: 'My educational background',
  //   link: '/education'
  // }
];


function Project1() {
  return (
    <div>
      <h1>Project1</h1>
      <Container>
        <Row className="g-8">
          <Col xs={12} md={6} >
            {project1Data.map((project) => (
              <Card key={project.id} as={Link} to={project.link} className="card" style={{ width: '520px' }}>
                <Card.Body className='card-body'>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.text}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
          {/* <Col xs={12} md={6}  className="d-flex flex-column justify-content-center align-items-center"> */}
          <Col xs={12} md={6}  >
            <h1 className="right-side">My name is Robert and I hope to be a software developer.</h1>

            <h2 className="right-side-1">Thank you for looking.</h2>
            {/* </Col> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Project1;


