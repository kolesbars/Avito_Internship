import { store } from "../store/store";
import { NewType } from "./news"

export type NewsData = {
    newsIDArr: number[],
    isLoaded: boolean,
    currentNewData: NewType,
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;