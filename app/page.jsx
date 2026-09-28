import { redirect } from "next/navigation";

export default function Home() {
  redirect("/download/first-10k");
}
