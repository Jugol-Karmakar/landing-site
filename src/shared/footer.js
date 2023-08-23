import React from "react";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Divider from "@mui/material/Divider";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#000033" }}>
      <Container sx={{ pt: 8 }}>
        <Grid container spacing={3} sx={{ pb: "24px" }}>
          <Grid item md={6}>
            <Box maxWidth={450}>
              <Typography variant="h4" component="h5" sx={{ color: "white" }}>
                Noty
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "white", fontFamily: "sans-serif", py: "10px" }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
                commodi soluta excepturi dicta praesentium qui ducimus tempore
                nemo deleniti ipsam labore unde sed, alias officiis quisquam.
                Perspiciatis soluta provident excepturi.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box
              sx={{
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 14,
                  color: "white",
                }}
              >
                Noty
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginBottom: "3px",
                  fontFamily: "sans-serif",
                  fontSize: "14px",
                }}
                href="/"
              >
                Our Mission
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginBottom: "3px",
                  fontFamily: "sans-serif",
                  fontSize: "14px",
                }}
                href="/"
              >
                Carrer
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginBottom: "3px",
                  fontFamily: "sans-serif",
                  fontSize: "14px",
                }}
                href="/"
              >
                Contact Us
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginBottom: "3px",
                  fontFamily: "sans-serif",
                  fontSize: "14px",
                }}
                href="/"
              >
                About Us
              </Link>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box sx={{ mb: 2 }}>
              <Typography
                sx={{ fontWeight: 600, fontSize: 14, color: "white" }}
              >
                Company
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginBottom: "3px",
                  fontFamily: "sans-serif",
                  fontSize: "14px",
                }}
                href="/"
              >
                Why Noty
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginBottom: "3px",
                  fontFamily: "sans-serif",
                  fontSize: "14px",
                }}
                href="/"
              >
                Plans and Pricing
              </Link>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box sx={{ mb: 2 }}>
              <Typography
                sx={{ fontWeight: 600, fontSize: 14, color: "white" }}
              >
                Legal
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginBottom: "3px",
                  fontFamily: "sans-serif",
                  fontSize: "14px",
                }}
                href="/"
              >
                Terms of use
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginBottom: "3px",
                  fontFamily: "sans-serif",
                  fontSize: "14px",
                }}
                href="/"
              >
                Privacy Policy
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider color="#FFFFFF" sx={{ height: 1, width: "100%" }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: "5px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ color: "white", fontSize: "16px" }}>
              © All Rights Reserved - 2023.
            </Typography>
            <Divider orientation="vertical" sx={{ mx: "2px" }} />
            <Typography variant="caption" sx={{ color: "white" }}>
              Designed and Developed by : Jugol Karmakar
            </Typography>
          </Box>
          <Box>
            <IconButton aria-label="facebook">
              <FacebookRoundedIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton aria-label="instagram">
              <InstagramIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton aria-label="twitter">
              <TwitterIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton aria-label="youTube">
              <YouTubeIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
