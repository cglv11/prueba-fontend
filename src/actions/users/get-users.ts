import {testApi} from '../../config/api/testApi';
import {User} from '../../domain/entities/user';
import {TestUser} from '../../infrastructure/interfaces/testApi-users.response';
import {UserMapper} from '../../infrastructure/mappers/user.mapper';

export const getUsers = async (): Promise<User[]> => {
  try {
    const {data} = await testApi.get<TestUser[]>('/users');

    const users = data.map(testUser => UserMapper.testUserToEntity(testUser));
    return users;
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching users');
  }
};
