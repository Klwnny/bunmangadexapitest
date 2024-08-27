import { Database } from "bun:sqlite";
const db = new Database("./quotes.db");

const ItemsShipped = JSON.stringify(db.query("SELECT * FROM ItemsShipped").all())
const Artifacts = JSON.stringify(db.query("SELECT * FROM Artifacts").all())
const Cooking = JSON.stringify(db.query("SELECT * FROM Cooking").all())
const Fish = JSON.stringify(db.query("SELECT * FROM Fish").all())
const Minerals = JSON.stringify(db.query("SELECT * FROM Minerals").all())
const dbamount = JSON.stringify(db.query("SELECT * FROM sqlite_sequence").all())


const server = Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Home page!");
    if (url.pathname === "/blog") return new Response("Blog!");
    if (url.pathname === "/test1") return new Response(ItemsShipped);
    if (url.pathname === "/test2") return new Response(Artifacts);
    if (url.pathname === "/test3") return new Response(Cooking);
    if (url.pathname === "/test4") return new Response(Fish);
    if (url.pathname === "/test5") return new Response(Minerals);
    if (url.pathname === "/test6") return new Response(dbamount);
    return new Response("404!");

  },
});
  
  console.log(`Listening on ${server.url}`);