import {User} from '../../domain/entities/user';
import {TestUser} from '../interfaces/testApi-users.response';

export class UserMapper {
  static testUserToEntity(testUser: TestUser): User {
    return {
      id: testUser.id,
      name: testUser.name,
      username: testUser.username,
      email: testUser.email,
      address: {
        street: testUser.address.street,
        suite: testUser.address.suite,
        city: testUser.address.city,
        zipcode: testUser.address.zipcode,
        geo: {
          lat: testUser.address.geo.lat,
          lng: testUser.address.geo.lng,
        },
      },
      phone: testUser.phone,
      website: testUser.website,
      company: {
        name: testUser.company.name,
        catchPhrase: testUser.company.catchPhrase,
        bs: testUser.company.bs,
      },
    };
  }
}
