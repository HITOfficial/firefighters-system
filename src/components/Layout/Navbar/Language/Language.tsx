import { Box, styled, Typography } from "@mui/material";

export const LanguageBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const Language = (): JSX.Element => (
  <LanguageBox>
    <Typography variant="body2">ENG</Typography>
  </LanguageBox>
);

export default Language;
