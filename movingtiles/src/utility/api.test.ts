import { imageAPI } from './api';

test('test if axios request returns data', async () => {
    let data:any = await imageAPI.get("");
    expect(data).not.toBeNull();
})