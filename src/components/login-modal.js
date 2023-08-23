import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  Divider,
  FormControlLabel,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";
import LockIcon from "@mui/icons-material/Lock";

const LoginModal = ({ open, handleClose }) => {
  const LoginButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "8px 16px",
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
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions sx={{ position: "absolute", top: "5px", right: "5px" }}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogActions>

        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              px: 8,
              mt: 3,
              mb: 4,
            }}
          >
            <Typography
              sx={{ fontSize: 20, color: "#000000", fontWeight: 600 }}
            >
              Sign into your account
            </Typography>
            <Typography sx={{ color: "#666666", fontSize: 16 }}>
              Access your personal space in just a few clicks
            </Typography>
          </Box>
        </>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: 10,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              width: "60%",
              minWidth: "350px",
              borderRadius: "50px",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              textTransform: "capitalize",
              border: "1px solid gray",
              gap: 5,
              mb: 2,
              fontWeight: 600,
              color: "#000000",
              py: "6px",
            }}
          >
            <FaFacebook style={{ fontSize: 22, color: "#1877F2" }} />
            Continue with Facebook
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "60%",
              minWidth: "350px",
              borderRadius: "50px",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              textTransform: "capitalize",
              border: "1px solid gray",
              gap: 5,
              mb: 2,
              fontWeight: 600,
              color: "#000000",
              py: "6px",
            }}
          >
            <FcGoogle style={{ fontSize: 22 }} />
            Continue with Google
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: "10px",
          }}
        >
          <Divider color="#FFFFFF" sx={{ height: 2, width: "150px" }} />
          <Typography sx={{ mx: 2 }}>OR</Typography>
          <Divider color="#FFFFFF" sx={{ height: 2, width: "150px" }} />
        </Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 375,
            px: 8,
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#000000",
                mb: "6px",
              }}
            >
              Email Address
            </Typography>
            <TextField
              id="outlined-basic"
              placeholder="Enter Your Email Address"
              variant="outlined"
              required
              fullWidth
              name="password"
              type="password"
              size="small"
              sx={{
                width: "60%",
                minWidth: "350px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(126, 139, 182, 0.3);",
                    borderRadius: "50px",
                    "&:hover fieldset": {
                      borderColor: "green",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "green",
                    },
                  },
                },
              }}
            />
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: "14px",
                mb: "6px",
              }}
            >
              <Typography
                sx={{ fontSize: "16px", fontWeight: 600, color: "#000000" }}
              >
                Password
              </Typography>
              <Typography sx={{ color: "#333333" }}>Forget?</Typography>
            </Box>
            <TextField
              id="outlined-basic"
              label="Enter Your 
            Password"
              variant="outlined"
              required
              fullWidth
              name="password"
              type="password"
              size="small"
              sx={{
                width: "60%",
                minWidth: "350px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(126, 139, 182, 0.3);",
                    borderRadius: "50px",
                    "&:hover fieldset": {
                      borderColor: "green",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "green",
                    },
                  },
                },
              }}
            />
          </Box>
          <Box sx={{ width: "60%", minWidth: "350px", mt: "3px" }}>
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  sx={{ color: "#333333" }}
                  size="small"
                />
              }
              label="Remember me"
            />
          </Box>
          <LoginButton
            sx={{
              width: "60%",
              minWidth: "350px",
              borderRadius: "50px",
              color: "#FFFFFF",
              mt: 2,
              mb: 3,
            }}
          >
            Login
          </LoginButton>
        </Paper>
      </Dialog>
    </>
  );
};

export default LoginModal;
