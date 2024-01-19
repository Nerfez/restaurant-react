import { Card, Button } from "react-bootstrap";
import { useCart } from "../../../utils/context/Cart/CartContext";
import { useState } from "react";

const Dish = ({ dish }) => {
  const { addToCart } = useCart();
  const [clickCount, setClickCount] = useState(0);

  const handleAddToCart = () => {
    addToCart(dish);
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <Card
      style={{
        position: "relative",
        width: "17rem",
        height: "35em",
        marginLeft: "10px",
        marginBottom: "20px",
      }}
    >
      <Button
        variant="primary"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 1,
        }}
        onClick={handleAddToCart}
      >
        {clickCount > 0 ? `+${clickCount}` : "+"}
      </Button>
      <Card.Img variant="top" src={dish.image} />
      <Card.Body>
        <Card.Title>{dish.name}</Card.Title>
        <Card.Text>
          <b>Ingrédients:</b> {dish.ingredients.join(", ")}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Dish;
