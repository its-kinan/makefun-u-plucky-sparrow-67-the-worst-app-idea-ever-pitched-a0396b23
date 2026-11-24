// SockSync Pro — the worst app idea ever pitched.
// Revised in-session: cut the "Introducing" throat-clearing and the generic
// "AI-powered", spent the freed characters on a concrete absurd detail — a
// paid weekly harmony report emailed about your socks — which sharpens the
// founder-certain, perfectly-pointless picture the judge rewards.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "SockSync Pro pairs every left sock with its emotional soulmate, tracks each sock's mood in real time, and for $9.99 a month emails you a weekly harmony report, so your drawer finally achieves the peace your laundry never could.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`wrote ${PITCH.length} chars to /output/entry.txt`);
