
import './gradientCard.css';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types'; // Import the 'prop-types' package



const GradientCard = ({ title, content }) => {
    return (
        <div className="gradient-card">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        </div>
    );
};

GradientCard.propTypes = {
    title: PropTypes.string.isRequired, // Add prop validation for 'title' prop
    content: PropTypes.string.isRequired
  
};

export default GradientCard;
