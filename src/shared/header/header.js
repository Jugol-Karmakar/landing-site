import React from "react";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { HEADER_ITEM } from "@/components/common/constants";
import PersonIcon from "@mui/icons-material/Person";
import LoginModal from "@/components/login-modal";
import { styled } from "@mui/material/styles";

const CompanyButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 14px",
  lineHeight: 1.5,
  backgroundColor: "#000066",
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
  "&:hover": {
    backgroundColor: "#000066",
    boxShadow: "none",
  },
});

const ConnectionButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 14px",
  lineHeight: 1.5,
  border: "1px solid",
  borderColor: "#000066",
  color: "#000066",
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
  "&:hover": {
    color: "#FFFFFF",
    backgroundColor: "#000066",
    boxShadow: "none",
  },
});

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{ backgroundColor: "#eaf4fc" }}
    >
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Toolbar
              disableGutters
              sx={{
                justifyContent: "space-between",
              }}
            >
              <Link href="/" style={{ textDecoration: "none" }}>
                <Box sx={{}}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                    }}
                    component="h1"
                    variant="h4"
                  >
                    Noty
                  </Typography>
                </Box>
              </Link>
            </Toolbar>
            <Stack direction="row" spacing={3} sx={{ py: 2 }}>
              {HEADER_ITEM.map((link) => (
                <Link
                  style={{ textDecoration: "none" }}
                  href={link.route}
                  key={link.id}
                >
                  <Typography
                    sx={{ fontSize: 16, color: "#121214", fontWeight: 500 }}
                  >
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <ConnectionButton
              variant="outlined"
              startIcon={<PersonIcon />}
              sx={{
                textTransform: "capitalize",
                borderRadius: 200,
                px: 3,
              }}
            >
              Connection
            </ConnectionButton>
            <CompanyButton
              onClick={handleClickOpen}
              variant="contained"
              sx={{
                borderRadius: 200,
                textTransform: "capitalize",
                px: 3,
                py: 1,
              }}
            >
              Company
            </CompanyButton>
            <LoginModal open={open} handleClose={handleClose} />
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
