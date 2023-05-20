import {Router} from 'express';

import {BaseTables} from './baseTables';
import { BaseDetails } from './baseDetails';

export const baseTablesRouterFactory = () => Router()

    .get('/basetables', (req, res, next) =>
      BaseTables.findAll({include: [BaseDetails]})
        .then((baseTables: BaseTables[]) => res.json(baseTables))
        .catch(next)
    )

    .get('/basetables/:id', (req, res, next) =>
      BaseTables.findByPk(req.params.id)
        .then((baseTable: BaseTables | null) => baseTable
          ? res.json(baseTable)
          : next({statusCode: 404}))
        .catch(next)
    )

    .post('/basetables', (req, res, next) =>
      BaseTables.create(req.body)
        .then((baseTable: BaseTables) => res.json(baseTable))
        .catch(next)
    )

;
