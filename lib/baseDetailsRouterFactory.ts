import {Router} from "express";
import {BaseDetails} from "./baseDetails";
import { BaseTables } from "./baseTables";

export const baseDetailsRouterFactory = () => Router()

    .get('/basedetails', (req, res, next) =>
      BaseDetails.findAll({include: [BaseTables]})
        .then((baseDetails: BaseDetails[]) => res.json(baseDetails))
        .catch(next)
    )

    .get('/basedetails/:id', (req, res, next) =>
      BaseDetails.findByPk(req.params.id)
        .then((baseDetail: BaseDetails | null) => baseDetail
          ? res.json(baseDetail)
          : next({statusCode: 404}))
        .catch(next)
    )

    .post('/basedetails', (req, res, next) =>
      BaseDetails.create(req.body)
        .then((baseDetail: BaseDetails) => res.json(baseDetail))
        .catch(next)
    )

;
