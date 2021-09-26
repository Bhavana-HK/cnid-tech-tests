"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEverythingNews = exports.getTopHeadlines = void 0;
const constants_1 = require("../constants");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(constants_1.API_KEY);
const getTopHeadlines = (params) => {
    return newsapi.v2.topHeadlines(params).then((response) => {
        if (response.status === 'ok')
            return response.articles;
        else
            throw new Error(response.error);
    });
};
exports.getTopHeadlines = getTopHeadlines;
const getEverythingNews = (params) => {
    return newsapi.v2.everything(params).then((response) => {
        if (response.status === 'ok')
            return response.articles;
        else
            throw new Error(response.error);
    });
};
exports.getEverythingNews = getEverythingNews;
//# sourceMappingURL=newsapi.js.map