import Link from "next/link";
import { Sheet } from "@/components/ui";
import { en } from "@/content/en";

// not-found receives no params, so it shows English with an Arabic line.
export default function NotFound() {
  return (
    <Sheet tilt="c">
      <div className="lost">
        <div className="big" aria-hidden="true">
          404
        </div>
        <div className="hero-in">
          <h1>{en.notFound.title}</h1>
          <p>{en.notFound.text}</p>
          <p lang="ar" dir="rtl">
            هذه الصفحة غير موجودة.
          </p>
          <div className="btn-row">
            <Link href="/en" className="btn btn-red">
              {en.notFound.back}
            </Link>
            <Link href="/ar" className="btn btn-line" lang="ar">
              العودة إلى الرئيسية
            </Link>
          </div>
        </div>
      </div>
    </Sheet>
  );
}
