export interface TeamMember {
  id: string;
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
  bioAr: string;
  bioEn: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    nameAr: "سعد خليف العنزي",
    nameEn: "Saad Khalid Alanazi",
    titleAr: "المؤسس والشريك الإداري",
    titleEn: "Founder & Managing Partner",
    bioAr:
      "محامٍ ومستشار قانوني بخبرة واسعة في القانون السعودي والتجاري، متخصص في قضايا الشركات والتحكيم التجاري.",
    bioEn:
      "Lawyer and legal consultant with extensive experience in Saudi and commercial law, specializing in corporate matters and commercial arbitration.",
  },
  {
    id: "2",
    nameAr: "أحمد محمد الشمري",
    nameEn: "Ahmed Mohammed Al-Shammari",
    titleAr: "شريك - القانون التجاري",
    titleEn: "Partner - Commercial Law",
    bioAr:
      "خبير في القانون التجاري وقانون الشركات، مع تركيز خاص على عمليات الاندماج والاستحواذ.",
    bioEn:
      "Expert in commercial and corporate law, with particular focus on mergers and acquisitions.",
  },
  {
    id: "3",
    nameAr: "فهد عبدالله القحطاني",
    nameEn: "Fahad Abdullah Al-Qahtani",
    titleAr: "مستشار قانوني أول",
    titleEn: "Senior Legal Consultant",
    bioAr:
      "متخصص في التقاضي وتسوية النزاعات، مع خبرة واسعة في التمثيل أمام المحاكم السعودية.",
    bioEn:
      "Specialized in litigation and dispute resolution, with extensive experience in representation before Saudi courts.",
  },
  {
    id: "4",
    nameAr: "نورة سعد الدوسري",
    nameEn: "Noura Saad Al-Dosari",
    titleAr: "مستشارة قانونية",
    titleEn: "Legal Consultant",
    bioAr:
      "متخصصة في صياغة العقود والامتثال القانوني، مع خبرة في القانون العقاري والتنظيمي.",
    bioEn:
      "Specialized in contract drafting and legal compliance, with experience in real estate and regulatory law.",
  },
];
