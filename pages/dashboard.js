import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";
import { useRouter } from "next/router";
import socketIOClient from "socket.io-client";
import Cookies from "js-cookie";

const Dashboard = () => {
  const { loggedIn } = useContext(AuthContext);
  const router = useRouter();
  const [interests, setInterests] = useState("");
  const [socket, setSocket] = useState(null);

  const handleInterestsChange = (event) => {
    setInterests(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!socket) {
      // You can also save a socket in local storage  once connected and then use it if you dont want complete new connection on reload
      // create socket connection if not already created
      const socketConnection = socketIOClient("http://localhost:5000", {
        query: { token: Cookies.get("token") },
      });
      setSocket(socketConnection);
    }
    // emit "join room" event with selected interests
    if (socket && socket.connected) {
      // emit "join room" event with selected interests
      socket.emit("join room", { interests });
    }
  };

  useEffect(() => {
    if (!loggedIn) {
      router.push("/");
    }
  }, [loggedIn, router]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Interests:
        <input type="text" value={interests} onChange={handleInterestsChange} />
      </label>
      <button type="submit">Join Room</button>
    </form>
  );
};

export default Dashboard;
