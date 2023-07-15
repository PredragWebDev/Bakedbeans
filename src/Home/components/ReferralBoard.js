import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";
// import { Divider } from "@mui/material";

const CardWrapper = styled(Card)({
  background: "#1B212C",
  marginBottom: 24,
});

const referrals = [
  {
    label: "0x135***d2a8",
    value: 17574310727,
  },
  {
    label: "0xc90***4b7b",
    value: 8807155128,
  },
  {
    label: "0x22d***3260",
    value: 8668332479,
  },
  {
    label: "Oxe08***e509",
    value: 8328050887,
  },
  {
    label: "Oxfb9***9406",
    value: 6837564458,
  },
  {
    label: "Oxd8c***d4d6",
    value: 5651782028,
  },
  {
    label: "ox7dc***41de",
    value: 3903432881,
  },
  {
    label: "0x950***2629",
    value: 3394134809,
  },
  {
    label: "0x367***e168",
    value: 2699691847,
  },
  {
    label: "OxdOd***3d66",
    value: 2513395719,
  },
];

export default function ReferralBoard() {
  return (
    <CardWrapper>
      <CardContent>
        <Typography gutterBottom variant="h5" textAlign="center">
          Referral Leaderboard
        </Typography>
        <Box paddingTop={3.8}>
          {referrals.map((f) => (
            <>
            <Grid container key={f.label} justifyContent="space-between">
              <Typography gutterBottom>
                {f.label}
              </Typography>
              <Typography gutterBottom>{f.value} SEEDS</Typography>
            </Grid>
            <hr />
            </>
          ))}
        </Box>
      </CardContent>
    </CardWrapper>
  );
}
