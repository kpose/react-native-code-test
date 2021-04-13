import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type AuthStackParamList = {
  Signin: undefined;
  Signup: undefined;
  AppStack: undefined;
};

type AuthStackNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Signin'
>;

type AuthStackRouteProp = RouteProp<AuthStackParamList, 'Signin'>;

type Props = {
  navigation: AuthStackNavigationProp;
  route: AuthStackRouteProp;
};