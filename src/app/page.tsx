import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-2xl font-bold leading-tight tracking-tight md:text-4xl mb-8">
        Welcome to Model Colosseum ⚔️
      </h1>
      This is for you if:
      <ul className="list-disc pl-5">
        <li>You're wondering if a new model is better for your product</li>
        <li>
          You want a single, up to date source of truth for all of your
          company's evaluation data
        </li>
        <li>
          You want to expand your evaluation data synthetically to make sure
          you're catching edge cases
        </li>
        <li>
          You want to combine state of the art, existing benchmarks with your
          own benchmarks for a holistic picture for your use-case.
        </li>
      </ul>
    </main>
  );
}
