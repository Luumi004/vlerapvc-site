export type Language = "en" | "sq" | "mk" | "de";

export type TranslationKey =
  | "nav.home"
  | "nav.about"
  | "nav.products"
  | "nav.certifications"
  | "nav.workshop"
  | "nav.contact"
  | "hero.title1"
  | "hero.description1"
  | "hero.title2"
  | "hero.description2"
  | "hero.title3"
  | "hero.description3"
  | "about.title"
  | "about.whoWeAre.title"
  | "about.whoWeAre.p1"
  | "about.whoWeAre.p2"
  | "about.established"
  | "about.values.title"
  | "about.values.quality.title"
  | "about.values.quality.description"
  | "about.values.innovation.title"
  | "about.values.innovation.description"
  | "about.values.customerSatisfaction.title"
  | "about.values.customerSatisfaction.description"
  | "about.values.sustainability.title"
  | "about.values.sustainability.description"
  | "products.title"
  | "products.subtitle"
  | "products.windows.title"
  | "products.windows.description"
  | "products.windows.features.f1"
  | "products.windows.features.f2"
  | "products.windows.features.f3"
  | "products.windows.features.f4"
  | "products.doors.title"
  | "products.doors.description"
  | "products.doors.features.f1"
  | "products.doors.features.f2"
  | "products.doors.features.f3"
  | "products.doors.features.f4"
  | "products.sliding.title"
  | "products.sliding.description"
  | "products.sliding.features.f1"
  | "products.sliding.features.f2"
  | "products.sliding.features.f3"
  | "products.sliding.features.f4"
  | "products.custom.title"
  | "products.custom.description"
  | "products.custom.features.f1"
  | "products.custom.features.f2"
  | "products.custom.features.f3"
  | "products.custom.features.f4"
  | "products.profine.title"
  | "products.profine.p1"
  | "products.profine.p2"
  | "products.profine.official"
  | "certifications.title"
  | "certifications.our.title"
  | "certifications.our.description"
  | "certifications.iso.title"
  | "certifications.iso.description"
  | "certifications.ce.title"
  | "certifications.ce.description"
  | "certifications.energy.title"
  | "certifications.energy.description"
  | "partners.title"
  | "partners.description"
  | "partners.profine.title"
  | "partners.profine.description"
  | "partners.glasstech.title"
  | "partners.glasstech.description"
  | "partners.securelock.title"
  | "partners.securelock.description"
  | "partners.ecoseal.title"
  | "partners.ecoseal.description"
  | "team.title"
  | "team.workshop.title"
  | "team.workshop.description"
  | "contact.title"
  | "contact.getInTouch"
  | "contact.phone"
  | "contact.email"
  | "contact.address"
  | "contact.location"
  | "contact.sendMessage"
  | "contact.form.name"
  | "contact.form.email"
  | "contact.form.phone"
  | "contact.form.message"
  | "contact.form.submit"
  | "footer.description"
  | "footer.quickLinks"
  | "footer.contactInfo"
  | "footer.businessHours"
  | "footer.copyright"
  | "features"
  | "languageName";

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.certifications": "Certifications",
    "nav.workshop": "Our Workshop",
    "nav.contact": "Contact",

    "hero.title1": "Premium PVC Windows",
    "hero.description1": "Enhance your home with our high-quality PVC windows",
    "hero.title2": "Elegant Door Solutions",
    "hero.description2": "Beautiful, durable doors for your home or business",
    "hero.title3": "Professional Installation",
    "hero.description3": "Expert installation by our certified team",

    "about.title": "About Us",
    "about.whoWeAre.title": "Who We Are",
    "about.whoWeAre.p1":
      "Vlera Ekskluziv is a leading manufacturer and installer of premium PVC doors and windows. With years of experience in the industry, we have established ourselves as a trusted name for quality, durability, and exceptional service.",
    "about.whoWeAre.p2":
      "Our mission is to enhance the beauty, comfort, and energy efficiency of your home or business with our high-quality PVC products. We take pride in our craftsmanship and attention to detail, ensuring that every product we deliver meets the highest standards.",
    "about.established": "Established in 2007",
    "about.values.title": "Our Values",
    "about.values.quality.title": "Quality",
    "about.values.quality.description":
      "We use only the finest materials and advanced manufacturing techniques.",
    "about.values.innovation.title": "Innovation",
    "about.values.innovation.description":
      "We continuously improve our products with the latest technologies.",
    "about.values.customerSatisfaction.title": "Customer Satisfaction",
    "about.values.customerSatisfaction.description":
      "We prioritize your needs and ensure your complete satisfaction.",
    "about.values.sustainability.title": "Sustainability",
    "about.values.sustainability.description":
      "Our products are designed to be energy-efficient and environmentally friendly.",

    "products.title": "Our Products",
    "products.subtitle":
      "We use high-quality PVC profiles and are proud partners of the Profine Group, ensuring that our products meet international standards for quality and durability.",
    "products.windows.title": "PVC Windows",
    "products.windows.description":
      "Energy-efficient windows with excellent thermal and sound insulation properties.",
    "products.windows.features.f1": "Multi-chamber profiles",
    "products.windows.features.f2": "Double or triple glazing",
    "products.windows.features.f3": "Various opening styles",
    "products.windows.features.f4": "Customizable designs",
    "products.doors.title": "Doors",
    "products.doors.description":
      "Secure and durable doors that enhance the entrance to your home or business.",
    "products.doors.features.f1": "High security locks",
    "products.doors.features.f2": "Reinforced profiles",
    "products.doors.features.f3": "Weather-resistant",
    "products.doors.features.f4": "Various panel designs",
    "products.sliding.title": "Sliding Systems",
    "products.sliding.description":
      "Space-saving sliding doors and windows for modern interiors and exteriors.",
    "products.sliding.features.f1": "Smooth operation",
    "products.sliding.features.f2": "Large glass areas",
    "products.sliding.features.f3": "Space-efficient",
    "products.sliding.features.f4": "Multiple track options",
    "products.custom.title": "Custom Solutions",
    "products.custom.description":
      "Bespoke PVC products designed to meet your specific requirements.",
    "products.custom.features.f1": "Unique shapes and sizes",
    "products.custom.features.f2": "Special glazing options",
    "products.custom.features.f3": "Custom colors",
    "products.custom.features.f4": "Architectural projects",
    "products.profine.title": "Profine Group Partnership",
    "products.profine.p1":
      "As official partners of the Profine Group, we use their premium PVC profiles in all our products. This partnership allows us to offer you windows and doors that meet the highest European standards for quality, energy efficiency, and durability.",
    "products.profine.p2":
      "The Profine Group is a world leader in PVC profile systems for windows and doors, known for innovation and sustainability in the industry.",
    "products.profine.official": "Official Partner",

    "certifications.title": "Certifications & Partners",
    "certifications.our.title": "Our Certifications",
    "certifications.our.description":
      "At Vlera Ekskluziv, we adhere to the highest industry standards and have obtained various certifications that validate the quality and reliability of our products.",
    "certifications.iso.title": "ISO 9001:2015",
    "certifications.iso.description":
      "Quality Management System certification ensuring consistent quality in our products and services.",
    "certifications.ce.title": "CE Marking",
    "certifications.ce.description":
      "Our products comply with EU health, safety, and environmental protection standards.",
    "certifications.energy.title": "Energy Efficiency Rating",
    "certifications.energy.description":
      "Our windows and doors are certified for their excellent thermal insulation properties.",

    "partners.title": "Our Partners",
    "partners.description":
      "We collaborate with industry-leading companies to ensure we deliver the best products and services to our customers.",
    "partners.profine.title": "Profine Group",
    "partners.profine.description":
      "Premium PVC profile systems for windows and doors.",
    "partners.glasstech.title": "GlassTech",
    "partners.glasstech.description":
      "High-quality glass solutions for optimal insulation.",
    "partners.securelock.title": "MACO",
    "partners.securelock.description":
      "Advanced security hardware for doors and windows.",
    "partners.ecoseal.title": "EcoSeal",
    "partners.ecoseal.description": "Weather-resistant sealing solutions.",

    "team.title": "Our Workshop",
    "team.workshop.title": "Vlera PVC",
    "team.workshop.description":
      "Our state-of-the-art workshop is equipped with the latest technology and machinery to ensure precision manufacturing of all our PVC products. Our skilled team works diligently to maintain the highest standards of quality at every stage of production.",

    "contact.title": "Contact Us",
    "contact.getInTouch": "Get In Touch",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.location": "Our Location",
    "contact.sendMessage": "Send Us a Message",
    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send Message",

    "footer.description":
      "Premium PVC doors and windows for your home or business. Quality, durability, and excellent service guaranteed.",
    "footer.quickLinks": "Quick Links",
    "footer.contactInfo": "Contact Information",
    "footer.businessHours": "Business Hours: Mon-Fri 9:00 AM - 6:00 PM",
    "footer.copyright": "All rights reserved.",

    features: "Features",
    languageName: "English",
  },

  sq: {
    "nav.home": "Ballina",
    "nav.about": "Rreth Nesh",
    "nav.products": "Produktet",
    "nav.certifications": "Certifikimet",
    "nav.workshop": "Puntoria jonë",
    "nav.contact": "Kontakti",

    "hero.title1": "Dritare PVC Premium",
    "hero.description1":
      "Përmirësoni shtëpinë tuaj me dritaret tona PVC të cilësisë së lartë",
    "hero.title2": "Zgjidhje Elegante për Dyer",
    "hero.description2":
      "Dyer të bukura dhe të qëndrueshme për shtëpinë ose biznesin tuaj",
    "hero.title3": "Instalim Profesional",
    "hero.description3": "Instalim ekspert nga ekipi ynë i certifikuar",

    "about.title": "Rreth Nesh",
    "about.whoWeAre.title": "Kush Jemi Ne",
    "about.whoWeAre.p1":
      "Vlera Ekskluziv është një prodhues dhe instalues kryesor i dyerve dhe dritareve premium PVC. Me vite përvojë në industri, ne jemi vendosur si një emër i besuar për cilësi, qëndrueshmëri dhe shërbim të jashtëzakonshëm.",
    "about.whoWeAre.p2":
      "Misioni ynë është të përmirësojmë bukurinë, komoditetin dhe efikasitetin e energjisë së shtëpisë ose biznesit tuaj me produktet tona PVC të cilësisë së lartë. Ne krenohemi me mjeshtërinë tonë dhe vëmendjen ndaj detajeve, duke siguruar që çdo produkt që ofrojmë të përmbushë standardet më të larta.",
    "about.established": "Themeluar në 2007",
    "about.values.title": "Vlerat Tona",
    "about.values.quality.title": "Cilësia",
    "about.values.quality.description":
      "Ne përdorim vetëm materialet më të mira dhe teknikat e avancuara të prodhimit.",
    "about.values.innovation.title": "Inovacioni",
    "about.values.innovation.description":
      "Ne përmirësojmë vazhdimisht produktet tona me teknologjitë më të fundit.",
    "about.values.customerSatisfaction.title": "Kënaqësia e Klientit",
    "about.values.customerSatisfaction.description":
      "Ne prioritizojmë nevojat tuaja dhe sigurojmë kënaqësinë tuaj të plotë.",
    "about.values.sustainability.title": "Qëndrueshmëria",
    "about.values.sustainability.description":
      "Produktet tona janë projektuar për të qenë efikase në energji dhe miqësore me mjedisin.",

    "products.title": "Produktet Tona",
    "products.subtitle":
      "Ne përdorim profile PVC të cilësisë së lartë dhe jemi partnerë krenarë të Grupit Profine, duke siguruar që produktet tona të përmbushin standardet ndërkombëtare për cilësi dhe qëndrueshmëri.",
    "products.windows.title": "Dritare PVC",
    "products.windows.description":
      "Dritare efikase në energji me veti të shkëlqyera të izolimit termik dhe të zërit.",
    "products.windows.features.f1": "Profile me shumë dhoma",
    "products.windows.features.f2": "Xham i dyfishtë ose i trefishtë",
    "products.windows.features.f3": "Stile të ndryshme hapjeje",
    "products.windows.features.f4": "Dizajne të personalizueshme",
    "products.doors.title": "Dyer",
    "products.doors.description":
      "Dyer të sigurta dhe të qëndrueshme që përmirësojnë hyrjen në shtëpinë ose biznesin tuaj.",
    "products.doors.features.f1": "Brava sigurie të larta",
    "products.doors.features.f2": "Profile të përforcuara",
    "products.doors.features.f3": "Rezistente ndaj motit",
    "products.doors.features.f4": "Dizajne të ndryshme panelesh",
    "products.sliding.title": "Sisteme Rrëshqitëse",
    "products.sliding.description":
      "Dyer dhe dritare rrëshqitëse që kursejnë hapësirë për interiore dhe eksteriore moderne.",
    "products.sliding.features.f1": "Funksionim i butë",
    "products.sliding.features.f2": "Zona të mëdha xhami",
    "products.sliding.features.f3": "Efikase në hapësirë",
    "products.sliding.features.f4": "Opsione të shumta shinash",
    "products.custom.title": "Zgjidhje të Personalizuara",
    "products.custom.description":
      "Produkte PVC të personalizuara të dizajnuara për të përmbushur kërkesat tuaja specifike.",
    "products.custom.features.f1": "Forma dhe madhësi unike",
    "products.custom.features.f2": "Opsione speciale xhami",
    "products.custom.features.f3": "Ngjyra të personalizuara",
    "products.custom.features.f4": "Projekte arkitekturore",
    "products.profine.title": "Partneriteti me Grupin Profine",
    "products.profine.p1":
      "Si partnerë zyrtarë të Grupit Profine, ne përdorim profilet e tyre premium PVC në të gjitha produktet tona. Ky partneritet na lejon t'ju ofrojmë dritare dhe dyer që përmbushin standardet më të larta evropiane për cilësi, efikasitet energjie dhe qëndrueshmëri.",
    "products.profine.p2":
      "Grupi Profine është një lider botëror në sistemet e profileve PVC për dritare dhe dyer, i njohur për inovacion dhe qëndrueshmëri në industri.",
    "products.profine.official": "Partner Zyrtar",

    "certifications.title": "Certifikimet & Partnerët",
    "certifications.our.title": "Certifikimet Tona",
    "certifications.our.description":
      "Në Vlera Ekskluziv, ne i përmbahemi standardeve më të larta të industrisë dhe kemi marrë certifikime të ndryshme që vërtetojnë cilësinë dhe besueshmërinë e produkteve tona.",
    "certifications.iso.title": "ISO 9001:2015",
    "certifications.iso.description":
      "Certifikim i Sistemit të Menaxhimit të Cilësisë që siguron cilësi të vazhdueshme në produktet dhe shërbimet tona.",
    "certifications.ce.title": "Markimi CE",
    "certifications.ce.description":
      "Produktet tona përputhen me standardet e BE-së për shëndetin, sigurinë dhe mbrojtjen e mjedisit.",
    "certifications.energy.title": "Vlerësimi i Efikasitetit të Energjisë",
    "certifications.energy.description":
      "Dritaret dhe dyert tona janë të certifikuara për vetitë e tyre të shkëlqyera të izolimit termik.",

    "partners.title": "Partnerët Tanë",
    "partners.description":
      "Ne bashkëpunojmë me kompani lider në industri për të siguruar që ofrojmë produktet dhe shërbimet më të mira për klientët tanë.",
    "partners.profine.title": "Grupi Profine",
    "partners.profine.description":
      "Sisteme premium të profileve PVC për dritare dhe dyer.",
    "partners.glasstech.title": "GlassTech",
    "partners.glasstech.description":
      "Zgjidhje xhami të cilësisë së lartë për izolim optimal.",
    "partners.securelock.title": "MACO",
    "partners.securelock.description":
      "Pajisje sigurie të avancuara për dyer dhe dritare.",
    "partners.ecoseal.title": "EcoSeal",
    "partners.ecoseal.description": "Zgjidhje vulosëse rezistente ndaj motit.",

    "team.title": "Punëtoria Jonë",
    "team.workshop.title": "Vlera PVC",
    "team.workshop.description":
      "Punëtoria jonë moderne është e pajisur me teknologjinë dhe makineritë më të fundit për të siguruar prodhim preciz të të gjitha produkteve tona PVC. Ekipi ynë i aftë punon me zell për të ruajtur standardet më të larta të cilësisë në çdo fazë të prodhimit.",

    "contact.title": "Na Kontaktoni",
    "contact.getInTouch": "Lidhuni me Ne",
    "contact.phone": "Telefoni",
    "contact.email": "Email",
    "contact.address": "Adresa",
    "contact.location": "Vendndodhja Jonë",
    "contact.sendMessage": "Na Dërgoni një Mesazh",
    "contact.form.name": "Emri Juaj",
    "contact.form.email": "Adresa e Emailit",
    "contact.form.phone": "Numri i Telefonit",
    "contact.form.message": "Mesazhi Juaj",
    "contact.form.submit": "Dërgo Mesazhin",

    "footer.description":
      "Dyer dhe dritare premium PVC për shtëpinë ose biznesin tuaj. Cilësi, qëndrueshmëri dhe shërbim i shkëlqyer i garantuar.",
    "footer.quickLinks": "Lidhje të Shpejta",
    "footer.contactInfo": "Informacioni i Kontaktit",
    "footer.businessHours": "Orari i Punës: E Hënë-E Premte 9:00 - 18:00",
    "footer.copyright": "Të gjitha të drejtat e rezervuara.",

    features: "Karakteristikat",
    languageName: "Shqip",
  },

  mk: {
    "nav.home": "Почетна",
    "nav.about": "За Нас",
    "nav.products": "Производи",
    "nav.certifications": "Сертификати",
    "nav.workshop": "Нашата работилница",
    "nav.contact": "Контакт",

    "hero.title1": "Премиум ПВЦ Прозорци",
    "hero.description1":
      "Подобрете го вашиот дом со нашите висококвалитетни ПВЦ прозорци",
    "hero.title2": "Елегантни Решенија за Врати",
    "hero.description2": "Убави, издржливи врати за вашиот дом или бизнис",
    "hero.title3": "Професионална Инсталација",
    "hero.description3": "Експертска инсталација од нашиот сертифициран тим",

    "about.title": "За Нас",
    "about.whoWeAre.title": "Кои Сме Ние",
    "about.whoWeAre.p1":
      "Влера Ексклузив е водечки производител и инсталатер на премиум ПВЦ врати и прозорци. Со години искуство во индустријата, ние се етаблиравме како доверливо име за квалитет, издржливост и исклучителна услуга.",
    "about.whoWeAre.p2":
      "Нашата мисија е да ја подобриме убавината, удобноста и енергетската ефикасност на вашиот дом или бизнис со нашите висококвалитетни ПВЦ производи. Се гордееме со нашето мајсторство и внимание кон деталите, осигурувајќи дека секој производ што го испорачуваме ги исполнува највисоките стандарди.",
    "about.established": "Основано во 2007",
    "about.values.title": "Нашите Вредности",
    "about.values.quality.title": "Квалитет",
    "about.values.quality.description":
      "Користиме само најфини материјали и напредни производствени техники.",
    "about.values.innovation.title": "Иновација",
    "about.values.innovation.description":
      "Континуирано ги подобруваме нашите производи со најновите технологии.",
    "about.values.customerSatisfaction.title": "Задоволство на Клиентите",
    "about.values.customerSatisfaction.description":
      "Ги приоритизираме вашите потреби и обезбедуваме ваше целосно задоволство.",
    "about.values.sustainability.title": "Одржливост",
    "about.values.sustainability.description":
      "Нашите производи се дизајнирани да бидат енергетски ефикасни и еколошки прифатливи.",

    "products.title": "Нашите Производи",
    "products.subtitle":
      "Користиме висококвалитетни ПВЦ профили и сме горди партнери на Групацијата Профине, осигурувајќи дека нашите производи ги исполнуваат меѓународните стандарди за квалитет и издржливост.",
    "products.windows.title": "ПВЦ Прозорци",
    "products.windows.description":
      "Енергетски ефикасни прозорци со одлични својства на термичка и звучна изолација.",
    "products.windows.features.f1": "Повеќекоморни профили",
    "products.windows.features.f2": "Двојно или тројно застаклување",
    "products.windows.features.f3": "Различни стилови на отворање",
    "products.windows.features.f4": "Прилагодливи дизајни",
    "products.doors.title": "Врати",
    "products.doors.description":
      "Безбедни и издржливи врати кои го подобруваат влезот во вашиот дом или бизнис.",
    "products.doors.features.f1": "Брави со висока безбедност",
    "products.doors.features.f2": "Зајакнати профили",
    "products.doors.features.f3": "Отпорни на временски услови",
    "products.doors.features.f4": "Различни дизајни на панели",
    "products.sliding.title": "Лизгачки Системи",
    "products.sliding.description":
      "Лизгачки врати и прозорци кои штедат простор за модерни ентериери и екстериери.",
    "products.sliding.features.f1": "Мазно функционирање",
    "products.sliding.features.f2": "Големи стаклени површини",
    "products.sliding.features.f3": "Ефикасни во простор",
    "products.sliding.features.f4": "Повеќе опции за шини",
    "products.custom.title": "Прилагодени Решенија",
    "products.custom.description":
      "Прилагодени ПВЦ производи дизајнирани да ги исполнат вашите специфични барања.",
    "products.custom.features.f1": "Уникатни форми и големини",
    "products.custom.features.f2": "Специјални опции за застаклување",
    "products.custom.features.f3": "Прилагодени бои",
    "products.custom.features.f4": "Архитектонски проекти",
    "products.profine.title": "Партнерство со Групацијата Профине",
    "products.profine.p1":
      "Како официјални партнери на Групацијата Профине, ние ги користиме нивните премиум ПВЦ профили во сите наши производи. Ова партнерство ни овозможува да ви понудиме прозорци и врати кои ги исполнуваат највисоките европски стандарди за квалитет, енергетска ефикасност и издржливост.",
    "products.profine.p2":
      "Групацијата Профине е светски лидер во системите на ПВЦ профили за прозорци и врати, позната по иновација и одржливост во индустријата.",
    "products.profine.official": "Официјален Партнер",

    "certifications.title": "Сертификати и Партнери",
    "certifications.our.title": "Нашите Сертификати",
    "certifications.our.description":
      "Во Влера Ексклузив, ние се придржуваме кон највисоките индустриски стандарди и имаме добиено различни сертификати кои го потврдуваат квалитетот и сигурноста на нашите производи.",
    "certifications.iso.title": "ISO 9001:2015",
    "certifications.iso.description":
      "Сертификат за Систем за Управување со Квалитет кој обезбедува конзистентен квалитет во нашите производи и услуги.",
    "certifications.ce.title": "CE Ознака",
    "certifications.ce.description":
      "Нашите производи се во согласност со стандардите на ЕУ за здравје, безбедност и заштита на животната средина.",
    "certifications.energy.title": "Оценка за Енергетска Ефикасност",
    "certifications.energy.description":
      "Нашите прозорци и врати се сертифицирани за нивните одлични својства на термичка изолација.",

    "partners.title": "Нашите Партнери",
    "partners.description":
      "Соработуваме со водечки компании во индустријата за да обезбедиме дека испорачуваме најдобри производи и услуги на нашите клиенти.",
    "partners.profine.title": "Групација Профине",
    "partners.profine.description":
      "Премиум ПВЦ профилни системи за прозорци и врати.",
    "partners.glasstech.title": "ГласТек",
    "partners.glasstech.description":
      "Висококвалитетни стаклени решенија за оптимална изолација.",
    "partners.securelock.title": "МАКО",
    "partners.securelock.description":
      "Напредни безбедносни хардвери за врати и прозорци.",
    "partners.ecoseal.title": "ЕкоСил",
    "partners.ecoseal.description":
      "Решенија за заптивање отпорни на временски услови.",

    "team.title": "Нашата Работилница",
    "team.workshop.title": "Vlera PVC",
    "team.workshop.description":
      "Нашата современа работилница е опремена со најновата технологија и машинерија за да обезбеди прецизно производство на сите наши ПВЦ производи. Нашиот вешт тим работи вредно за да ги одржи највисоките стандарди за квалитет во секоја фаза на производството.",

    "contact.title": "Контактирајте Не",
    "contact.getInTouch": "Стапете во Контакт",
    "contact.phone": "Телефон",
    "contact.email": "Е-пошта",
    "contact.address": "Адреса",
    "contact.location": "Нашата Локација",
    "contact.sendMessage": "Испратете ни Порака",
    "contact.form.name": "Вашето Име",
    "contact.form.email": "Адреса на Е-пошта",
    "contact.form.phone": "Телефонски Број",
    "contact.form.message": "Вашата Порака",
    "contact.form.submit": "Испрати Порака",

    "footer.description":
      "Премиум ПВЦ врати и прозорци за вашиот дом или бизнис. Гарантиран квалитет, издржливост и одлична услуга.",
    "footer.quickLinks": "Брзи Линкови",
    "footer.contactInfo": "Контакт Информации",
    "footer.businessHours": "Работно Време: Пон-Пет 9:00 - 18:00",
    "footer.copyright": "Сите права задржани.",

    features: "Карактеристики",
    languageName: "Македонски",
  },

  de: {
    "nav.home": "Startseite",
    "nav.about": "Über Uns",
    "nav.products": "Produkte",
    "nav.certifications": "Zertifizierungen",
    "nav.workshop": "Unsere Werkstatt",
    "nav.contact": "Kontakt",

    "hero.title1": "Premium PVC-Fenster",
    "hero.description1":
      "Verbessern Sie Ihr Zuhause mit unseren hochwertigen PVC-Fenstern",
    "hero.title2": "Elegante Türlösungen",
    "hero.description2":
      "Schöne, langlebige Türen für Ihr Zuhause oder Unternehmen",
    "hero.title3": "Professionelle Installation",
    "hero.description3":
      "Fachgerechte Installation durch unser zertifiziertes Team",

    "about.title": "Über Uns",
    "about.whoWeAre.title": "Wer Wir Sind",
    "about.whoWeAre.p1":
      "Vlera Ekskluziv ist ein führender Hersteller und Installateur von Premium-PVC-Türen und -Fenstern. Mit jahrelanger Erfahrung in der Branche haben wir uns als vertrauenswürdiger Name für Qualität, Langlebigkeit und außergewöhnlichen Service etabliert.",
    "about.whoWeAre.p2":
      "Unsere Mission ist es, die Schönheit, den Komfort und die Energieeffizienz Ihres Zuhauses oder Unternehmens mit unseren hochwertigen PVC-Produkten zu verbessern. Wir sind stolz auf unsere Handwerkskunst und Liebe zum Detail und stellen sicher, dass jedes von uns gelieferte Produkt den höchsten Standards entspricht.",
    "about.established": "Gegründet im Jahr 2007",
    "about.values.title": "Unsere Werte",
    "about.values.quality.title": "Qualität",
    "about.values.quality.description":
      "Wir verwenden nur die feinsten Materialien und fortschrittliche Fertigungstechniken.",
    "about.values.innovation.title": "Innovation",
    "about.values.innovation.description":
      "Wir verbessern unsere Produkte kontinuierlich mit den neuesten Technologien.",
    "about.values.customerSatisfaction.title": "Kundenzufriedenheit",
    "about.values.customerSatisfaction.description":
      "Wir priorisieren Ihre Bedürfnisse und stellen Ihre vollständige Zufriedenheit sicher.",
    "about.values.sustainability.title": "Nachhaltigkeit",
    "about.values.sustainability.description":
      "Unsere Produkte sind energieeffizient und umweltfreundlich gestaltet.",

    "products.title": "Unsere Produkte",
    "products.subtitle":
      "Wir verwenden hochwertige PVC-Profile und sind stolze Partner der Profine Group, um sicherzustellen, dass unsere Produkte internationale Standards für Qualität und Langlebigkeit erfüllen.",
    "products.windows.title": "PVC-Fenster",
    "products.windows.description":
      "Energieeffiziente Fenster mit hervorragenden Wärme- und Schalldämmeigenschaften.",
    "products.windows.features.f1": "Mehrkammerprofile",
    "products.windows.features.f2": "Doppel- oder Dreifachverglasung",
    "products.windows.features.f3": "Verschiedene Öffnungsstile",
    "products.windows.features.f4": "Anpassbare Designs",
    "products.doors.title": "Türen",
    "products.doors.description":
      "Sichere und langlebige Türen, die den Eingang zu Ihrem Zuhause oder Unternehmen verbessern.",
    "products.doors.features.f1": "Hochsicherheitsschlösser",
    "products.doors.features.f2": "Verstärkte Profile",
    "products.doors.features.f3": "Wetterbeständig",
    "products.doors.features.f4": "Verschiedene Paneldesigns",
    "products.sliding.title": "Schiebesysteme",
    "products.sliding.description":
      "Platzsparende Schiebetüren und -fenster für moderne Innen- und Außenbereiche.",
    "products.sliding.features.f1": "Reibungsloser Betrieb",
    "products.sliding.features.f2": "Große Glasflächen",
    "products.sliding.features.f3": "Platzsparend",
    "products.sliding.features.f4": "Mehrere Schienenmöglichkeiten",
    "products.custom.title": "Maßgeschneiderte Lösungen",
    "products.custom.description":
      "Maßgeschneiderte PVC-Produkte, die auf Ihre spezifischen Anforderungen zugeschnitten sind.",
    "products.custom.features.f1": "Einzigartige Formen und Größen",
    "products.custom.features.f2": "Spezielle Verglasungsoptionen",
    "products.custom.features.f3": "Individuelle Farben",
    "products.custom.features.f4": "Architektonische Projekte",
    "products.profine.title": "Partnerschaft mit der Profine Group",
    "products.profine.p1":
      "Als offizieller Partner der Profine Group verwenden wir deren Premium-PVC-Profile in all unseren Produkten. Diese Partnerschaft ermöglicht es uns, Ihnen Fenster und Türen anzubieten, die den höchsten europäischen Standards für Qualität, Energieeffizienz und Langlebigkeit entsprechen.",
    "products.profine.p2":
      "Die Profine Group ist ein weltweit führendes Unternehmen für PVC-Profilsysteme für Fenster und Türen, bekannt für Innovation und Nachhaltigkeit in der Branche.",
    "products.profine.official": "Offizieller Partner",

    "certifications.title": "Zertifizierungen & Partner",
    "certifications.our.title": "Unsere Zertifizierungen",
    "certifications.our.description":
      "Bei Vlera Ekskluziv halten wir uns an die höchsten Branchenstandards und haben verschiedene Zertifizierungen erhalten, die die Qualität und Zuverlässigkeit unserer Produkte bestätigen.",
    "certifications.iso.title": "ISO 9001:2015",
    "certifications.iso.description":
      "Qualitätsmanagementsystem-Zertifizierung, die eine konstante Qualität unserer Produkte und Dienstleistungen gewährleistet.",
    "certifications.ce.title": "CE-Kennzeichnung",
    "certifications.ce.description":
      "Unsere Produkte entsprechen den EU-Standards für Gesundheit, Sicherheit und Umweltschutz.",
    "certifications.energy.title": "Energieeffizienzbewertung",
    "certifications.energy.description":
      "Unsere Fenster und Türen sind für ihre hervorragenden Wärmedämmeigenschaften zertifiziert.",

    "partners.title": "Unsere Partner",
    "partners.description":
      "Wir arbeiten mit führenden Unternehmen der Branche zusammen, um sicherzustellen, dass wir unseren Kunden die besten Produkte und Dienstleistungen liefern.",
    "partners.profine.title": "Profine Group",
    "partners.profine.description":
      "Premium-PVC-Profilsysteme für Fenster und Türen.",
    "partners.glasstech.title": "GlassTech",
    "partners.glasstech.description":
      "Hochwertige Glaslösungen für optimale Isolierung.",
    "partners.securelock.title": "MACO",
    "partners.securelock.description":
      "Fortschrittliche Sicherheitshardware für Türen und Fenster.",
    "partners.ecoseal.title": "EcoSeal",
    "partners.ecoseal.description": "Wetterbeständige Dichtungslösungen.",

    "team.title": "Unsere Werkstatt",
    "team.workshop.title": "Vlera PVC",
    "team.workshop.description":
      "Unsere hochmoderne Werkstatt ist mit der neuesten Technologie und Maschinerie ausgestattet, um eine präzise Fertigung all unserer PVC-Produkte zu gewährleisten. Unser qualifiziertes Team arbeitet sorgfältig daran, die höchsten Qualitätsstandards in jeder Produktionsphase aufrechtzuerhalten.",

    "contact.title": "Kontaktieren Sie Uns",
    "contact.getInTouch": "Nehmen Sie Kontakt Auf",
    "contact.phone": "Telefon",
    "contact.email": "E-Mail",
    "contact.address": "Adresse",
    "contact.location": "Unser Standort",
    "contact.sendMessage": "Senden Sie Uns eine Nachricht",
    "contact.form.name": "Ihr Name",
    "contact.form.email": "E-Mail-Adresse",
    "contact.form.phone": "Telefonnummer",
    "contact.form.message": "Ihre Nachricht",
    "contact.form.submit": "Nachricht Senden",

    "footer.description":
      "Premium-PVC-Türen und -Fenster für Ihr Zuhause oder Unternehmen. Qualität, Langlebigkeit und hervorragender Service garantiert.",
    "footer.quickLinks": "Schnelllinks",
    "footer.contactInfo": "Kontaktinformationen",
    "footer.businessHours": "Geschäftszeiten: Mo-Fr 9:00 - 18:00 Uhr",
    "footer.copyright": "Alle Rechte vorbehalten.",

    features: "Eigenschaften",
    languageName: "Deutsch",
  },
};
