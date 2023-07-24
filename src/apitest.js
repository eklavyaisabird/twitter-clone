import { pipeline } from "@xenova/transformers";

let s = "one day i will see the world";
let labels = ["travel", "cooking", "dancing"];

// Allocate a pipeline for sentiment-analysis
try {
  console.log("await pipeline...");
  let pipe = await pipeline(
    "zero-shot-classification",
    "Xenova/bart-large-mnli"
  );

  console.log("await out...");
  let out = await pipe(s, labels);

  console.log(out);
} catch (error) {
  console.log(error);
}
