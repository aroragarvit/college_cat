import { useEffect, useState } from "react";
import AuthModal from "../components/authmodal";
import axios from "axios";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/onboard", // On board verifies the token then checks user in database then returns 200 if user is found else returns errors
          { withCredentials: true }
        );
        if (response.status === 200) {
          setLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
        setLoggedIn(false);
      }
    };
    checkLogin();
  }, [loggedIn]);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "space-evenly",

        padding: "0",
        margin: "0",
      }}
    >
      {open && <AuthModal open={open} setOpen={setOpen} />}
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          margin: "0",
          width: "50vw",
          padding: "0",

          justifyContent: "center",
        }}
      >
        <div style={{ paddingLeft: "100px" }}>
          <div style={{ fontSize: "56px" }}>Connect with your </div>
          <div style={{ fontSize: "56px" }}>Peers</div>
          <div>
            <button
              style={{
                color: "white",
                backgroundColor: "#24a0ed",
                height: "58px",
                Width: "500px",
                fontSize: "32px",
                borderRadius: "12px",
                border: "none",
                padding: "0 35px",
                margin: "40px 0",
              }}
              onClick={() => setOpen(true)}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "50vw",
          backgroundSize: "cover",
          backgroundImage:
            "url(https://www.loginvsi.com/wp-content/uploads/2022/06/shutterstock_2150205609-overview_3-e1655135806812.png)",
        }}
      ></div>
    </div>
  );
}
