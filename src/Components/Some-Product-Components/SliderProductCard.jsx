import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SliderProductCard = (props) => {

    let mrp=parseInt(props.product.price);
    let discountprice=mrp-(mrp*20)/100

    return (
        <div>
            <Card className="my-3 p-3 rounded" style={{ width: '14rem' }}>
                <Card.Img variant="top" src={props.product.productImage} style={{ height: '8rem', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title as="h6" className="text-center">{props.product.productTitle}</Card.Title>
                    <Row className="justify-content-left">
                        <Col xs="auto">
                            <Card.Text className="text-muted">
                                Price: <s>${props.product.price}</s>
                            </Card.Text>
                        </Col>
                        <Col xs="auto">
                            <Card.Text className="text-danger font-weight-bold">
                                Discount: ${discountprice}
                            </Card.Text>
                        </Col>
                    </Row>
                    <Button variant="primary" className="w-100 mt-2">
                        Add to Cart
                    </Button>
                    <Button variant="success" className="w-100 mt-2">
                        Buy Now
                    </Button>

                    <Link to={`/product/${props.product.id}/${props.product.productTitle}`}>
                        <Button variant="warning" className="w-100 mt-2">
                            Show More
                        </Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
    )
}
export default SliderProductCard