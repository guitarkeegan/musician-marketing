import Link from "next/navigation"

export default function Footer() {
  return (
    <footer className="mt-10 text-white text-center sm:text-left sm:ml-12 mb-12">
      <div>
        <a className="hover:opacity-50" href="/">links</a>
        <span> | </span>
        <a className="hover:opacity-50" href="/">to</a>
        <span> | </span>
        <a className="hover:opacity-50" href="/"> other</a>
        <span> | </span>
        <a className="hover:opacity-50" href="/"> places</a>
      </div>
    </footer>
  );
}
