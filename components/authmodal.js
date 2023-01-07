import { useState } from "react";

export default function AuthModal() {
  useState[(Name, setName)] = useState("");
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          opacity: "1",
          filter: "blur(0px)",
          borderStyle: "solid",
          borderColor: "black",
          borderWidth: "2px",
          borderRadius: "12px",

          backgroundColor: "#F5F5F5",
          height: "531px",
          width: "473px",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",

            flexDirection: "row",

            height: "64px ",
          }}
        >
          <button
            style={{
              borderLeft: "1px solid #000000",
              fontSize: "24px",
              borderRadius: "12px 0px 0px 0px",
              width: "50%",
              fontWeight: "400",
            }}
          >
            Login
          </button>
          <button
            style={{
              borderLeft: "1px solid #000000",
              fontSize: "24px",
              width: "50%",
              borderRadius: " 0px 12px 0px 0px ",
              fontWeight: "400",
            }}
          >
            Sign-Up
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "green",
          }}
        >
          <div>
            <input
              style={{
                width: "382px",
                height: "53px",
                border: "1px solid #000000",
                borderRadius: "12px",
              }}
              type={"text"}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
