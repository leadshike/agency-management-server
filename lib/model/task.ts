import mongoose, { Document, ObjectId, Schema } from 'mongoose';

export interface ITask extends Document {
    id: ObjectId;
    user_id: string;
    task_id: string;
    task_instructions: string;
    assigned_va_id: ObjectId;
    assigned_va_name: string;
    priority: string;
    task_deadline: Date;
    status: string;
}

const TaskSchema: Schema = new Schema({
    user_id: { type: String, required: true },
    task_id: { type: String, required: true, },
    task_instructions: { type: String, required: true },
    assigned_va_id: { type: Schema.Types.ObjectId, required: true },
    assigned_va_name: { type: String, required: true },
    priority: { type: String, required: true },
    task_deadline: { type: Date, required: true },
    status: { type: String, required: true },
});

const Task = mongoose.model<ITask>('Task', TaskSchema);
export default Task;