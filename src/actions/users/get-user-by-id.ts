import {testApi} from '../../config/api/testApi';
import {UserMapper} from '../../infrastructure/mappers/user.mapper';

export const getUserById = async (id: number) => {
  try {
    const {data} = await testApi.get(`/users/${id}`);
    return UserMapper.testUserToEntity(data);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching user by ID');
  }
};
