export type Article = {
    id: string;
    createdAt: string;
    readingTime: string;
    title: string;
    excerpt: string;
    imageURL: string;
    category?: 'new' | 'top';
}