import 'react-native';
import axios from 'axios';
import {commonService} from '../src/services/commonService';
import {getUserNames} from '../src/services/Api-endpoints';

jest.mock('axios', () => {
  return {
    get: jest.fn(),
  };
});

describe('fetchAllLists', () => {
  it('Lists', async () => {
    const dummygetResponse = {
      key: 'dummygetResponse',
    };

    const allLists = commonService.getTodos();

    expect(allLists).resolves.toEqual(dummygetResponse);
    expect(axios.get).toHaveBeenCalledWith(getUserNames);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
