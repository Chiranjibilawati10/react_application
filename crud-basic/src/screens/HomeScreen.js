import React from 'react';
import { Container,Row }  from 'react-bootstrap';
import PhotoItem from '../components/PhotoItem';

const HomeScreen = () => {
    return(
        <Container>
            <Row>
            <PhotoItem />
            <PhotoItem />
            <PhotoItem />
            </Row>
        </Container>
    );
};

export default HomeScreen;