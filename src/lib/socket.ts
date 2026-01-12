// import { io, Socket } from "socket.io-client";

// const SOCKET_URL = "http://localhost:8000"; // backend url

// let socket: Socket | null = null;

// export const getSocket = (): Socket => {
//   if (!socket) {
//     socket = io(SOCKET_URL, {
//       transports: ["websocket"],
//       autoConnect: true,
//       auth: {
//         token:localStorage.getItem('token')
//       },
//     });
//   }
//   return socket;
// };
import { io, Socket } from "socket.io-client";

const SOCKET_URL = "http://localhost:8000";

let socket: Socket | null = null;

export const getSocket = (): Socket => {
  if (!socket) {
    socket = io(SOCKET_URL, {
      autoConnect: false, // Connect only after token
      transports: ["websocket"],
      auth: {
        token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
      },
    });
  }
  return socket;
};

export const connectSocket = () => {
  const s = getSocket();
  if (!s.connected) s.connect();
};

