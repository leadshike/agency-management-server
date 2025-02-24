import { Request, Response } from "express";
import httpStatus from "http-status";
import ApiProvider, { IApiProvider } from "../model/api_providers";

export const createApiProvider = async (
    req: Request,
    res: Response) => {
    console.log("createApiProvider");
    try {
        const provider = new ApiProvider(req.body);
        const savedApiProvider: IApiProvider = await provider.save();
        res.status(httpStatus.OK).json(savedApiProvider);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const getApiProviderDetails = async (
    req: Request,
    res: Response) => {
    console.log("getApiProviderDetails");
    const { id } = req.body;
    if (!id) {
        return res.status(httpStatus.BAD_GATEWAY).json({ message: 'Bad Request' });
    }
    try {
        const provider: IApiProvider | null = await ApiProvider.findById(id);
        if (!provider) {
            return res.status(httpStatus.NOT_FOUND).json({ message: 'No ApiProvider Found' });
        }
        res.status(httpStatus.OK).json(provider);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const updateApiProvider = async (
    req: Request,
    res: Response) => {
    console.log("updateApiProvider");
    const { id } = req.body;
    if (!id) {
        return res.status(httpStatus.BAD_GATEWAY).json({ message: 'Bad Request' });
    }
    try {
        req.body.modified_at = new Date();
        const provider: IApiProvider | null = await ApiProvider.findByIdAndUpdate(id, req.body);
        if (!provider) {
            return res.status(httpStatus.NOT_FOUND).json({ message: 'No ApiProvider Found' });
        }
        res.status(httpStatus.OK).json(provider);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const deleteApiProvider = async (
    req: Request,
    res: Response) => {
    console.log("deleteApiProvider");
    const { id } = req.body;
    if (!id) {
        return res.status(httpStatus.BAD_GATEWAY).json({ message: 'Bad Request' });
    }
    try {
        const provider: IApiProvider | null = await ApiProvider.findByIdAndDelete(id);
        if (!provider) {
            return res.status(httpStatus.NOT_FOUND).json({ message: 'No ApiProvider Found' });
        }
        res.status(httpStatus.OK).json(provider);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}