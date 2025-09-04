import { useState, useMemo } from "react";
import { Article } from "../types/blog";

export const useSearch = (articles: Article[]) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredArticles = useMemo(() => {
        if (!searchTerm.trim()) return articles;

        return articles.filter(article =>
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [articles, searchTerm]);

    return { searchTerm, setSearchTerm, filteredArticles };
};
