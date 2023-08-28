import { DataState } from '../app/main/assets/enum/data-state.enum';
export interface AppState<T> {
    DataState: DataState;
    appData ?: T;
    error ?: string;
}