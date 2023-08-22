import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import LoginIcon from "@mui/icons-material/Login";

const TopCompanyCard = ({ company }) => {
  return (
    <Paper elevation={3} sx={{ borderRadius: "10px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 3,

          padding: "14px",
        }}
      >
        <Box>
          <Image
            width={70}
            style={{ borderRadius: "8px", overflow: "hidden" }}
            src={company.image}
            alt="company-image"
          />
        </Box>
        <Box sx={{ py: "8px" }}>
          <Typography sx={{ fontSize: 18, fontWeight: 600, color: "#000066" }}>
            {company.name}
          </Typography>
          <Typography sx={{ fontSize: 14, color: "#333333" }}>
            {company.details}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", py: "5px" }}>
            <Box>
              <Typography sx={{ mr: 1 }}>{company.rating}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: 4,
                  backgroundColor: "#43A047",
                  mr: 1,
                }}
              ></Box>
              <Typography
                sx={{ fontSize: 12, fontWeight: 600, color: "#43A047" }}
              >
                EXCELLENT
              </Typography>
            </Box>
          </Box>

          <Typography sx={{ fontSize: 14 }}>
            Score:{" "}
            <span style={{ color: "#000099", fontWeight: "bold" }}>
              {company.score}
            </span>
          </Typography>
          <Typography sx={{ fontSize: 14 }}>
            Number of Reviews:{" "}
            <span style={{ color: "#000099", fontWeight: "bold" }}>
              {company.reviews}
            </span>
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: "14px",
          py: "6px",
        }}
      >
        <Button
          size="small"
          sx={{ fontSize: 14, textTransform: "capitalize" }}
          endIcon={<EastIcon />}
        >
          Read reviews
        </Button>
        <Button
          startIcon={<LoginIcon />}
          size="small"
          sx={{ fontSize: 14, textTransform: "capitalize" }}
        >
          Website
        </Button>
      </Box>
    </Paper>
  );
};

export default TopCompanyCard;
