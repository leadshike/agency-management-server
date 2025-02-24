import { Request, Response } from "express";
import httpStatus from "http-status";

export const getUsers = async (
    req: Request,
    res: Response) => {
    console.log("getUsers");
    try {
        res.status(httpStatus.OK).json({ message: 'User Found' });
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}
