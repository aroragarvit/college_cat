import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SignUp() {
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
          marginTop: "60px",
          color: "#626262",
          fontSize: "18px",
          lineHeight: "27px",
          fontWeight: "400",
          paddingLeft: "15px",
        }}
        type={"text"}
        placeholder={"Your Name"}
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
        type={"email"}
        placeholder={"Email"}
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
      ></input>
      <button
        style={{
          height: "46px",
          width: "382px",
          marginTop: "34px",
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
      >
        Sign Me Up !
      </button>
      <div
        style={{
          width: "19px",
          height: "21px",
          color: "#000000",
          marginTop: "15px",
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "27px",
        }}
      >
        or
      </div>

      <button
        style={{
          height: "46px",
          width: "382px",
          marginTop: "14px",
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          paddingLeft: "15px",
          border: "1px solid #000000",
          lineHeight: "27px",
          fontSize: "17px",
          fontWeight: "400",
          color: "#626262",
          textAlign: "center",
        }}
      >
        <FontAwesomeIcon icon="coffee" />
        Continue with Google
      </button>
    </div>
  );
}
