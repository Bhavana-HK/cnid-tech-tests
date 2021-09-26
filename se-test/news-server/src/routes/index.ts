import express from 'express';
import bodyParser from 'body-parser';
import { latestRoute } from './latestRoute';
import { searchRoute } from './searchRoute';

var router = express.Router();

router.use(bodyParser.json());

router.get('/latest', latestRoute);
router.get('/search', searchRoute);

export default router;