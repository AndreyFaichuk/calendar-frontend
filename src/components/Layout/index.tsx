import { ReactNode, FC } from "react";
import Box from "@mui/material/Box";

import CustomDrawer from "../CustomDrawer";

interface Props {
  children: NonNullable<ReactNode>;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CustomDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
