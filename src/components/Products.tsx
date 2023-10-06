import { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import "./Products.css";

import { useDispatch } from "react-redux";

import { AddCartByQuantity } from "../cartSlice";

const Products = () => {
  const [data, setData] = useState([]);
  const [Quant, setQuant] = useState(0);

  const dispatch = useDispatch();

  const fetchHandler = async () => {
    const response = await fetch("http://localhost:3000/products");
    const resdata = await response.json();

    setData(resdata);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const AddCartHandle = (item: any) => {
    item.rating.count -= Quant;
    fetch(`http://localhost:3000/products/${item.id}`, {
      method: "PUT",
      headers: {
        Accept: "applocation/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((response) => {
        console.warn(response);
      });
    });
    fetchHandler();

    const item1 = { ...item, quantity: Quant };
    if (Quant > 0) {
      dispatch(AddCartByQuantity(item1));
    } else {
      alert("Enter valid Quantity");
    }
  };

  return (
    <div>
      <Row xs={1} md={3}>
        {data.map((item: any, index: any) => (
          <Col>
            <div key={index}>
              <Card className="Cards">
                <Card.Title data-testid="product-title" className="CardTitle">
                  {item.title}
                </Card.Title>
                <Card.Img
                  className="CardImg"
                  variant="top"
                  src={item.image}
                  alt="product"
                />
                <Card.Body>
                  <Card.Text className="Desc">{item.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <b>Price:</b>${item.price}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Total Quantity:</b>
                    {item.rating.count}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <b>Rating:</b>
                    {item.rating.rate}
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body className="SetCount">
                  <ListGroup.Item>
                    <input
                      type="number"
                      placeholder="enter quantity"
                      id="input"
                      value={item.Quant}
                      data-testid="counter"
                      onChange={(e) => setQuant(+e.target.value)}
                    />
                    <Button
                      data-testid="addByQuant"
                      onClick={() => AddCartHandle(item)}
                    >
                      Add to Cart
                    </Button>
                  </ListGroup.Item>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
    /* <tbody>
        <tr>
          <th>Title</th>
          <th>Image</th>
          <th>Description</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Count</th>
        </tr>
        {data.map((item:any, index:any) => (
          <tr key={index}>
            <td>{item.title}</td>
            
            <td>
              <img src={item.image} alt="" height={100} />
            </td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.rating.rate}</td>
            <td>{item.rating.count}</td>
          </tr>
        ))}
        </tbody> */
  );
};
export default Products;
