"use client";

import Image from "next/image";
import { useState } from "react";
import App from "./components/App.js";
import { Agdasima } from "next/font/google";

const agdasima = Agdasima({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return <App className={agdasima.className} />;
}
