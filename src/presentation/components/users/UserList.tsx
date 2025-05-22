import React from 'react';
import {User} from '../../../domain/entities/user';
import {Layout, List, Text} from '@ui-kitten/components';
import UserCard from './UserCard';

interface Props {
  users: User[];
}
export default function UserList({users}: Props) {
  return (
    <List
      data={users}
      numColumns={1}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({item}) => <UserCard user={item} />}
    />
  );
}
