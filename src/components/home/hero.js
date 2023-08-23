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
import { styled } from "@mui/material/styles";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Image from "next/image";
import heroImage from "../../images/heroImage.png";
import review1 from "../../images/review1.png";
import review2 from "../../images/review2.png";
import review3 from "../../images/review3.png";
import review4 from "../../images/review4.png";
import review5 from "../../images/review5.png";

const HeroButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "7px 16px",
  lineHeight: 1.5,
  backgroundImage:
    "linear-gradient(to right, #0a0232, #06083f, #040b4b, #020c59, #020d66, #010e74, #000e83, #000e92, #000ea6, #000dba, #000ace, #0505e3)",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
});

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
                  sx={{
                    ml: 1,
                    flex: 1,
                    color: "#494E57",
                    fontSize: 15,
                  }}
                  placeholder="Search for an Shops, Restaurants etc"
                />
              </Paper>
              <HeroButton
                variant="contained"
                sx={{
                  borderRadius: 200,
                  overflow: "hidden",
                  px: 3,
                  py: 1,
                }}
                endIcon={<TrendingFlatIcon />}
              >
                Learn More
              </HeroButton>
            </Box>
          </Grid>
          <Grid item md={6} sx={{ pt: 6 }}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                <Image
                  width={350}
                  height={115}
                  src={review1}
                  alt="hero-image"
                />
                <Image
                  width={235}
                  height={115}
                  src={review2}
                  alt="hero-image"
                />
              </Box>

              <Box sx={{ p: 2, ml: 8 }}>
                <Image
                  width={455}
                  height={135}
                  src={review3}
                  alt="hero-image"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  pb: 5,
                  ml: -4,
                }}
              >
                <Image
                  width={430}
                  height={135}
                  src={review4}
                  alt="hero-image"
                />
                <Image
                  width={305}
                  height={125}
                  src={review5}
                  alt="hero-image"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
