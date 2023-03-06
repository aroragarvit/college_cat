import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth";
import Cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { loggedIn, setLoggedIn } = useContext(AuthContext);

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
          marginTop: "78px",
          color: "#626262",
          fontSize: "18px",
          lineHeight: "27px",
          fontWeight: "400",
          paddingLeft: "15px",
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
          color: "#626262",
          marginTop: "21px",
          fontSize: "18px",
          lineHeight: "27px",
          fontWeight: "400",
          paddingLeft: "15px",
        }}
        type={""}
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
            const res = await axios.post("http://localhost:5000/login", {
              username: name,
              email: email,
              password: password,
            });
            //   const token = Cookies.get("token"); its only for browser local cookies not for server side cookies
            setLoggedIn(true);
            const token2 = res.data.token;
            console.log(token2);

            Cookies.set("token", token2);
          } catch (e) {
            setLoggedIn(false);
            console.log(e);
          }
        }}
      >
        Login
      </button>
    </div>
  );
}
