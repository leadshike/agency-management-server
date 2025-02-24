import { Request, Response } from "express";
import httpStatus from "http-status";
import Task, { ITask } from "../model/task";

export const getAssignedTasks = async (
    req: Request,
    res: Response) => {
    console.log("getAssignedTasks");
    try {
        const assignedTask: ITask[] = await Task.find({
            status: 'Assigned',
        });
        if (!assignedTask || assignedTask.length <= 0) {
            return res.status(httpStatus.NOT_FOUND).json({ message: 'No Task Found' });
        }
        res.status(httpStatus.OK).json(assignedTask);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const assignTasks = async (
    req: Request,
    res: Response) => {
    console.log("assignTasks");
    try {
        const task = new Task(req.body);
        const savedTask: ITask = await task.save();
        res.status(httpStatus.OK).json(savedTask);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const updateTaskStatus = async (
    req: Request,
    res: Response) => {
    console.log("getUsers");
    const { user_id, task_id, task_status } = req.body;
    if (!task_status || !task_id || !user_id) {
        return res.status(httpStatus.BAD_GATEWAY).json({ message: 'Bad Request' });
    }
    try {
        const task: ITask | null = await Task.findByIdAndUpdate(task_id, {
            $set: {
                status: task_status,
            },
        });
        if (!task) {
            return res.status(httpStatus.NOT_FOUND).json({ message: 'No Task Found' });
        }
        res.status(httpStatus.OK).json(task);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}
