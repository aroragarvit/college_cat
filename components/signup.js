import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{
          width: "382px",
          height: "53px",
          border: "1px solid #000000",
          borderRadius: "12px",
          color: "#626262",
          fontSize: "18px",
          lineHeight: "27px",
          fontWeight: "400",
          paddingLeft: "15px",
          marginTop: "78px",
        }}
        type={"text"}
        placeholder={"Username"}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        style={{
          width: "382px",
          height: "53px",
          border: "1px solid #000000",
          borderRadius: "12px",
          marginTop: "21px",
          color: "#626262",
          fontSize: "18px",
          lineHeight: "27px",
          fontWeight: "400",
          paddingLeft: "15px",
        }}
        type={"email"}
        placeholder={"Email"}
        onChange={(e) => setEmail(e.target.value)}
      ></input>

      <input
        style={{
          width: "382px",
          height: "53px",
          border: "1px solid #000000",
          borderRadius: "12px",
          marginTop: "21px",
          color: "#626262",
          fontSize: "18px",
          lineHeight: "27px",
          fontWeight: "400",
          paddingLeft: "15px",
        }}
        type={"password"}
        placeholder={"Password"}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button
        style={{
          height: "46px",
          width: "382px",
          marginTop: "61px",
          backgroundColor: "#2757EA",
          borderRadius: "12px",
          paddingLeft: "15px",
          border: "1px solid #000000",
          lineHeight: "27px",
          fontSize: "18px",
          fontWeight: "400",
          color: "#FFFFFF",
          textAlign: "center",
        }}
        onClick={async () => {
          try {
            await axios.post("https://collegebackend.onrender.com/signup", {
              username: name,
              email: email,
              password: password,
            });
          } catch (err) {
            alert(err);
          }
        }}
      >
        Sign Me Up !
      </button>
    </div>
  );
}
