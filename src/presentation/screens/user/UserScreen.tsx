import {Card, Layout, Text} from '@ui-kitten/components';
import MainLayout from '../../layouts/MainLayout';
import {useQuery} from '@tanstack/react-query';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import {getUserById} from '../../../actions/users/get-user-by-id';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParam} from '../../navigation/StackNavigator';
import {Image, SafeAreaView, ScrollView} from 'react-native';
import {FadeInImage} from '../../components/ui/FadeInImage';

interface Props extends StackScreenProps<RootStackParam, 'UserScreen'> {}

export default function UserScreen({route}: Props) {
  const {userId} = route.params;

  const {data: user} = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUserById(userId),
  });

  if (!user) {
    return <MainLayout title="Cargando..."></MainLayout>;
  }

  const avatarUri = `https://i.pravatar.cc/100?u=${user.id}`;

  return (
    <MainLayout title={user.name} subtitle={user.email}>
      <ScrollView
        contentContainerStyle={{paddingVertical: 12, paddingHorizontal: 16}}>
        <Layout>
          <Card style={{marginBottom: 12, alignItems: 'center', padding: 12}}>
            <FadeInImage
              uri={avatarUri}
              style={{
                width: 120,
                height: 120,
                borderRadius: 75,
                marginBottom: 16,
              }}
            />
            <Text category="h4" style={{marginBottom: 4}}>
              {user.name}
            </Text>
            <Text appearance="hint" category="s1">
              {user.email}
            </Text>
          </Card>

          <Card style={{marginBottom: 12, padding: 20}}>
            <Text category="h6" style={{marginBottom: 6}}>
              Compañía
            </Text>
            <Text category="s1">{user.company.name}</Text>
            <Text appearance="hint" category="c1">
              {user.company.catchPhrase}
            </Text>
          </Card>

          <Card style={{marginBottom: 12, padding: 20}}>
            <Text category="h6" style={{marginBottom: 6}}>
              Dirección
            </Text>
            <Text category="s1">
              {user.address.street}, {user.address.suite}
            </Text>
            <Text appearance="hint" category="c1">
              {user.address.city}, {user.address.zipcode}
            </Text>
          </Card>

          <Card style={{padding: 20}}>
            <Text category="h6" style={{marginBottom: 6}}>
              Contacto
            </Text>
            <Text category="s1">Teléfono: {user.phone}</Text>
            <Text category="s1">Website: {user.website}</Text>
          </Card>
        </Layout>
      </ScrollView>
    </MainLayout>
  );
}
