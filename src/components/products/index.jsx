import axios from "axios";
import { useEffect, useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import "./index.css";

const Index = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products?limit=${page}`)
      .then((res) => setData(res.data))
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  }, [page]);

  return (
    <div className="products-page">
      <div className="container">
        <div className="product_about">
          {data?.map((element) => (
            <Card
              sx={{ maxWidth: 345 }}
              key={element.id}
              className="product_card"
            >
              <NavLink to={`product/${element.id}`}>
                <img
                  src={element.image}
                  alt={element.title}
                  className="product_image"
                />
              </NavLink>

              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="product_title"
                >
                  {element.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="product_desc"
                >
                  {element.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium">More</Button>
              </CardActions>
            </Card>
          ))}
        </div>

        <div className="pagination">
          <Stack>
            <Pagination
              count={10}
              color="primary"
              size="large"
              siblingCount={3}
              page={page}
              onChange={(e, value) => setPage(value)}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Index;
