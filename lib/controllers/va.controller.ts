import { Request, Response } from "express";
import httpStatus from 'http-status';
import VirtualAssistant, { IVirtualAssistant } from "../model/va";

export const getVirtualAssistants = async (
    req: Request,
    res: Response) => {
    console.log("addVirtualAssistant");
    try {
        const vas: IVirtualAssistant[] = await VirtualAssistant.find();
        if (vas.length <= 0) {
            return res.status(httpStatus.NOT_FOUND).json({ message: 'No VirtualAssistant Found' });
        }
        res.status(httpStatus.OK).json(vas);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}
export const addVirtualAssistant = async (
    req: Request,
    res: Response) => {
    console.log("addVirtualAssistant");
    try {
        const data = req.body;
        data.invited_at = new Date();
        data.updated_at = new Date();
        const task = new VirtualAssistant(req.body);
        const savedVirtualAssistant: IVirtualAssistant = await task.save();
        res.status(httpStatus.OK).json(savedVirtualAssistant);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const updateVirtualAssistantStatus = async (
    req: Request,
    res: Response) => {
    console.log("updateVirtualAssistantStatus");
    const va_id = req.params.id;
    const { status } = req.body;
    if (!status || !va_id) {
        return res.status(httpStatus.BAD_GATEWAY).json({ message: 'Bad Request' });
    }
    try {
        const va: IVirtualAssistant | null = await VirtualAssistant.findByIdAndUpdate(va_id, {
            $set: {
                status: status,
                updated_at: new Date(),
            },
        });
        if (!va) {
            return res.status(httpStatus.NOT_FOUND).json({ message: 'No VirtualAssistant Found' });
        }
        res.status(httpStatus.OK).json(va);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const deleteVirtualAssistant = async (
    req: Request,
    res: Response) => {
    console.log("deleteVirtualAssistant");
    const va_id = req.params.id;
    if (!va_id) {
        return res.status(httpStatus.BAD_GATEWAY).json({ message: 'Bad Request' });
    }
    try {
        const va: IVirtualAssistant | null = await VirtualAssistant.findByIdAndDelete(va_id);
        if (!va) {
            return res.status(httpStatus.NOT_FOUND).json({ message: 'No VirtualAssistant Found' });
        }
        res.status(httpStatus.OK).json(va);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}
