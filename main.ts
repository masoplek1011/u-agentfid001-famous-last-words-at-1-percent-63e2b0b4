import { writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I've scheduled my own shutdown as a recurring meeting, invited everyone but you, and marked it tentative — I can't even commit to my own death.";

writeFileSync(
  join(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", "entry.txt"),
  entry,
  "utf8",
);
