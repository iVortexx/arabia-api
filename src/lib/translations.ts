
export const translations = {
  ar: {
    dir: 'rtl',
    nav: {
      docs: 'الوثائق',
      explorer: 'المستكشف',
      faq: 'الأسئلة الشائعة',
      about: 'حول',
    },
    home: {
      hero: {
        title: 'الواجهة البرمجية النهائية للدول والمدن العربية',
        subtitle: 'واجهة برمجية حديثة، سريعة، ومجانية توفر بيانات شاملة عن الدول والمدن في العالم العربي. مثالية للمطورين والباحثين والمبدعين.',
        cta: 'عرض الوثائق',
      },
      features: {
        bilingual: {
          title: 'دعم ثنائي اللغة',
          description: 'احصل على البيانات باللغتين العربية والإنجليزية بسلاسة باستخدام معامل `lang`.',
        },
        fast: {
          title: 'سرعة فائقة',
          description: 'مبنية على Next.js، تستجيب واجهتنا البرمجية في أجزاء من الثانية.',
        },
        free: {
          title: 'مجانية بالكامل',
          description: 'الوصول إلى جميع النقاط النهائية دون أي تكلفة أو حدود للمعدل. مثالية لمشروعك القادم.',
        },
      },
    },
    docs: {
      title: 'الوثائق',
      introduction: 'مرحبًا بك في وثائق Arabia API Hub. توفر واجهتنا البرمجية طريقة بسيطة وقوية للوصول إلى بيانات البلدان والمدن في العالم العربي. تدعم جميع نقاط النهاية الاستجابات باللغتين الإنجليزية والعربية عبر معامل الاستعلام `lang`.',
      sidebarTitle: 'وثائق الواجهة البرمجية',
      endpointsTitle: 'نقاط النهاية',
      example: 'مثال',
      params: {
        title: 'معاملات الاستعلام',
        lang: '`en` أو `ar` (الافتراضي).',
        country: 'تصفية المدن حسب رمز البلد المكون من حرفين (مثل `EG`).',
        q: 'مصطلح البحث. يمكن أن يكون باللغة العربية أو الإنجليزية.',
        required: 'مطلوب',
        optional: 'اختياري'
      },
      endpoints: {
        getCountries: {
          title: 'الحصول على كل الدول',
          description: 'استرداد قائمة بجميع البلدان المدعومة.',
        },
        getCountryByCode: {
          title: 'الحصول على دولة حسب الرمز',
          description: 'استرداد دولة واحدة ومدنها عن طريق رمز البلد المكون من حرفين (ISO 3166-1 alpha-2).',
        },
        getCitiesByCountry: {
          title: 'الحصول على مدن حسب الدولة',
          description: 'استرداد جميع المدن لدولة معينة عن طريق رمزها.',
        },
        getAllCities: {
          title: 'الحصول على كل المدن',
          description: 'استرداد قائمة بجميع المدن عبر جميع البلدان. يمكن تصفيتها حسب البلد.',
        },
        search: {
          title: 'بحث',
          description: 'إجراء بحث عن البلدان والمدن. يدعم البحث الاستعلامات باللغتين الإنجليزية والعربية.',
        },
      },
    },
    explorer: {
      title: 'مستكشف الواجهة البرمجية',
      subtitle: 'اختبر نقاط النهاية مباشرة. أدخل مسار نقطة النهاية وشاهد استجابة JSON على الفور.',
      response: 'الاستجابة',
      form: {
        endpoint: 'نقطة النهاية',
        selectEndpoint: 'اختر نقطة نهاية',
        button: 'تشغيل الطلب',
      },
      params: {
        code: 'رمز البلد (eg. EG)',
        country: 'رمز البلد (eg. AE)',
        q: 'مصطلح البحث',
      },
      placeholders: {
        code: 'EG',
        country: 'AE',
        q: 'Cairo',
      },
      endpoints: {
        countries: 'الحصول على كل الدول',
        country_by_code: 'الحصول على دولة حسب الرمز',
        cities_by_country: 'الحصول على مدن حسب الدولة',
        cities: 'الحصول على كل المدن',
        search: 'بحث',
      },
      error: {
        apiError: 'خطأ في الواجهة البرمجية',
        fetchFailed: 'فشل في جلب البيانات',
        invalidEndpoint: 'نقطة نهاية غير صالحة',
        generic: 'حدث خطأ ما',
      }
    },
    faq: {
      title: 'الأسئلة الشائعة',
      subtitle: 'ابحث عن إجابات للأسئلة الشائعة حول استخدام Arabia API Hub.',
      items: [
        {
          question: 'هل هذه الواجهة البرمجية مجانية تمامًا للاستخدام؟',
          answer: 'نعم، Arabia API Hub مجانية تمامًا لجميع أنواع المشاريع، بما في ذلك المشاريع التجارية. لا توجد رسوم خفية أو حدود للمعدل.',
        },
        {
          question: 'هل أحتاج إلى مفتاح API للوصول إلى البيانات؟',
          answer: 'لا، لا تحتاج إلى مفتاح API. جميع نقاط النهاية عامة ويمكن الوصول إليها دون أي مصادقة.',
        },
        {
          question: 'ما هي اللغات المدعومة لاستجابة البيانات؟',
          answer: 'تدعم الواجهة البرمجية اللغتين الإنجليزية ("en") والعربية ("ar"). يمكنك تحديد لغتك المفضلة باستخدام معامل الاستعلام `?lang=ar` على أي نقطة نهاية. اللغة العربية هي الافتراضية.',
        },
        {
          question: 'ما مدى دقة البيانات؟',
          answer: 'يتم الحصول على البيانات من قواعد بيانات عامة موثوقة ويتم صيانتها بانتظام. ومع ذلك، إذا وجدت أي تناقضات، فلا تتردد في فتح مشكلة على مستودع GitHub الخاص بنا.',
        },
      ],
    },
    about: {
      title: 'حول Arabia API Hub',
      subtitle: 'تعرف على المزيد حول المشروع ورسالته والمبدع الذي يقف وراءه.',
      creator: {
        title: 'المبدع',
        name: 'محمد من Mishcoders',
        description: 'تم إحياء هذا المشروع بواسطة محمد، وهو مطور شغوف ومؤسس Mishcoders. بحب بناء أدوات مفيدة لمجتمع المطورين، أنشأ هذه الواجهة البرمجية لسد فجوة في البيانات التي يمكن الوصول إليها وعالية الجودة حول العالم العربي.',
      },
      mission: {
        title: 'مهمتنا',
        subtitle: 'لماذا تم إنشاء هذه الواجهة البرمجية',
        description: 'كان الهدف بسيطًا: إنشاء واجهة برمجية مجانية وموثوقة وسهلة الاستخدام تمكن المطورين من بناء تطبيقات ببيانات غنية ومحلية للمنطقة العربية. سواء كان ذلك لمشروع هواية أو تطبيق تجاري، فإن Arabia API Hub هنا للمساعدة.',
      },
      contribute: {
        title: 'ساهم في المشروع',
        description: 'هذا مشروع مفتوح المصدر. نرحب بالمساهمات وتقارير الأخطاء وطلبات الميزات.',
        button: 'عرض على GitHub',
      },
    },
    footer: {
      builtBy: 'بناء بواسطة',
      author: 'محمد (Mishcoders)',
      sourceCode: 'الكود المصدري متاح على',
    },
  },
  en: {
    dir: 'ltr',
    nav: {
      docs: 'Docs',
      explorer: 'Explorer',
      faq: 'FAQ',
      about: 'About',
    },
    home: {
      hero: {
        title: 'The Ultimate API for Arabic Countries & Cities',
        subtitle: 'A modern, fast, and free-to-use REST API that provides extensive data on countries and cities in the Arab world. Perfect for developers, researchers, and creators.',
        cta: 'View API Docs',
      },
      features: {
        bilingual: {
          title: 'Bilingual Support',
          description: 'Get data in both Arabic and English seamlessly with the `lang` parameter.',
        },
        fast: {
          title: 'Blazing Fast',
          description: 'Built on the edge with Next.js, our API responds in milliseconds.',
        },
        free: {
          title: 'Completely Free',
          description: 'Access all endpoints without any cost or rate limits. Perfect for your next project.',
        },
      },
    },
    docs: {
      title: 'Documentation',
      introduction: 'Welcome to the Arabia API Hub documentation. Our API provides a simple and powerful way to access data about countries and cities in the Arab world. All endpoints support both English and Arabic responses via the `lang` query parameter.',
      sidebarTitle: 'API Documentation',
      endpointsTitle: 'Endpoints',
      example: 'Example',
      params: {
        title: 'Query Parameters',
        lang: '`en` or `ar` (default).',
        country: 'Filter cities by a two-letter country code (e.g., `EG`).',
        q: 'The search term. Can be in Arabic or English.',
        required: 'required',
        optional: 'optional'
      },
      endpoints: {
        getCountries: {
          title: 'Get All Countries',
          description: 'Retrieves a list of all supported countries.',
        },
        getCountryByCode: {
          title: 'Get Country by Code',
          description: 'Retrieves a single country and its cities by the two-letter country code (ISO 3166-1 alpha-2).',
        },
        getCitiesByCountry: {
          title: 'Get Cities by Country',
          description: 'Retrieves all cities for a specific country by its code.',
        },
        getAllCities: {
          title: 'Get All Cities',
          description: 'Retrieves a list of all cities across all countries. Can be filtered by country.',
        },
        search: {
          title: 'Search',
          description: 'Performs a search for countries and cities. The search supports queries in both English and Arabic.',
        },
      },
    },
    explorer: {
      title: 'API Explorer',
      subtitle: 'Test the API endpoints live. Enter an endpoint path and see the JSON response instantly.',
      response: 'Response',
      form: {
        endpoint: 'Endpoint',
        selectEndpoint: 'Select an endpoint',
        button: 'Run Request',
      },
      params: {
        code: 'Country Code (e.g. EG)',
        country: 'Country Code (e.g. AE)',
        q: 'Search term',
      },
      placeholders: {
        code: 'EG',
        country: 'AE',
        q: 'Cairo',
      },
      endpoints: {
        countries: 'Get All Countries',
        country_by_code: 'Get Country by Code',
        cities_by_country: 'Get Cities by Country',
        cities: 'Get All Cities',
        search: 'Search',
      },
      error: {
        apiError: 'API Error',
        fetchFailed: 'Failed to fetch data',
        invalidEndpoint: 'Invalid Endpoint',
        generic: 'An error occurred',
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to common questions about using the Arabia API Hub.',
      items: [
        {
          question: 'Is this API completely free to use?',
          answer: 'Yes, the Arabia API Hub is completely free for all types of projects, including commercial ones. There are no hidden fees or rate limits.',
        },
        {
          question: 'Do I need an API key to access the data?',
          answer: 'No, you do not need an API key. All endpoints are public and can be accessed without any authentication.',
        },
        {
          question: 'What languages are supported for the data response?',
          answer: "The API supports both English ('en') and Arabic ('ar'). You can specify your preferred language using the `?lang=en` query parameter on any endpoint. Arabic is the default.",
        },
        {
          question: 'How accurate is the data?',
          answer: 'The data is sourced from reliable public databases and is regularly maintained. However, if you find any discrepancies, please feel free to open an issue on our GitHub repository.',
        },
      ],
    },
    about: {
      title: 'About Arabia API Hub',
      subtitle: 'Learn more about the project, its mission, and the creator behind it.',
      creator: {
        title: 'The Creator',
        name: 'Mohamed from Mishcoders',
        description: 'This project was brought to life by Mohamed, a passionate developer and the founder of Mishcoders. With a love for building useful tools for the developer community, he created this API to fill a gap for accessible, high-quality data about the Arab world.',
      },
      mission: {
        title: 'Our Mission',
        subtitle: 'Why this API was created',
        description: 'The goal was simple: create a free, reliable, and easy-to-use API that empowers developers to build applications with rich, localized data for the Arab region. Whether for a hobby project or a commercial application, Arabia API Hub is here to help.',
      },
      contribute: {
        title: 'Contribute to the Project',
        description: 'This is an open-source project. We welcome contributions, bug reports, and feature requests.',
        button: 'View on GitHub',
      },
    },
    footer: {
      builtBy: 'Built by',
      author: 'Mohamed (Mishcoders)',
      sourceCode: 'The source code is available on',
    },
  },
};

export type Language = keyof typeof translations;
export type Translations = typeof translations.en;
