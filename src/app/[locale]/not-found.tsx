import Link from "next/link";
import { Mark } from "@/components/logo";
import { buttonStyles } from "@/components/ui";
import { en } from "@/content/en";

// not-found receives no params, so it shows English with an Arabic line.
export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-start justify-center py-24">
      <Mark size={40} animated />
      <p className="label mb-3 mt-8">404</p>
      <h1 className="h2">{en.notFound.title}</h1>
      <p className="lead mt-3">{en.notFound.text}</p>
      <p lang="ar" dir="rtl" className="lead mt-1">
        هذه الصفحة غير موجودة.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/en" className={buttonStyles.primary}>
          {en.notFound.back}
        </Link>
        <Link href="/ar" className={buttonStyles.secondary} lang="ar">
          العودة إلى الرئيسية
        </Link>
      </div>
    </section>
  );
}
