import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Catagory = ({ catagory }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "14px",
        borderRadius: "8px",
        backgroundColor: "#ffecdb",
      }}
    >
      <Box sx={{}}>
        <Image src={catagory.image} alt="catagory-image" />
      </Box>
      <Box>
        <Typography sx={{ fontSize: 14, fontWeight: 600, pt: "4px" }}>
          {catagory.name}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Catagory;
