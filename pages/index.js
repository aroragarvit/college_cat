import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
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
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          width: "50vh",
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
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
