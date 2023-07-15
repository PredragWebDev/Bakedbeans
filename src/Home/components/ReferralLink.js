import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const CardWrapper = styled(Card)({
  background: "#1B212C",
});

const Input = styled("input")(({ theme }) => ({
  fontSize: 10,
  fontWeight: 300,
  padding: "10px 12px",
  borderRadius: 3,
  border: "none",
  background: "rgb(34 40 50)",
  width: "100%",
  outline: "none",
  color: theme.palette.primary.main,
}));

export default function ReferralLink({ address }) {
  const link = `${window.origin}?ref=${address}`;

  return (
    <CardWrapper>
      <CardContent style={{ paddingLeft: 8, paddingRight: 8, paddingBottom: 42 }}>
        <Typography gutterBottom variant="h5" textAlign="center" marginBottom={5}>
          Referral Link
        </Typography>
        <Input value={address ? link : ""} readOnly />
        <Box marginTop={3} marginBottom={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={""}
            >
              COPY
            </Button>
        </Box>
        <Typography
          textAlign="center"
          marginTop={2}
          paddingX={3}
        >
          Earn 14% of the BNB used to plant seeds from anyone who uses your
          referral link
        </Typography>
      </CardContent>
    </CardWrapper>
  );
}
