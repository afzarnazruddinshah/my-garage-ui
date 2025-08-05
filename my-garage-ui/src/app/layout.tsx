import type { Metadata } from "next";
import "./globals.scss";
import Sidemenu from "@/_components/Sidemenu/Sidemenu";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import MenuItems from "@/_components/Sidemenu/MenuItems";
import { Header } from "@/_components/Header/Header";
import { StoreProvider } from "./StoreProvider";
import { NewAssignmentBtn } from "./_newAssignment/page";
import { NewAssignmentDialog } from "./_newAssignment/NewAssignmentDialog";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: {
    default: "My Garage - One Roof ",
    template: "%s | My Garage",
  },
  description: "created by Livingstone P",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="viewport-fit=cover" />
      </head>

      <body>
        <StoreProvider>
          <AppRouterCacheProvider>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <MenuItems />
              <Header />

              <Box
                component="main"
                className="main-content"
                sx={{
                  display: "block",
                  flexGrow: 2,
                  bgcolor: "background.default",
                  p: 3,
                }}
              >
                <Toolbar />
                {children}
                <NewAssignmentBtn />
                <NewAssignmentDialog />
              </Box>
            </Box>
            <ToastContainer />
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
