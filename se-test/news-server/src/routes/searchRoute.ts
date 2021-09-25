import { RequestHandler } from 'express';
import { getEverythingNews } from '../resources/newsapi';
import { Article } from '../types';

export const searchRoute: RequestHandler = (req, res, next) => {
    const { key } = req.params;
    const { page } = req.query;
    const pageNo = page ? parseInt(`${page}`) : 1;
    getEverythingNews({ q:key, page: pageNo })
        .then((articles: Article[]) => res.json({ articles }))
        .catch((error) => {
            next(error);
        });
};
