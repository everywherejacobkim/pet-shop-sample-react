import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DogFood = () => {
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('data/dogFood/dogFoodData.json')
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h2 className="dogFood-title">Dog Food</h2>
      <div className="product-container">
        {loading && (
          <div className="spinner">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}

        {productData.map((product) => (
          <Card style={{ width: '18rem' }} key={product.id} className="dogFood-card">
            <Card.Img variant="top" src={product.image} alt="#" />
            <Card.Body>
              <Card.Title className="dogFood-card-title">{product.title}</Card.Title>
              <Card.Text className="dogFood-card-content">{product.content}</Card.Text>
              <Card.Text className="dogFood-card-price">{`$${product.price}`}</Card.Text>
              <Button variant="success">Add Cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default DogFood;
