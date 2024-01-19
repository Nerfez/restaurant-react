import { Button, Table } from "react-bootstrap";
import Command from "./Command";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import { useCart } from "../../../utils/context/Cart/CartContext";

const Cart = () => {
  const { cart, emptyCart, deleteArticle } = useCart();

  const groupItems = (items) => {
    const grouped = {};
    items.forEach((item) => {
      if (grouped[item.name]) {
        grouped[item.name].count += 1;
      } else {
        grouped[item.name] = { ...item, count: 1 };
      }
    });
    return Object.values(grouped);
  };

  const groupedCart = groupItems(cart);

  return (
    <>
      <Header></Header>
      <div
        style={{
          textAlign: "center",
          maxWidth: "1300px",
          margin: "auto",
        }}
      >
        <h2>Panier</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Quantité</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {groupedCart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>x{item.count}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => deleteArticle(item.id)}
                  >
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button
          variant="danger"
          className="mt-2"
          onClick={emptyCart}
          style={{ marginBottom: "40px" }}
        >
          Vider le panier
        </Button>
        <Command cartData={groupedCart}></Command>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Cart;
