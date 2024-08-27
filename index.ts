import { Database } from "bun:sqlite";
const db = new Database("./quotes.db");

const ItemsShipped = JSON.stringify(db.query("SELECT * FROM ItemsShipped").all())


const server = Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Home page!");
    if (url.pathname === "/blog") return new Response("Blog!");
    if (url.pathname === "/test") return new Response(ItemsShipped);
    return new Response("404!");

  },
});
  
  console.log(`Listening on ${server.url}`);