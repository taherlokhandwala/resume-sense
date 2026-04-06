import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Sense" },
    { name: "description", content: "Smart AI feedback for your resume" },
  ];
}

export default function Home() {
  return <Welcome />;
}
