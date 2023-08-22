import React from "react";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { HEADER_ITEM } from "@/components/common/constants";
import PersonIcon from "@mui/icons-material/Person";
import LoginModal from "@/components/login-modal";

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
            <Button
              onClick={handleClickOpen}
              variant="outlined"
              startIcon={<PersonIcon />}
              sx={{
                textTransform: "capitalize",
                borderRadius: 200,
                px: 3,
              }}
            >
              Connection
            </Button>
            <LoginModal open={open} handleClose={handleClose} />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "000066",

                borderRadius: 200,
                textTransform: "capitalize",
              }}
            >
              Company
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
