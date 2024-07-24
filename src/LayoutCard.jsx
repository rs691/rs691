
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import './master.css';





const projectData = [
  {
    id: 1,
    title: 'About Me',
    text: 'Where I am from, what I do, and where I am at.',
    link: '/about'
  },
  {
    id: 2,
    title: 'Contact Me',
    text: 'Feel free to reach out to me.',
    link: '/contact'
  },
  {
    id: 3,
    title: 'Projects',
    text: 'A few of my projects',
    link: '/projects'
  },
  {
    id: 4,
    title: 'Education',
    text: 'My educational background',
    link: '/education'
  }

];



function LayoutCard() {
  return (
    <>

      <header className="header">Portfolio</header>
      <Container className="main-content">
        <Row className="g-8">
          <Col xs={12} md={6} >
            {projectData.map((project) => (
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
    </>
  );
}

export default LayoutCard;


