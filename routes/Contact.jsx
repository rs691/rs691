import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const linkStyle = {
  textDecoration: 'none', // Remove underlines for the Link component
};


    class ContactCard extends React.Component {
      static propTypes = {
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      };

      render() {
        const { title, text } = this.props;

        return (
          <div className='cardContainer'>
            <Link to="/contact" style={linkStyle}>
              <Card>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        );
      }
    }
   
export default ContactCard;
