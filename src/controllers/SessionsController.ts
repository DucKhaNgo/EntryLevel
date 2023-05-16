import { RequestHandler } from "express";

import { getAllSessionsService } from "../services/SessionsService";

import { getAllSessionsResponse } from "../types";



export const getAllSessions: RequestHandler<never, getAllSessionsResponse, never, { short_title: string[], status: string[] }> = (req, res, next) => {
    const { short_title, status } = req.query;

    Promise.resolve(getAllSessionsService([short_title].flat().filter(Boolean), [status].flat().filter(Boolean))).then((allSessions) => res.json(allSessions)).catch(next);
}