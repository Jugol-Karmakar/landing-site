import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { TOP_COMPANY } from "../common/constants";
import TopCompanyCard from "./top-company-card";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

const TopCompany = () => {
  return (
    <Box sx={{ backgroundColor: "#f2f2f2" }}>
      <Container sx={{ py: 4 }}>
        <Box>
          <Typography sx={{ fontSize: 24, fontWeight: 600, color: "#000080" }}>
            Top Rated Company
          </Typography>
          <Typography sx={{ fontSize: 14, color: "#0066CC", fontWeight: 500 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            placeat cum ipsa doloribus iste reprehenderit.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ pt: 5, pb: 5 }}>
          {TOP_COMPANY.map((company) => (
            <Grid item md={4} key={company.id}>
              <TopCompanyCard company={company} />
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            size="small"
            sx={{ fontSize: 14, textTransform: "capitalize", color: "#000066" }}
            endIcon={<EastIcon />}
          >
            Find other recommended companies
          </Button>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton size="small" sx={{ border: "1px solid #000066" }}>
              <WestIcon sx={{ color: "#000066" }} />
            </IconButton>
            <IconButton size="small" sx={{ border: "1px solid #000066" }}>
              <EastIcon sx={{ color: "#000066" }} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TopCompany;
