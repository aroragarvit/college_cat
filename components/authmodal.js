import { useState } from "react";
import SignUp from "./signup";
import Login from "./login";

export default function AuthModal(data) {
  const [aut, setAut] = useState("login");
  // setopen to false when clicked outside the modal

  return (
    <div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backdropFilter: "blur(3px)",
          display: "flex",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "0",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        onClick={(e) => data.setOpen(false)}
      ></div>
      <div
        style={{
          borderStyle: "solid",
          borderColor: "black",
          borderWidth: "2px",
          borderRadius: "12px",
          zIndex: "100",
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
            onClick={(e) => setAut("login")}
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
            onClick={(e) => setAut("signup")}
          >
            Sign-Up
          </button>
        </div>

        {aut === "login" ? <Login /> : <SignUp />}
      </div>
    </div>
  );
}
