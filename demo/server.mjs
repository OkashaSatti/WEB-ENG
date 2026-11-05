import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { page, time } from "./page.mjs";

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const staticPage = readFileSync(
  "demo/dist/ssg.html",
  "utf8"
);
let isr = { html: "", madeAt: 0 };
const server = createServer(async (req, res) => {
  const url = req.url;

  if (url === "/csr") {
    res.end(
      page(
        "CSR",
        `<div id="app">Loading...</div>`,
        `<script>
          document.getElementById("app").innerHTML =
            "<p>Rendered in the browser using JavaScript.</p>";
        </script>`
      )
    );
  } 
  else if (url === "/isr") {
  if (Date.now() - isr.madeAt > 5000) {
    isr = {
      html: page("ISR", `<p id="time">Regenerated at ${time()}</p>`),
      madeAt: Date.now(),
    };
  }
  res.end(isr.html);
}
  else if (url === "/ssg") {
    res.end(staticPage);
  } 
  else if (url === "/isr") {
    res.end(
      page(
        "ISR",
        `<p>Generated page served at ${time()}</p>`
      )
    );
  } 
  else if (url === "/stream") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
      "Transfer-Encoding": "chunked"
    });

    res.write(
      page(
        "Streaming",
        `<p>First chunk sent immediately.</p>`
      ).replace("</body></html>", "")
    );

    await sleep(1500);

    res.write("<p>Second chunk sent after 1.5 seconds.</p>");
    res.end("</body></html>");
  } 
  else {
    res.end(
      page(
        "Rendering Demo",
        `<ul>
          <li><a href="/csr">CSR</a></li>
          <li><a href="/ssr">SSR</a></li>
          <li><a href="/ssg">SSG</a></li>
          <li><a href="/isr">ISR</a></li>
          <li><a href="/stream">Streaming</a></li>
        </ul>`
      )
    );
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});