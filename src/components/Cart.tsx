import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddCart, DeleteCart, RemoveCart } from "../cartSlice";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((item: any) => item.cart);

  const AddCartHandle = (item: any) => {
    dispatch(AddCart(item));
  };

  const RemoveCartHandle = (item: any) => {
    dispatch(RemoveCart(item));
  };

  const DeleteCartHandle = (item: any) => {
    dispatch(DeleteCart(item));
  };

  return (
    <div>
      <Row xs={1} md={3}>
        {cart.map((item: any, index: any) => (
          <Col>
            <div key={index}>
              <Card className="Cards">
                <Card.Title data-testid="cart-title" className="CardTitle">
                  {item.title}
                </Card.Title>
                <Card.Img
                  className="CardImg"
                  variant="top"
                  src={item.image}
                  alt="product"
                />

                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <b>Price:</b>${item.price}
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <ListGroup.Item>
                    <b>Quantity:</b>
                    {item.quantity}
                  </ListGroup.Item>
                </Card.Body>
                <Card.Body className="cartDelete">
                  <Button
                    data-testid="Remove-btn"
                    className="btn-remove"
                    onClick={() => RemoveCartHandle(item)}
                  >
                    -
                  </Button>

                  <Button
                    data-testid="Add-btn"
                    onClick={() => AddCartHandle(item)}
                  >
                    +
                  </Button>

                  <Button
                    data-testid="Delete-btn"
                    className="btn-delete"
                    onClick={() => DeleteCartHandle(item)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Cart;
