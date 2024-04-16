import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  const CartList = products.map((product) => (
    <ListItem
      alignItems="flex-start"
      key={product.id}
      sx={{ borderBottom: "1px solid #e0e0e0" }}
    >
      <ListItemAvatar>
        <Avatar
          alt={product.title}
          src={product.image}
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "0px",
            objectFit: "contain",
            mr: 3,
          }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={product.title}
        secondary={
          <>
            <Typography component="span" variant="body2" color="textPrimary">
              ${product.price.toFixed(2)}
            </Typography>
            <br />
          </>
        }
      />
      <DeleteIcon onClick={() => removeFromCart(product.id)} />
    </ListItem>
  ));

  return (
    <div>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", textAlign: "center", my: 4 }}
      >
        Cart
      </Typography>
      {CartList}
    </div>
  );
};

export default Cart;
