# 🌙 Heba Ashraf - Full Stack Developer Portfolio

موقع شخصي حديث بتصميم داكن كلاسيكي مع خلفية متحركة تشبه الشبكة العنكبوتية للـ Full Stack Developer.

> Modern dark-themed portfolio with spider web network background animation for a Full Stack Developer.

## ✨ المميزات | Features

- 🕸️ **خلفية شبكية متحركة**: شبكة ديناميكية تفاعلية تشبه الشبكة العنكبوتية تتفاعل مع الماوس
- 🎨 **تصميم داكن عصري**: خلفية داكنة بتدرجات جميلة مع تأثيرات زجاجية شفافة
- 📱 **متجاوب بالكامل**: يعمل بشكل مثالي على جميع الأجهزة
- ♿ **قابل للوصول**: ARIA labels، HTML semantic، تباين ألوان جيد
- ⚡ **سريع**: مبني بـ Vite للأداء الأمثل
- 🎯 **TypeScript**: كود آمن بنوع البيانات
- 🎭 **انيميشن**: تأثيرات fade-in و hover ناعمة مع أنيميشن مستمر
- 🌓 **تأثيرات Glassmorphism**: تصميم عصري مع تأثيرات زجاجية شفافة
- 🚀 **Full Stack**: يعرض مهارات Full Stack Developer
- 💻 **GitHub Integration**: روابط مباشرة لمشاريع GitHub

## 🛠️ التقنيات | Tech Stack

- **React 19** - إطار عمل UI
- **TypeScript** - الأمان النوعي
- **Vite** - أداة بناء وسيرفر تطوير
- **Tailwind CSS 3.4** - إطار عمل CSS
- **React Router** - التصفح داخل الموقع
- **Chart.js + react-chartjs-2** - تصور البيانات

## 🚀 البدء | Getting Started

### المتطلبات | Prerequisites

- Node.js 18+ و npm

### التنصيب | Installation

```bash
npm install
```

### التطوير | Development

```bash
npm run dev
```

افتح `http://localhost:5173` لمشاهدة الموقع.

### البناء | Build

```bash
npm run build
```

### معاينة | Preview

```bash
npm run preview
```

## 📁 هيكل المشروع | Project Structure

```
my-website/
├── public/              # الملفات الثابتة (صور)
├── src/
│   ├── components/      # مكونات React
│   │   ├── Layout.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── DeveloperHero.tsx      ← قسم المقدمة الشخصية
│   │   ├── SkillsSection.tsx       ← قسم المهارات
│   │   ├── ProjectsSection.tsx     ← قسم المشاريع
│   │   └── ContactSection.tsx      ← قسم التواصل
│   ├── pages/           # صفحات
│   │   ├── Home.tsx     ← الصفحة الرئيسية
│   │   └── About.tsx    ← صفحة عني
│   ├── App.tsx          # المكون الرئيسي مع routing
│   ├── main.tsx         # نقطة البداية
│   ├── index.css        # الأنماط العامة مع Tailwind
│   └── App.css          # انيميشن مخصصة
├── info.json            # بيانات التصميم والثيم
└── package.json
```

## 🎨 نظام التصميم | Design System

يتبع الموقع نظام تصميم مخصص مع:

### الألوان | Colors
- **Background**: Dark gradient (Purple to Blue)
- **Primary**: White (#FFFFFF)
- **Secondary**: Purple (#8B5CF6)
- **Accent**: Orange (#F97316)
- **Muted**: Gray (#A1A1AA)

### التأثيرات | Effects
- **Glass Cards**: خلفية شفافة مع blur
- **Gradient Background**: تدرج داكن عصري
- **Hover Effects**: تأثيرات تفاعلية ناعمة
- **Glow Shadows**: ظلال مضيئة

## 📄 الصفحات | Pages

### الصفحة الرئيسية (`/`)
- قسم المقدمة الشخصية مع صورة وجسيتن
- قسم المهارات الشخصية مع progress bars
- قسم المشاريع المميزة
- قسم التواصل

### صفحة عني (`/about`)
- معلومات شخصية
- عرض المهارات
- معلومات التواصل

## 🎯 الأقسام المتاحة | Available Sections

### ✅ 1. قسم المعلومات الشخصية | Personal Info Section
في قسم Hero:
- الاسم والوظيفة
- نبذة شخصية بالعربي
- أزرار التواصل والمشاريع

### ✅ 2. قسم المهارات الشخصية | Personal Skills Section
- عرض المهارات مع progress bars
- 10 مهارات رئيسية
- ألوان ديناميكية لكل مهارة
- تأثير shimmer

### ✅ 3. قسم المشاريع | Projects Section
- **صراحة** - تطبيق إلكتروني للاستطلاعات (Full Stack - React, Node.js, MongoDB)
- **Social Media App** - منصة اجتماعية كاملة (Next.js, PostgreSQL, Redis)
- عرض التقنيات المستخدمة
- تأثيرات hover وتوضيح مع إرشادات
- روابط GitHub

### ✅ 4. قسم المعلومات الشخصية المفصل | Detailed About
- معلومات عن Full Stack Development
- عرض شامل للتقنيات (Frontend, Backend, Tools)
- قسم GitHub Projects
- تأثيرات تفاعلية

### ✅ 5. قسم التواصل | Contact Section
- Email: hebaashraf81@gmail.com
- Phone: 01062043130
- Location: Cairo, Egypt
- أزرار روابط خارجية

## 🎨 الاستايل الداكن | Dark Theme

تم تطبيق:
- ✅ خلفية داكنة بتدرج جميل
- ✅ بطاقات زجاجية شفافة (Glassmorphism)
- ✅ تأثيرات hover وtransitions ناعمة
- ✅ ألوان مضيئة وواضحة
- ✅ تأثيرات glow على الأزرار
- ✅ تصميم tech-inspired عصري

## 🌐 دعم المتصفحات | Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

MIT

## 👤 المؤلف | Author

**هبة أشرف | Heba Ashraf**
- 📧 Email: hebaashraf81@gmail.com
- 📱 Phone: 01062043130
- 📍 Location: Cairo, Egypt

---

Made with ❤️ & React
