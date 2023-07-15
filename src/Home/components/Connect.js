import Button from "@mui/material/Button";
import { styled } from "@mui/system";

import { useAuthContext } from "../../providers/AuthProvider";

const ConnectButton = styled(Button)(({ theme }) => ({
  position: "fixed",
  right: 200,
  top: 48,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const FAQButton = styled(Button)(({ theme }) => ({
  position: "fixed",
  right: 48,
  top: 48,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const SmallScreenConnectButton = styled(Button)(({ theme }) => ({
  display: "none",
  marginTop: -24,
  marginBottom: 48,
  width: "95%",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export default function Connect({ responsive = true }) {
  const { address, loading, connect, disconnect } = useAuthContext();

  return (
    <>
      <ConnectButton
        color="secondary"
        variant="contained"
        disabled={loading}
        onClick={() => (address ? disconnect() : connect())}
      >
        {address ? "Disconnect" : "Connect"}
      </ConnectButton>

      <FAQButton
        color="secondary"
        variant="contained"
        disabled={false}
        onClick={""}
      >
        FAQ
      </FAQButton>
    </>
  );

  // return responsive ? (
  //   <ConnectButton
  //     color="secondary"
  //     variant="contained"
  //     disabled={loading}
  //     onClick={() => (address ? disconnect() : connect())}
  //   >
  //     {address ? "Disconnect" : "Connect"}
  //   </ConnectButton>
  // ) : (
  //   <SmallScreenConnectButton
  //     color="secondary"
  //     variant="contained"
  //     disabled={loading}
  //     onClick={() => (address ? disconnect() : connect())}
  //   >
  //     {address ? "Disconnect" : "Connect"}
  //   </SmallScreenConnectButton>
  // );
}
