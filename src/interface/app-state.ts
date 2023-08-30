import { DataState } from "src/app/enum/data-state.enum";

export interface AppState<T> {
    DataState: DataState;
    appData ?: T;
    error ?: string;
}