import { NewType } from "./news"

export type NewsData = {
    newsIDArr: number[],
    isLoaded: boolean,
    currentNewData: NewType,
}
