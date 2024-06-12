import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { clearCart, deleteFromCart } from '../store/slices/CartSlice';

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(cartProducts);
  const initialValue = 0;
  const Total = cartProducts.reduce(
    (accumulator, product) => accumulator + product.price,
    initialValue,
  );
  return (
    <Container style={{marginTop:'5rem'}}>
      <div style={{padding:'0 3rem',display:'flex',justifyContent:'space-around',alignItems:'center',}}>
        <Button variant="danger" onClick={() => dispatch(clearCart())}>Clear Cart</Button>
        <h3 style={{margin:'0 0',display: 'flex',alignItems: 'center',gap:'2px'}}><span style={{fontSize:'16px'}}>Total Price</span><Badge bg="secondary" style={{margin:'auto',display:'block'}}>{`${Total}$`}</Badge></h3>
      </div>
      <Row style={{ gap: "5px", marginTop: "2rem" }}>
        {cartProducts.map((product) => (
          <Col key={product.id}>
            <Card style={{ width: "30rem", height: "15rem" ,flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: "100px",width:'100px', objectFit: "contain" }}
              />
              <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                <Card.Text>{`${product.title.slice(0, 50)}...`}</Card.Text> 
                <div style={{display:'flex',justifyContent:'space-around',alignItems:'center', marginBottom: "1rem"}}>
                  <Card.Text style={{ color: "red", marginBottom: "0" }}>
                    {`${product.price}$`}
                  </Card.Text>
                  <h4 style={{margin:'0 0'}}><Badge bg="success" style={{margin:'auto',display:'block'}}>{product.Qty}</Badge></h4>
     
                </div>               
                <Button variant="primary" onClick={() => dispatch(deleteFromCart(product.id))}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Cart