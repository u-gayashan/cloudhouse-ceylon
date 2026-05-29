export interface Post {
  id: string;
  title: string;
  category: string;
  date: string;
  read: string;
  kind: string;
  excerpt: string;
  body?: string[];
}

export type JournalCardProps = {
  post: Post;
  onOpen?: (post: Post) => void;
};

export type JournalListFilter = {
  category?: string;
  search?: string;
};
