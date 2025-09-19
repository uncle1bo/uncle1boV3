export interface Articles {
    id: string;
    title: string;
    content: string;
    category: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
    isPublished: boolean;
    pinTop: boolean;
}