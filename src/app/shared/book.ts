export interface Book {
  isbn: string;
  title: string;
  authors: string[];
  publishedDate?: string;
  subtitle?: string;
  thumbnailUrl?: string;
  description?: string;
}
