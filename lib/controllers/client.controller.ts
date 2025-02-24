import { Request, Response } from "express";
import httpStatus from "http-status";
import Client, { IClient } from "../model/client";

export const createClientPortal = async (
    req: Request,
    res: Response) => {
    console.log("createClientPortal");
    try {
        const client = new Client(req.body);
        const savedClient: IClient = await client.save();
        res.status(httpStatus.OK).json(savedClient);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const getClientDetails = async (
    req: Request,
    res: Response) => {
    console.log("getClientDetails");
    const { id } = req.body;
    if (!id) {
        return res.status(httpStatus.BAD_GATEWAY).json({ message: 'Bad Request' });
    }
    try {
        const client: IClient | null = await Client.findById(id);
        if (!client) {
            return res.status(httpStatus.NOT_FOUND).json({ message: 'No Client Found' });
        }
        res.status(httpStatus.OK).json(client);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const deleteClient = async (
    req: Request,
    res: Response) => {
    console.log("deleteClient");
    const { id } = req.body;
    if (!id) {
        return res.status(httpStatus.BAD_GATEWAY).json({ message: 'Bad Request' });
    }
    try {
        const client: IClient | null = await Client.findByIdAndDelete(id);
        if (!client) {
            return res.status(httpStatus.NOT_FOUND).json({ message: 'No Client Found' });
        }
        res.status(httpStatus.OK).json(client);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}