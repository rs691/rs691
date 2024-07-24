import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const linkStyle = {
  textDecoration: 'none',
  width: '225px',
};


const ProjectCard = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    // Additional actions based on click
  };

  return (
    <div className={`cardContainer ${clicked ? 'is-clicked' : ''}`} onClick={handleClick}>
      <Link to="/project1" style={linkStyle}>
        <Card className="card" style={{ textDecoration: 'none' }}>
          <Card.Body>
            <Card.Title>Projects</Card.Title>
            <Card.Text>Click to learn more</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>

  );
};

export default ProjectCard;
