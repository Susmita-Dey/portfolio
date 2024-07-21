export interface ProjectsCard {
  title: string;
  _id: string;
  description: string;
  thumbnailUrl: string;
  link: string;
  purpose: string;
  icons: { iconUrl: string }[];
}

export interface Testimonial {
  client: string;
  designation: string;
  clientImg: string;
  social: string;
  quote: string;
}
