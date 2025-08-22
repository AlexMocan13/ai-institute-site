export const metadata = {
  title: "Organigram | AI Institute",
};

export default function OrganigramPage() {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container max-w-6xl mx-auto bg-white dark:bg-gray-950 rounded-2xl shadow-xl">
        <section className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 tracking-tight">
            Organigram
          </h1>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Descriere <strong>Director Committee</strong> și{" "}
            <strong>Scientific Committee</strong>
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <section className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="px-4 md:px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Director Committee
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  View the structure of the Director Committee:
                </p>
              </div>
              <div className="px-4 md:px-6 py-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <a
                      href="/files/organigram-director.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Download PDF
                    </a>
                  </li>
                  <li>
                    <a
                      href="/files/organigram-director.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View PNG
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="px-4 md:px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Scientific Committee
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  View the structure of the Scientific Committee:
                </p>
              </div>
              <div className="px-4 md:px-6 py-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <a
                      href="/files/organigram-scientific.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Download PDF
                    </a>
                  </li>
                  <li>
                    <a
                      href="/files/organigram-scientific.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View PNG
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
