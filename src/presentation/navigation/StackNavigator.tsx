import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '../screens/user/UserScreen';
import HomeScreen from '../screens/home/HomeScreen';
import LoadingScreen from '../screens/loading/Loading';

export type RootStackParam = {
  HomeScreen: undefined;
  UserScreen: {userId: number};
  LoadingScreen: undefined;
};

const Stack = createStackNavigator<RootStackParam>();

export const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="UserScreen" component={UserScreen} />
    <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
  </Stack.Navigator>
);
