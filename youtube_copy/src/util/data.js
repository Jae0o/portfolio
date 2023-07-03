import { format, register } from 'timeago.js';
import kolocale from 'timeago.js/lib/lang/ko';

register("ko", kolocale);
export function dateFormat(date, lang = "en_US") {
  return format(date, lang)
};
