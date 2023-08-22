import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const LoginModal = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form action="">
          <Box>
            <Typography>Email Address</Typography>
            <TextField
              id="outlined-basic"
              label="Enter Your Email Address"
              variant="outlined"
            />
          </Box>
          <Box>
            <Typography>Password</Typography>
            <TextField
              id="outlined-basic"
              label="Enter Your 
            Password"
              variant="outlined"
            />
          </Box>
        </form>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LoginModal;
