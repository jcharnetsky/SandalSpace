export type Article = {
  authorId: number;
  title: string;
  body: string;
  exerpt: string;
  created: Date;
  tags?: string[];
};
