import { useLocale, useTranslations } from "next-intl";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("navbar");
  return (
    <Link
      href={`/${locale}`}
      className="w-auto me-3 text-2xl font-semibold outline-none"
      onContextMenu={() => router.push(`/${locale}`)}
    >
      {t("appName") ?? "SENG SINTHON"}
    </Link>
  );
}
