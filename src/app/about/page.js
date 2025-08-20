import HistorySection from "./HistorySection";
import { FaRegCalendarAlt } from "react-icons/fa";

export const metadata = {
  title: "About – Mission & History | AIRi @ UTCN",
};

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <section id="mission" className="mb-12">
        <h1 className="text-3xl font-semibold mb-4">Mission</h1>
        <p className="text-gray-700 dark:text-gray-300">{`Paragraf mission...`}</p>
      </section>

      <section className={`icia-wrapper rounded-3xl border bg-white/80 dark:bg-slate-900/70 backdrop-blur shadow-xl px-5 py-8 md:px-8 md:py-10`}>
        <div className="flex flex-col items-center mb-6 md:mb-8">
          <FaRegCalendarAlt className="h-8 w-8 mb-2" style={{ color: "var(--icia-title)" }} />
          <h2 className="text-3xl font-extrabold tracking-wide" style={{ color: "var(--icia-title)" }}>
            ICIA Timeline
          </h2>
        </div>

        <HistorySection />
      </section>
    </main>
  );
}
