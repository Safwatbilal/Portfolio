import type { ReactNode } from "react";
import Image from "next/image";
import type { Project, Screenshot } from "@/content";

// Schematic UI sketches, used where real screenshots can't be published
// (private dashboards). Always captioned as schematics. Never present them as
// screenshots. Replace with real, data-blurred screenshots when available.

function Browser({
  url,
  children,
  rtl,
  className = "",
}: {
  url: string;
  children: ReactNode;
  rtl?: boolean;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-surface ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2" dir="ltr">
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="ms-2 truncate font-mono text-[0.625rem] text-ink-3">{url}</span>
      </div>
      <div dir={rtl ? "rtl" : "ltr"} lang={rtl ? "ar" : "en"} className="text-[0.625rem] leading-tight">
        {children}
      </div>
    </div>
  );
}

function Phone({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      dir="rtl"
      lang="ar"
      className={`overflow-hidden rounded-[18px] border border-line bg-surface p-2 text-[0.625rem] leading-tight ${className}`}
    >
      <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-line" />
      {children}
    </div>
  );
}

const Bar = ({ w, strong }: { w: string; strong?: boolean }) => (
  <span className={`block h-1.5 rounded-full ${strong ? "bg-ink/25" : "bg-line"}`} style={{ width: w }} />
);

function SideItem({ children, active }: { children: ReactNode; active?: boolean }) {
  return (
    <li
      className={`rounded-md px-2 py-1 ${active ? "bg-accent-soft font-semibold text-accent-ink" : "text-ink-2"}`}
    >
      {children}
    </li>
  );
}

function Tredro() {
  return (
    <div className="grid grid-cols-2 items-end gap-3 sm:grid-cols-[2.2fr_1fr_1fr]">
      <div className="col-span-2 sm:col-span-1">
        <Browser url="dashboard.tredro.online" rtl>
          <div className="flex">
            <ul className="w-[30%] space-y-0.5 border-e border-line p-2">
              <SideItem active>المناديب</SideItem>
              <SideItem>الزبائن</SideItem>
              <SideItem>الطلبيات</SideItem>
              <SideItem>الفواتير</SideItem>
              <SideItem>المستودعات</SideItem>
            </ul>
            <div className="flex-1 space-y-2 p-2.5">
              <div className="grid grid-cols-3 gap-1.5">
                {["الطلبيات", "التحصيل", "الزيارات"].map((k) => (
                  <div key={k} className="rounded-md border border-line p-1.5">
                    <span className="text-ink-3">{k}</span>
                    <span className="mt-1 block h-2 w-2/3 rounded-sm bg-accent/70" />
                  </div>
                ))}
              </div>
              <div className="space-y-1.5 rounded-md border border-line p-2">
                <Bar w="85%" strong />
                <Bar w="70%" />
                <Bar w="78%" />
                <Bar w="60%" />
              </div>
            </div>
          </div>
        </Browser>
        <p className="label mt-2 normal-case tracking-normal">Company dashboard · web</p>
      </div>
      <div>
        <Phone>
          <p className="mb-1.5 font-semibold text-ink">خط السير · السبت</p>
          <ul className="space-y-1">
            {[true, true, false, false].map((done, i) => (
              <li key={i} className="flex items-center gap-1.5 rounded-md border border-line p-1.5">
                <span className={`size-2 shrink-0 rounded-full ${done ? "bg-ok" : "bg-line"}`} />
                <Bar w="70%" />
              </li>
            ))}
          </ul>
          <span className="mt-2 block rounded-md bg-accent py-1 text-center font-semibold text-on-accent">
            تثبيت الموقع GPS
          </span>
        </Phone>
        <p className="label mt-2 normal-case tracking-normal">Rep app · Android</p>
      </div>
      <div>
        <Phone>
          <p className="mb-1.5 font-semibold text-ink">اطلب من الشركة</p>
          <div className="grid grid-cols-2 gap-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-md border border-line p-1">
                <span className="mb-1 block aspect-square rounded-sm bg-surface-2" />
                <Bar w="80%" />
              </div>
            ))}
          </div>
          <span className="mt-2 block rounded-md border border-line py-1 text-center font-semibold text-ink">
            السلة
          </span>
        </Phone>
        <p className="label mt-2 normal-case tracking-normal">Customer app · Android</p>
      </div>
    </div>
  );
}

function Kadnya() {
  return (
    <Browser url="kadnya.com · control panel" rtl>
      <div className="flex">
        <div className="w-[30%] min-w-0 border-e border-line p-2">
          <div className="mb-2 flex flex-wrap gap-1">
            {["مدير", "مدرب", "طالب"].map((r, i) => (
              <span
                key={r}
                className={`rounded px-1.5 py-0.5 ${i === 1 ? "bg-accent text-on-accent" : "bg-surface-2 text-ink-2"}`}
              >
                {r}
              </span>
            ))}
          </div>
          <ul className="space-y-0.5">
            <SideItem>المنتجات</SideItem>
            <SideItem>الطلاب</SideItem>
            <SideItem>الطلبات</SideItem>
            <SideItem>الفواتير</SideItem>
            <SideItem active>منشئ الموقع</SideItem>
          </ul>
        </div>
        <div className="min-w-0 flex-1 p-2.5">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="text-ink-3">الهوية</span>
            {["bg-accent", "bg-ink", "bg-ok", "bg-line"].map((c) => (
              <span key={c} className={`size-3 rounded-full ${c}`} />
            ))}
            <span className="ms-auto rounded border border-line px-1.5 font-semibold text-ink">Aa</span>
          </div>
          <div className="space-y-1.5 rounded-md border border-dashed border-accent/50 p-2">
            <div className="flex items-center gap-2 rounded-sm bg-surface-2 p-2">
              <span className="size-5 rounded-full bg-accent/70" />
              <div className="flex-1 space-y-1">
                <Bar w="60%" strong />
                <Bar w="40%" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-1 rounded-sm border border-line p-1.5">
                  <span className="block h-5 rounded-sm bg-surface-2" />
                  <Bar w="75%" />
                </div>
              ))}
            </div>
            <span className="mx-auto block w-1/3 rounded bg-accent py-1 text-center text-on-accent">
              اشترك
            </span>
          </div>
        </div>
      </div>
    </Browser>
  );
}

function Nebu() {
  return (
    <div className="relative">
      <Browser url="app.thenebu.com">
        <div className="grid grid-cols-[1fr_1.2fr] gap-2.5 p-2.5">
          <div className="space-y-1.5">
            <p className="font-semibold text-ink">Cloud accounts</p>
            {[
              ["AWS", "bg-ok"],
              ["GCP", "bg-ok"],
              ["AWS", "bg-accent"],
            ].map(([p, c], i) => (
              <div key={i} className="flex items-center gap-1.5 rounded-md border border-line p-1.5">
                <span className="rounded bg-surface-2 px-1 font-mono text-ink-2">{p}</span>
                <Bar w="55%" />
                <span className={`ms-auto size-1.5 rounded-full ${c}`} />
              </div>
            ))}
          </div>
          <div className="space-y-1.5 rounded-md border border-line p-2">
            <p className="font-semibold text-ink">Compliance report</p>
            {[80, 64, 92, 48].map((w, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <Bar w="30%" />
                <span className="h-1.5 flex-1 rounded-full bg-surface-2">
                  <span className="block h-1.5 rounded-full bg-accent/70" style={{ width: `${w}%` }} />
                </span>
              </div>
            ))}
            <Bar w="90%" />
            <Bar w="70%" />
          </div>
        </div>
      </Browser>
      <div className="absolute -bottom-3 inset-e-3 flex w-44 items-center gap-2 rounded-lg border border-line bg-surface p-2 text-[0.625rem] shadow-[0_8px_24px_-12px_rgb(20_23_31/0.18)]">
        <span className="size-2 shrink-0 rounded-full bg-accent" />
        <div className="flex-1 space-y-1">
          <p className="font-semibold text-ink">Notification</p>
          <Bar w="85%" />
        </div>
      </div>
    </div>
  );
}

function Suttor() {
  return (
    <Browser url="suttor.vercel.app" rtl>
      <div className="grid grid-cols-[1.3fr_1fr] gap-2.5 p-2.5">
        <div className="space-y-1.5 rounded-lg border border-line p-2">
          <p className="font-semibold text-ink">قائمة القراءة</p>
          {[72, 40, 15].map((w, i) => (
            <div key={i} className="flex items-center gap-2 rounded-md border border-line p-1.5">
              <span className="h-7 w-5 shrink-0 rounded-sm bg-[#E8620C]/70" />
              <div className="flex-1 space-y-1">
                <Bar w="70%" strong />
                <span className="block h-1 rounded-full bg-surface-2">
                  <span className="block h-1 rounded-full bg-[#E8620C]" style={{ width: `${w}%` }} />
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-1.5 rounded-lg border border-line p-2">
          <p className="font-semibold text-ink">ملاحظاتي</p>
          <Bar w="90%" />
          <Bar w="75%" />
          <Bar w="85%" />
          <span className="mt-2 block rounded bg-[#E8620C] py-1 text-center font-semibold text-white">
            سجّل تقدّمك اليومي
          </span>
        </div>
      </div>
    </Browser>
  );
}

const visuals = { tredro: Tredro, kadnya: Kadnya, nebu: Nebu, suttor: Suttor };

function BrowserShot({ shot, url, priority, sizes }: { shot: Screenshot; url: string; priority?: boolean; sizes: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2" dir="ltr">
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="ms-2 truncate font-mono text-[0.625rem] text-ink-3">{url}</span>
      </div>
      <Image
        src={shot.src}
        alt={shot.label}
        width={shot.width}
        height={shot.height}
        priority={priority}
        sizes={sizes}
        className="aspect-16/10 h-auto w-full object-cover object-top"
      />
    </div>
  );
}

function PhoneShot({ shot, priority }: { shot: Screenshot; priority?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[22px] border-[5px] border-ink/85 bg-surface shadow-[0_8px_24px_-12px_rgb(20_23_31/0.25)]">
      <Image
        src={shot.src}
        alt={shot.label}
        width={shot.width}
        height={shot.height}
        priority={priority}
        sizes="(min-width: 768px) 15vw, 30vw"
        className="aspect-390/844 h-auto w-full object-cover object-top"
      />
    </div>
  );
}

/** The main visual: first desktop screenshot, else phone screenshots, else the schematic. */
export function ProjectVisual({
  project,
  labels,
  priority = false,
}: {
  project: Project;
  labels: { schematic: string; screenshot: string };
  priority?: boolean;
}) {
  const desktop = project.screenshots.find((s) => !s.phone);
  const phones = project.screenshots.filter((s) => s.phone).slice(0, 3);
  if (desktop) {
    return (
      <figure className="m-0">
        <div className="relative rounded-2xl bg-surface-2 p-3 sm:p-5">
          <BrowserShot shot={desktop} url={project.hrefLabel} priority={priority} sizes="(min-width: 768px) 60vw, 100vw" />
          {phones[0] && (
            <div className="absolute -bottom-6 inset-e-2 hidden w-[17%] sm:block">
              <PhoneShot shot={phones[0]} />
            </div>
          )}
        </div>
        <figcaption className="label mt-2.5 text-[0.6875rem]">
          {labels.screenshot} · {desktop.label}
        </figcaption>
      </figure>
    );
  }
  if (phones.length) {
    return (
      <figure className="m-0">
        <div className="grid grid-cols-3 gap-3 rounded-2xl bg-surface-2 p-4 sm:p-6">
          {phones.map((p, i) => (
            <PhoneShot key={p.src} shot={p} priority={priority && i === 0} />
          ))}
        </div>
        <figcaption className="label mt-2.5 text-[0.6875rem]">{labels.screenshot}</figcaption>
      </figure>
    );
  }
  const Visual = visuals[project.visual];
  return (
    <figure className="m-0">
      <div role="img" aria-label={project.visualAlt} className="select-none rounded-2xl bg-surface-2 p-4 sm:p-6">
        <div aria-hidden="true">
          <Visual />
        </div>
      </div>
      <figcaption className="label mt-2.5 text-[0.6875rem]">{labels.schematic}</figcaption>
    </figure>
  );
}

/** Every screenshot of a project with captions: desktop shots 2-up, phone shots in a row. */
export function ScreenshotGallery({ project }: { project: Project }) {
  const desktop = project.screenshots.filter((s) => !s.phone);
  const phones = project.screenshots.filter((s) => s.phone);
  return (
    <div className="space-y-8">
      {desktop.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2">
          {desktop.map((s) => (
            <figure key={s.src} className="m-0">
              <BrowserShot shot={s} url={project.hrefLabel} sizes="(min-width: 640px) 40vw, 100vw" />
              <figcaption className="mt-2 text-sm text-ink-3">{s.label}</figcaption>
            </figure>
          ))}
        </div>
      )}
      {phones.length > 0 && (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {phones.map((s) => (
            <figure key={s.src} className="m-0">
              <PhoneShot shot={s} />
              <figcaption className="mt-2 text-sm text-ink-3">{s.label}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
