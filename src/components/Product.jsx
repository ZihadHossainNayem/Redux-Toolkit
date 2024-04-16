import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";

import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    /* fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result)); */

    dispatch(getProducts());
  }, []);

  if (status === "loading") {
    return <Typography sx={{ textAlign: "center" }}>Loading....</Typography>;
  }

  if (status === "error") {
    return (
      <Typography sx={{ textAlign: "center" }}>
        Something went wrong! Try again later!!
      </Typography>
    );
  }

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <Grid key={product.id} item xs={2} sm={4} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={product.image}
            alt="Product Image"
            sx={{ height: 140, objectFit: "contain" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 1,
                height: "1.9em",
              }}
            >
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $ {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ));

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", textAlign: "center", my: 4 }}
      >
        Product Dashboard
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {cards}
      </Grid>
    </Container>
  );
};

export default Product;
