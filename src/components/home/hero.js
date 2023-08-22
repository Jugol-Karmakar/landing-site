import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Image from "next/image";
import heroImage from "../../images/heroImage.png";

const Hero = () => {
  return (
    <Box sx={{ backgroundColor: "#eaf4fc" }}>
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Grid container maxWidth="lg" sx={{ height: "100%" }}>
          <Grid item md={6} sx={{ pt: 10 }}>
            <Box>
              <Typography
                component="h2"
                fontWeight={700}
                sx={{
                  fontSize: 42,
                  color: "#000066",
                  lineHeight: 1,
                }}
              >
                Noty - Whare Notes Begin Their Journey Ideas Flourish
              </Typography>
              <Typography sx={{ pt: 2, fontWeight: 600, color: "#667799" }}>
                Welcome to Noty, your digital haven for capturing and nurturing
                creativity.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                marginTop: 8,
                mb: 4,
              }}
            >
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 300,
                  borderRadius: 200,
                  border: "1px solid #000066",
                  backgroundColor: "#eaf4fc",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1, color: "gray" }}
                  placeholder="Search Here"
                />
              </Paper>
              <Button
                variant="contained"
                sx={{ borderRadius: 200, overflow: "hidden" }}
                endIcon={<TrendingFlatIcon />}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image width={550} src={heroImage} alt="hero-image" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
