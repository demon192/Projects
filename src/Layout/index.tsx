import { Box } from "@mui/material";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <Box>{children}</Box>;
};

export default Layout;
