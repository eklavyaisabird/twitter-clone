import { pipeline } from "@xenova/transformers";

export default async function checkTweet(text, interest) {
  try {
    console.log(
      `checking tweet...\ntext:${text.substring(
        0,
        10
      )}...\ninterest:${interest}`
    );
    let pipe = await pipeline(
      "zero-shot-classification",
      "Xenova/bart-large-mnli",
      { quantized: false }
    );
    // console.log("await out...");
    let out = await pipe(text, interest);
    console.log(out);

    const relevant = out.scores[0] >= 0.5;
    console.log(out.scores[0]);
    return relevant;
  } catch (error) {
    console.log(error);
  }
}

// checkTweet(
//   "i want to eat some gabagool right now and then shoot some hoops",
//   "sports"
// ).then((res) => console.log("res = ", res));
