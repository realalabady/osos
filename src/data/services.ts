export interface Service {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export const services: Service[] = [
  {
    id: "consultation",
    icon: "Scale",
    titleKey: "services.consultation.title",
    descriptionKey: "services.consultation.description",
  },
  {
    id: "corporate",
    icon: "Building2",
    titleKey: "services.corporate.title",
    descriptionKey: "services.corporate.description",
  },
  {
    id: "litigation",
    icon: "Gavel",
    titleKey: "services.litigation.title",
    descriptionKey: "services.litigation.description",
  },
  {
    id: "contracts",
    icon: "FileText",
    titleKey: "services.contracts.title",
    descriptionKey: "services.contracts.description",
  },
  {
    id: "advisory",
    icon: "Users",
    titleKey: "services.advisory.title",
    descriptionKey: "services.advisory.description",
  },
];
