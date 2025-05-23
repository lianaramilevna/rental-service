import ApiError from '../error/ApiError.js';
import { Review } from '../models/review.js';
import { User }   from '../models/user.js';
import { adaptReviewToClient } from '../adapters/reviewAdapter.js';

export const addReview = async (req, res, next) => {
  try {
    const { comment, rating } = req.body;
    const offerId = req.params.offerId;
    const userId = req.user.id; 

    if (!comment || !rating || !offerId || !userId) {
      return next(ApiError.badRequest('Не хватает данных для комментария'));
    }

    const created = await Review.create({
      text: comment,
      rating,
      authorId: userId,
      OfferId: offerId
    });

    const reviewWithAuthor = await Review.findByPk(created.id, {
      include: { model: User, as: 'author' }
    });

    res.status(201).json(adaptReviewToClient(reviewWithAuthor));
  } catch (error) {
    console.error(error);
    next(ApiError.badRequest('Ошибка при добавлении комментария'));
  }
};


export const getReviewsByOfferId = async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: { OfferId: req.params.offerId },
      include: { model: User, as: 'author' },
      order: [['publishDate', 'DESC']]
    });

    const adapted = reviews.map(r => adaptReviewToClient(r));
    res.json(adapted);
  } catch (error) {
    console.error(error);
    next(ApiError.internal('Ошибка при получении комментариев'));
  }
};
