import React from 'react';
import {User} from '../../../domain/entities/user';
import {Card, Layout, Text} from '@ui-kitten/components';
import {FadeInImage} from '../ui/FadeInImage';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParam} from '../../navigation/StackNavigator';

interface Props {
  user: User;
}

export default function UserCard({user}: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParam>>();

  const avatarUri = `https://i.pravatar.cc/48?u=${user.id}`;

  return (
    <Card
      style={{flex: 1, margin: 3}}
      onPress={() => {
        navigation.navigate('UserScreen', {userId: user.id});
      }}>
      <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
        <FadeInImage
          uri={avatarUri}
          style={{width: 64, height: 64, borderRadius: 32, marginRight: 16}}
        />
        <Layout style={{flex: 1, justifyContent: 'center'}}>
          <Text category="h6">{user.name}</Text>
          <Text appearance="hint" category="c3" style={{marginTop: 4}}>
            {user.email}
          </Text>
        </Layout>
      </Layout>
    </Card>
  );
}
