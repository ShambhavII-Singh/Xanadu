import React, { useContext } from "react";
import {
  useGetIdentity,
  useActiveAuthProvider,
  pickNotDeprecated,
} from "@refinedev/core";

import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/mui";
import { Box, IconButton } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { ColorModeContext } from "../../contexts/color-mode";

export const ThemedHeaderV2: React.FC<RefineThemedLayoutV2HeaderProps> = ({
  isSticky,
  sticky,
}) => {
  const prefferedSticky = pickNotDeprecated(sticky, isSticky) ?? true;
  const { mode, setMode } = useContext(ColorModeContext);
  const authProvider = useActiveAuthProvider();
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  });
  
  return (
    <AppBar position={prefferedSticky ? "sticky" : "relative"} sx={{backgroundColor: "background.paper"}}>
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Box marginRight="10px">
            <IconButton
                onClick={() => {
                    setMode();
                }}
            >
                {mode === "dark" ? (
                    <LightModeOutlined sx={{color: "primary.dark"}}/>
                ) : (
                    <DarkModeOutlined sx={{color: "primary.dark"}}/>
                )}
            </IconButton>
          </Box>
          <Stack
            direction="row"
            gap="16px"
            alignItems="center"
            justifyContent="center"
          >
            {user?.name && (
              <Typography variant="subtitle2" data-testid="header-user-name" sx={{color: "primary.dark"}}>
                {user?.name}
              </Typography>
            )}
            {user?.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
