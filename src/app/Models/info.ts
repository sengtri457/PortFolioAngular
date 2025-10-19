export interface info {
  titleWork: string;
  description: string;
  profile: string;
  expText?: string;
  subInfo?: [
    {
      icon: string;
      street: string;
      email: string;
      phone: string;
      website: string;
    }
  ];
}
export interface leftSide {
  name: string;
  subtitle?: string;
  slogan?: string;
}

export interface about {
  titleName: string;
  description: string;
  phone: string;
  Nationality: string;
  Address: string;
  Email: string;
  Freelancer: string;
  profile: string;
  expText?: string;
}
export interface edu {
  schoolName: string;
  date: string;
  description: string;
  title: string;
}
