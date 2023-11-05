import * as localeConfig from "date-fns/locale";

import { format, utcToZonedTime } from "date-fns-tz";
import { formatDistance, formatRelative } from "date-fns";

export function formatDateString({ input, isRelative, locale = "enUS" }) {
  const date = new Date(input);
  const pattern = "EEEE, d MMM yyyy";
  // const timedZone = utcToZonedTime(date, "Asia/Jakarta");
  const localeModule = localeConfig[locale.replace(/[^a-zA-Z0-9 ]/g, "")];

  if (isRelative) {
    return formatDistance(timedZone, new Date(), {
      locale: localeModule,
      includeSeconds: false,
      addSuffix:
        (locale == "id" && " yang lalu ") || (locale == "enUS" && " ago") || "",
    });
  }
  return format(timedZone, pattern, {
    timeZone: "Asia/Jakarta",
    locale: localeModule,
  });
}
