import {getUsers} from '../../../actions/users/get-users';
import {useQuery} from '@tanstack/react-query';
import MainLayout from '../../layouts/MainLayout';
import FullScreenLoader from '../../components/ui/FullScreenLoader';
import UserList from '../../components/users/UserList';
import {useUIStore} from '../../store/uiStore';
import {Input, Layout} from '@ui-kitten/components';

export default function HomeScreen() {
  const {isLoading, data: users = []} = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: 1000 * 60 * 60,
  });

  const searchTerm = useUIStore(s => s.searchTerm);
  const setSearchTerm = useUIStore(s => s.setSearchTerm);

  const filteredUsers = users.filter(
    u =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <MainLayout title="Home" subtitle="Check your users">
      <Layout style={{flex: 1}}>
        <Input
          placeholder="Buscar por nombre o email"
          value={searchTerm}
          onChangeText={setSearchTerm}
          style={{margin: 16}}
        />

        {isLoading ? <FullScreenLoader /> : <UserList users={filteredUsers} />}
      </Layout>
    </MainLayout>
  );
}
