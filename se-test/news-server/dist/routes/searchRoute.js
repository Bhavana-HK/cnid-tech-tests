"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRoute = void 0;
const newsapi_1 = require("../resources/newsapi");
const searchRoute = (req, res, next) => {
    const { key } = req.params;
    const { page } = req.query;
    const pageNo = page ? parseInt(`${page}`) : 1;
    (0, newsapi_1.getEverythingNews)({ q: key, page: pageNo })
        .then((articles) => res.json({ articles }))
        .catch((error) => {
        next(error);
    });
};
exports.searchRoute = searchRoute;
//# sourceMappingURL=searchRoute.js.map