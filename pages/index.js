import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import AuthModal from "../components/authmodal";
import "firebase/auth";
import "firebase/compat/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASURMENT_ID,
  });
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();
export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vh",
        justifyContent: "space-around",

        padding: "0",
        margin: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0",
          width: "50vh",
          padding: "0",
          marginRight: "200px",
          justifyContent: "center",
          backgroundColor: "pink",
        }}
      >
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
      <div
        style={{
          backgroundColor: "Green",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "677px", height: "832px" }}
          src="https://www.loginvsi.com/wp-content/uploads/2022/06/shutterstock_2150205609-overview_3-e1655135806812.png"
        />
      </div>
    </div>
  );
}
