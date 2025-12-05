import { Box, Button, IconButton, Stack } from "@mui/material";
import React from "react";
import { youTubeLogo } from "../../constants";
import { Search } from "../../index";
import { colors } from "../../constants/colors";
import { Add, NotificationsNone } from "@mui/icons-material";
import AccountMenu from "../avatar/Avatar";

const Navbar = () => {
  return (
    <Stack
      direction={''}
      justifyContent={"space-around"}
      bgcolor={colors.bgColor}
      alignItems={"center"}
      p={3}
      spacing={20}
      sx={{ position: "sticky", top: 0, zIndex: 999, boxShadow: 1 }}
    >
      <img className="w-[150px]" src={youTubeLogo} alt="" />
      <Search />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "13%",
          justifyContent: "space-between",
        }}
      >
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#690202",
            color: "white",
            borderRadius: "15px",
            fontSize: '12px'
          }}
        >
          <Add sx={{fontSize: '25px'}} />
          Yaratish
        </Button>
        <IconButton>
          <NotificationsNone sx={{fontSize: '30px'}} />
        </IconButton>
          <AccountMenu/>
      </Box>
    </Stack>
  );
};

export default Navbar;
