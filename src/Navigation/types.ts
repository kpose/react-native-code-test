import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type AuthStackParamList = {
  Signin: undefined;
  Signup: undefined;
  AppStack: undefined;
};

export type HomeStackParamList = {
 Home: undefined;
 Details: {title: string, image: string, content: string}
};

type AuthStackNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Signin'
>;

export type HomeStackNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Home'
>;

type AuthStackRouteProp = RouteProp<AuthStackParamList, 'Signin'>;

type HomeStackRouteProp = RouteProp<HomeStackParamList, 'Home'>;

type Props = {
  navigation: AuthStackNavigationProp;
  route: AuthStackRouteProp;
};

export type HomeNavigatorProps = {
  navigation: HomeStackNavigationProp;
  route: HomeStackRouteProp;
};