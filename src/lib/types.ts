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

export interface Query {
  query: string;
  variables?: object;
  tags?: Array<string>;
}

export interface Blog {
  author: {
    name: string;
    profilePicture: string;
    socialMediaLinks: {
      twitter: string;
      linkedin: string;
    };
  };
  content: {
    html: string;
  };
  title: string;
  slug: string;
  id: string;
  coverImage: {
    url: string;
  };
  publishedAt: string;
  seo: {
    description: string;
  };
}

export interface BlogParams {
  params: {
    blogSlug: string;
  };
}
