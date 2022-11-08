import { NewType } from '../../types/news';
import { NewsData} from '../../types/state';

export const getNewsIDArr = (state: NewsData): number[] => state.newsIDArr;
export const getLoadedStatus = (state: NewsData): boolean => state.isLoaded;
export const getCurrentNewData = (state: NewsData): NewType => state.currentNewData;