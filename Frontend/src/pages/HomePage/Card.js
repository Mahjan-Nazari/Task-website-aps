import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const SingCard = ({ card }) => {
  const { title, desc, img } = card;
  console.log(card);
  return (
    <>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia component="img" height="200" image={img} alt={`${title}`} />
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default SingCard;
