import { Row, Col } from "react-bootstrap";
import Dish from "./Dish";

const ListDishes = ({ dishes }) => {
  if (!dishes || dishes.length === 0) {
    return <p>Aucun plats disponible.</p>;
  }

  return (
    <Row>
      {dishes.map((dish) => (
        <Col key={dish.id}>
          <Dish dish={dish} />
        </Col>
      ))}
    </Row>
  );
};

export default ListDishes;
