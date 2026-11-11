# تمرین‌های VLSI

متن تمرین‌ها فارسی و فونت آن‌ها **B Nazanin** است. موتور کامپایل **XeLaTeX** از توزیع **MiKTeX** است.

## ساختار

- `tex/preamble.tex`: بسته‌ها، فونت و تنظیمات مشترک.
- `tex/cover-page.tex`: صفحهٔ عنوان مشترک و اطلاعات ثابت دانشگاه، درس، دانشجو و استاد.
- `assets/aut-logo.png`: نسخهٔ اصلی نشان رسمی دانشگاه.
- `assets/aut-logo-black.png`: نسخهٔ تک‌رنگ مشکی نشان که در صفحهٔ عنوان استفاده می‌شود.
- `setup-check.tex`: نمونهٔ آزمایشی فارسی، انگلیسی، ریاضی و مدار.
- `2/main.tex`: سند اصلی تمرین ۲ با صفحهٔ عنوان و هفت پاسخ.
- `2/solutions/*.tex`: نسخهٔ LaTeX پاسخ‌های ۲.۲، ۲.۳ و ۲.۶ تا ۲.۱۰.
- `2/*.md`: متن‌های اولیهٔ پاسخ‌ها؛ بررسی علمی آن‌ها هنوز انجام نشده است.
- `scripts/convert-exercise-markdown.js`: تبدیل متن‌های Markdown تمرین ۲ به فایل‌های LaTeX بدون بازنویسی محتوای فنی.
- `build/`: فایل‌های PDF و خروجی‌های کامپایل.

## کامپایل

دستورها را از ریشهٔ پروژه اجرا کنید:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\build.ps1
powershell -NoProfile -ExecutionPolicy Bypass -File .\build.ps1 -Document 2/main.tex
```

هر دستور دو بار XeLaTeX را اجرا می‌کند تا ارجاع‌ها تکمیل شوند. خروجی‌ها به‌ترتیب `build/setup-check.pdf` و `build/main.pdf` هستند.

برای هر سری تمرین، فقط این دو مقدار را در فایل اصلی آن تغییر دهید:

```latex
\AssignmentNumber{۲}
\AssignmentDate{۲۰ آبان ۱۴۰۵}
```

فرمان `\MakeAssignmentCover` صفحهٔ عنوان مشترک را تولید می‌کند. اطلاعات ثابت در `tex/cover-page.tex` نگهداری می‌شوند و نباید در فایل هر تمرین تکرار شوند.

در VS Code افزونهٔ **LaTeX Workshop** پیشنهاد شده است. فایل اصلی `.tex` را باز کنید و دستور `LaTeX Workshop: Build LaTeX project` را اجرا کنید. ساخت خودکار هنگام ذخیره غیرفعال است.

فونت فعلاً از فایل نصب‌شدهٔ `C:/Windows/Fonts/B-NAZANIN.TTF` خوانده می‌شود؛ روی سیستم دیگر مسیر همین فونت را در `tex/preamble.tex` تنظیم کنید.

نسخهٔ فعلی فونت، فایل Bold جداگانه ندارد؛ ضخامت عنوان‌ها با `AutoFakeBold` ساخته می‌شود. علامت ترکیبی همزهٔ بالا (`U+0654`) نیز در این نسخه وجود ندارد؛ در متن سند از نگارش پشتیبانی‌شده یا بازنویسی عبارت استفاده کنید.
