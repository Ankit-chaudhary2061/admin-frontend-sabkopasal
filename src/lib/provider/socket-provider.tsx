// "use client";

// import { useEffect } from "react";
// import { getSocket } from "@/src/lib/socket";

// export default function SocketProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   useEffect(() => {
//     const socket = getSocket();

//     if (!socket.connected) {
//       socket.connect();
//     }

//     socket.on("connect", () => {
//       console.log("🟢 Socket connected:", socket.id);
//     });

//     socket.on("disconnect", () => {
//       console.log("🔴 Socket disconnected");
//     });

//     return () => {
//       // ❌ DO NOT disconnect here
//       socket.off("connect");
//       socket.off("disconnect");
//     };
//   }, []);

//   return <>{children}</>;
// }
"use client";
import { useEffect } from "react";
import { getSocket, connectSocket } from "@/src/lib/socket";

export default function SocketProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    connectSocket();
    const socket = getSocket();

    socket.on("connect", () => {
      console.log("🟢 Socket connected:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("🔴 Socket disconnected");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return <>{children}</>;
}
