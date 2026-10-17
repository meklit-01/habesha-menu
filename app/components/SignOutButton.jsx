"use client";

export default function SignOutButton() {
  async function handleSignOut() {
    await fetch("/api/auth/signout", { method: "POST" });

    window.location.href = "/signin";
  }

  return (
    <button className="btn btn-small" onClick={handleSignOut}>
      Sign Out
    </button>
  );
}
