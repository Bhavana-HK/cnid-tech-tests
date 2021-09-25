import { RequestHandler } from 'express';
import { getTopHeadlines } from '../resources/newsapi';
import { Article } from '../types';

export const latestRoute: RequestHandler = (req, res, next) => {
    const { page } = req.query;
    const pageNo = page ? parseInt(`${page}`) : 1;
    getTopHeadlines({ country: 'gb', page: pageNo })
        .then((articles: Article[]) => res.json({ articles }))
        .catch((error) => {
            next(error);
        });
};
