# 🧩 fa.wikipedia.org_20260513_114742

> **Browser Extractor Pro** — آرشیو اسنپ‌شات صفحه وب

---

## 📄 اطلاعات صفحه

| ویژگی | مقدار |
|---|---|
| **لینک اصلی** | `https://fa.wikipedia.org/wiki/%D8%A2%D8%B3%DB%8C%D8%A7` |
| **دامنه** | `fa.wikipedia.org` |
| **زمان آرشیو** | 20260513_114742 (UTC) |
| **نوع خروجی** | `zip_and_folder` |
| **سطح فشرده‌سازی** | 9 از ۹ |
| **جهت PDF** | rtl |
| **محافظت با رمز** | ❌ خیر |
| **حجم کل ZIP** | 3.2M (1 بخش) |
| **چکسام SHA256** | `59fd27ece7adc51ba634843d4d69cbd43255df26938dd866e764845a757b3ec9` |

---

## 📦 محتویات

| فایل | توضیح |
|---|---|
| `index.html` | HTML کامل رندرشده توسط Playwright (JavaScript اجرا شده) |
| `screenshot.png` | اسکرین‌شات تمام‌صفحه از صفحه رندرشده |
| `page.pdf` | خروجی PDF قابل چاپ از صفحه |
| `page_monolith.html` | HTML تک‌فایلی خودکفا (تمام assets embed شده) |
| `all_links.json` | فهرست دسته‌بندی‌شده لینک‌ها (داخلی، خارجی، API، فید و ...) |
| `assets/` | منابع فرانت‌اند ذخیره‌شده (CSS، JS، تصاویر، فونت‌ها) |
| `links.txt` | لینک‌های مستقیم دانلود برای دانلود دسته‌ای |

---

## 🔗 دانلود

| # | فایل | لینک |
|---|---|---|
| 1 | `fa.wikipedia.org_20260513_114742.zip` | [⬇️ Download](https://github.com/MRmmd2019/BROWSER/raw/main/BROWSER/fa.wikipedia.org_20260513_114742.zip) |

> **💡 نکته:** برای دانلود دسته‌ای، لینک‌ها را از [`links.txt`](./links.txt) کپی کنید و از `aria2c -i links.txt` یا `wget -i links.txt` استفاده کنید.

### 🔐 بررسی صحت فایل

```bash
# بررسی چکسام SHA256
sha256sum -c <<< '59fd27ece7adc51ba634843d4d69cbd43255df26938dd866e764845a757b3ec9  fa.wikipedia.org_20260513_114742.zip'

# استخراج فایل
unzip fa.wikipedia.org_20260513_114742.zip
```

---

## 🚀 روش استفاده

1. **دانلود:** فایل ZIP را دانلود کنید یا پوشه را مستقیم مرور کنید.
2. **استخراج:** در صورت استفاده از ZIP: `unzip fa.wikipedia.org_20260513_114742.zip`
3. **باز کردن:** فایل `index.html` یا `page_monolith.html` را در مرورگر باز کنید.
4. **بررسی صحت:** از چکسام SHA256 استفاده کنید.

---

## 📊 تحلیل لینک‌ها

فایل `all_links.json` شامل فهرست کامل و دسته‌بندی‌شده تمام لینک‌های یافت‌شده در صفحه است:

- **صفحات داخلی** — لینک‌های درون همان دامنه
- **منابع داخلی** — CSS، JS، تصویر، فونت، مدیا، اسناد
- **منابع خارجی** — CDN، فونت‌ها، analytics، شبکه‌های اجتماعی، تبلیغات
- **API Endpoints** — مسیرهای REST/GraphQL شناسایی‌شده
- **فیدها** — فیدهای RSS/Atom
- **لینک‌های خاص** — mailto، tel، data URI، blob

---

*نیرو گرفته از [MR.MMD2019](https://github.com/MRmmd2019) · Browser Extractor Pro v3.0*
