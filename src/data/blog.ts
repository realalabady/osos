export interface BlogPost {
  id: string;
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  category: "updates" | "commercial" | "education";
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    titleAr: "التعديلات الجديدة على نظام الشركات السعودي",
    titleEn: "Recent Amendments to the Saudi Companies Law",
    excerptAr:
      "نظرة شاملة على أبرز التعديلات التي طرأت على نظام الشركات وتأثيرها على بيئة الأعمال في المملكة.",
    excerptEn:
      "A comprehensive look at the key amendments to the Companies Law and their impact on the business environment in the Kingdom.",
    category: "updates",
    date: "2026-01-05",
  },
  {
    id: "2",
    titleAr: "أهمية العقود التجارية في حماية حقوق الأطراف",
    titleEn:
      "The Importance of Commercial Contracts in Protecting Party Rights",
    excerptAr:
      "كيف يمكن للعقود المحكمة الصياغة أن تحمي مصالحكم التجارية وتجنبكم النزاعات المستقبلية.",
    excerptEn:
      "How well-drafted contracts can protect your commercial interests and help you avoid future disputes.",
    category: "commercial",
    date: "2026-01-02",
  },
  {
    id: "3",
    titleAr: "دليل رائد الأعمال: تأسيس شركة في السعودية",
    titleEn: "Entrepreneur's Guide: Starting a Company in Saudi Arabia",
    excerptAr:
      "الخطوات الأساسية والمتطلبات القانونية لتأسيس شركتك في المملكة العربية السعودية.",
    excerptEn:
      "Essential steps and legal requirements for establishing your company in Saudi Arabia.",
    category: "education",
    date: "2025-12-28",
  },
  {
    id: "4",
    titleAr: "التحكيم التجاري: بديل فعال للتقاضي التقليدي",
    titleEn:
      "Commercial Arbitration: An Effective Alternative to Traditional Litigation",
    excerptAr:
      "مزايا التحكيم التجاري ولماذا يعتبر الخيار الأمثل لحل النزاعات التجارية.",
    excerptEn:
      "Advantages of commercial arbitration and why it is the optimal choice for resolving commercial disputes.",
    category: "commercial",
    date: "2025-12-20",
  },
];
