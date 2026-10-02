import Link from "next/link";
import { Mark } from "@/components/logo";
import { buttonStyles } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-start justify-center py-24">
      <Mark size={40} />
      <p className="label mb-3 mt-8">404</p>
      <h1 className="h2">This page doesn&apos;t exist.</h1>
      <p className="lead mt-3">The link may be old. The work is still here.</p>
      <Link href="/" className={`${buttonStyles.primary} mt-8`}>
        Back to home
      </Link>
    </section>
  );
}
