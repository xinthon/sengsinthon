"use client";

export default function WithFooter() {
  return (
    <div className="w-full flex bottom-0 right-0 z-50 mx-auto sm:flex sm:flex-row flex-col max-w-[1072px] px-8 lg:justify-center"></div>
  );

  return (
    <footer className="mx-auto flex sm:flex-row flex-col h-[4.5rem] max-w-3xl items-center justify-between px-8 md:px-4 py-8 text-sm text-gray-500">
      <small className="text-center">
        &copy; 2024 Sinthon Seng. All rights reserved.
      </small>
      <div className="text-center text-gray-500">
        <small>
          This site is built using{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            className="hover:text-gray-600 transition text-sm"
          >
            <small>Next.js</small>
          </a>
          , deployed on{" "}
          <a
            href="https://vercel.com/"
            target="_blank"
            className="hover:text-gray-800 transition text-sm"
          >
            <small>Vercel</small>
          </a>
          , and styled with{" "}
          <a
            href="https://www.squarespace.com/"
            target="_blank"
            className="hover:text-gray-600 transition text-sm"
          >
            <small>Squarespace</small>
          </a>
          .
        </small>
      </div>
    </footer>
  );
}
