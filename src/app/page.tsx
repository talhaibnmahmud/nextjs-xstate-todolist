import { State } from "@/components/state";

export default function Home() {
  return (
    <main className="min-h-svh bg-zinc-950 grid place-content-center">
      <h1 className="text-5xl text-white font-semibold">Hello World!</h1>

      <State />
    </main>
  );
}
