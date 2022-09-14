import { Server } from "./server";

async function start() {
    const server = new Server(3000);
    await server.run();
}

start();