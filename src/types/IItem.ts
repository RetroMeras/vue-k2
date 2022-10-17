export interface IItem{
    id: string;
    title: string,
    description: string,
    date: Date,
    status: IStatus
};

export type IStatus = "done" | "canceled" | "active" | "pending";