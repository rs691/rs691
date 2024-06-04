
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import aboutCityPic from '../images/aboutCityPic.png';
import contactPic from '../images/contactPic.png';
import projectsCard from '../images/projectsCard.png';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';





const projectData = [
  {
    id: 1,
    title: 'About Me',
    text: 'Where I am from, what I do, and where I am at.',
    image: aboutCityPic,
    link: '/about'
  },
  {
    id: 2,
    title: 'Contact Me',
    text: 'Feel free to reach out to me.',
    image: contactPic,
    link: '/contact'
  },
  {
    id: 3,
    title: 'Projects',
    text: 'A few of my projects',
    image: projectsCard,
    link: '/projects'
  },

];



function LayoutCard() {
  return (
    
    <div className='Container'>
    <Container>
    <Row xs={1} md={3} className="g-2">
      {projectData.map((project, idx) => (
        <Card key={idx} as={Link} to={project.link} className="text-decoration-none">
          <Card.Img variant="top" src={project.image} alt={project.title} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Row>
    </Container>
    </div>

  );
}
 export default LayoutCard;


