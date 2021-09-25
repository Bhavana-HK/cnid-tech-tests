"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.latestRoute = void 0;
const newsapi_1 = require("../resources/newsapi");
const latestRoute = (req, res, next) => {
    const { page } = req.query;
    const pageNo = page ? parseInt(`${page}`) : 1;
    (0, newsapi_1.getTopHeadlines)({ country: 'gb', page: pageNo })
        .then((articles) => res.json({ articles }))
        .catch((error) => {
        next(error);
    });
};
exports.latestRoute = latestRoute;
//# sourceMappingURL=latestRoute.js.map