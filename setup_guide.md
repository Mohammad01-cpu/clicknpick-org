# دليل إعداد برامج العمولة للموقع

## الخطوات المطلوبة لتفعيل روابط العمولة:

### 1. التسجيل في Amazon Associates Germany
- زيارة: https://partnernet.amazon.de/
- إنشاء حساب جديد أو تسجيل الدخول
- تقديم معلومات الموقع الإلكتروني
- انتظار الموافقة (عادة 1-3 أيام)
- الحصول على Affiliate ID (مثل: hausprofi-21)

### 2. التسجيل في Berkey Water Filters Germany
- زيارة: https://berkey-waterfilters.de/en/pages/affiliate-program
- ملء نموذج التقديم
- تقديم معلومات الموقع والمحتوى
- عمولة: 3% لكل عملية بيع

### 3. التسجيل في German Food Box
- زيارة: https://getlasso.co/affiliate/german-food-box/
- التقديم عبر منصة Lasso
- عمولة: $5 لكل صندوق مباع

### 4. تحديث الروابط في الموقع

#### تحديث ملف affiliate_links.js:
```javascript
// استبدال الروابط التجريبية بالروابط الحقيقية
const affiliateLinks = {
    waterFilter: {
        amazon: {
            url: "https://amazon.de/dp/[PRODUCT_ID]?tag=[YOUR_AFFILIATE_ID]",
            // مثال: "https://amazon.de/dp/B08XYZ123?tag=hausprofi-21"
        }
    }
    // ... باقي المنتجات
};
```

### 5. إضافة Google Analytics للتتبع
```html
<!-- إضافة في <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 6. اختبار الروابط
- التأكد من عمل جميع أزرار "Jetzt kaufen" و "Abonnieren"
- التحقق من إضافة معرف الشريك التابع في الروابط
- اختبار تتبع النقرات في Google Analytics

### 7. الامتثال القانوني في ألمانيا

#### إضافة صفحات قانونية:
- **Impressum** (معلومات الناشر)
- **Datenschutzerklärung** (سياسة الخصوصية)
- **AGB** (الشروط والأحكام)
- **Affiliate-Hinweis** (إشعار الشراكة التابعة)

#### نص إشعار الشراكة التابعة:
```
"Diese Website enthält Affiliate-Links. Wenn Sie über diese Links einkaufen, 
erhalten wir möglicherweise eine kleine Provision, ohne dass Ihnen zusätzliche 
Kosten entstehen. Dies hilft uns, die Website zu betreiben und Ihnen weiterhin 
kostenlose Inhalte anzubieten."
```

### 8. تحسين معدلات التحويل

#### استراتيجيات مقترحة:
- إضافة مراجعات حقيقية للمنتجات
- إنشاء مقارنات بين المنتجات
- إضافة عروض محدودة الوقت
- تحسين أوصاف المنتجات
- إضافة ضمانات واضحة

### 9. مراقبة الأداء

#### مؤشرات الأداء الرئيسية:
- عدد النقرات على روابط العمولة
- معدل التحويل (CTR)
- الإيرادات الشهرية
- أفضل المنتجات أداءً

### 10. التوسع المستقبلي

#### منتجات إضافية مقترحة:
- أجهزة تنقية الهواء
- أدوات المطبخ الذكية
- منتجات العناية بالحديقة
- أجهزة اللياقة البدنية المنزلية

## ملاحظات مهمة:

1. **الصبر مطلوب**: قد تستغرق الموافقة على برامج العمولة عدة أيام
2. **المحتوى الجيد**: تأكد من جودة المحتوى لزيادة فرص القبول
3. **الشفافية**: اكشف دائماً عن الروابط التابعة
4. **التحديث المستمر**: راقب أداء الروابط وحدثها حسب الحاجة
5. **الامتثال القانوني**: تأكد من الامتثال لجميع القوانين الألمانية

