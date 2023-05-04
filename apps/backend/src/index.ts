import { program } from "commander";
import cors from "cors";
import express from "express";

import listingRoutes from "./routes/listing";
import { createOTCMarketOnLevelDB } from "./utils/db";

program
  .option("--port [number]", "Port to open (default: 8080)", "8080")
  .option(
    "--path [path]",
    "Path where DB data or config will be located (default: ~/.injective-otc)",
    "~/.injective-otc",
  )
  .option("--cors [enabled]", "Enable cors (default: true)", true)
  .requiredOption("--chain-id <value>");

program.parse();

const options = program.opts();

const port = ((): number => {
  const num = Number.parseInt(options.port);
  if (num.toString() !== options.port) {
    throw new Error("Invalid port");
  }
  return num;
})();

const app = express();

if (options.cors === true || options.cors === "true") {
  console.log("CORS enabled");
  app.use(cors());
}

app.use(express.json());
app.use("/api/listing", listingRoutes(createOTCMarketOnLevelDB(options.path)));

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(port, async () => {
  console.log(`Injective OTC backend listening on port ${port}.`);
});
