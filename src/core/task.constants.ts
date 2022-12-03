export interface ITask {
    id?: number;
    title: string;
    description: string;
}

export interface ICard {
    tasks: Array<ITask>;
    createTask: (task: ITask) => void;
    deleteTask: (taskId: number) => void;
}
