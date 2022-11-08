import { APIRoute} from '../const';
import { ThunkActionResult } from '../types/action';
import {updateNewsIDArr, setLoadedStatus} from './action';

export const loadNewsID = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setLoadedStatus(false))
    await api.get<number[]>(APIRoute.News)
      .then((response) => {
        dispatch(setLoadedStatus(true));
        dispatch(updateNewsIDArr(response.data));
      }).catch((err) => {
       console.log(err)
      });
  };

