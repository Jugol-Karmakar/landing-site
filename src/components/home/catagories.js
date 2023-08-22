import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { CATAGORIES_ITEM } from "../common/constants";
import Catagory from "./catagory";

const Catagories = () => {
  return (
    <Box sx={{ backgroundColor: "#f7fafc", py: 6 }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box maxWidth={700}>
            <Typography
              sx={{ fontSize: 24, fontWeight: 600, color: "#000033" }}
            >
              Explore Catagories
            </Typography>
            <Typography
              sx={{ fontSize: 14, color: "#4F637B", fontWeight: 500 }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing.Eum
              reprehenderit id quisquam maiores.
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                fontSize: 14,
                fontWeight: 600,
                textTransform: "capitalize",
              }}
              variant="text"
              endIcon={<EastIcon />}
            >
              See More
            </Button>
          </Box>
        </Box>
        <Grid container spacing={3} sx={{ pt: 3 }}>
          {CATAGORIES_ITEM.map((catagory) => (
            <Grid item key={catagory.id} md={3}>
              <Catagory catagory={catagory} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Catagories;
