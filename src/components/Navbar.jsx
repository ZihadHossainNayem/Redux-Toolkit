import { Toolbar, Typography, IconButton, Box, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <Box position="static">
      <Toolbar sx={{ borderBottom: "1px solid #e0e0e0" }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ mr: 4, fontWeight: "bold" }}
        >
          ReduxToolkit
        </Typography>

        <Box sx={{ display: "flex", gap: 2, flexGrow: 1 }}>
          <Typography
            color="inherit"
            to="/"
            as={Link}
            sx={{ textDecoration: "none" }}
          >
            Products
          </Typography>
          <Typography color="inherit">About</Typography>
        </Box>

        <IconButton color="inherit" to="/cart" as={Link}>
          <Badge
            badgeContent={cartProducts.length}
            color="error"
            variant="standard"
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
