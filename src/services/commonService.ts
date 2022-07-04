import axios from 'axios';
import {ITodo} from 'redux/reducers/types';
import {getUserNames} from '../services/Api-endpoints';

class CommonService<T extends ITodo[]> {
  async getTodos(): Promise<T[]> {
    try {
      return await axios.get(getUserNames);
    } catch (error) {
      console.log('getTodos', error);
      throw error;
    }
  }
}

export const commonService = new CommonService();
