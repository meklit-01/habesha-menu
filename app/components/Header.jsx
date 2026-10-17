import Link from "next/link";
import Navbar from "./Navbar";
import SignOutButton from "./SignOutButton";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          <span className="am"> Habesha Kitchen</span>
        </Link>
        <Navbar />
        <SignOutButton />
      </div>
      <div className="weave" aria-hidden="true" />
    </header>
  );
}
