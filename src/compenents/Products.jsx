import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/slices/ProductSlice";
import { addToCart } from "../store/slices/CartSlice";

const Products = () => {
  const products = useSelector((state) => state.product);  
   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  return (
    <Container style={{marginTop:'5rem'}}>
      <Row style={{ gap: "5px", marginTop: "2rem" }}>
        {products.map((product) => (
          <Col key={product.id}>
            <Card style={{ width: "18rem", height: "30rem" }}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: "180px", objectFit: "contain" }}
              />
              <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                <Card.Title>{`${product.title.slice(0, 15)}...`}</Card.Title>
                <Card.Text style={{ flex: 1, marginBottom: "0" }}>
                  {`${product.description.slice(0, 100)}...`}{" "}
                </Card.Text>
                <Card.Text style={{ color: "red", marginBottom: "0" }}>
                  {`${product.price}$`}{" "}
                </Card.Text>
                <Button variant="primary" onClick={()=>dispatch(addToCart(product))}>Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
