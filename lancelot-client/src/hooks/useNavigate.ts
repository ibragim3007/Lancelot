import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';
import { useAppDispatch } from './storeHooks';


export const useNavigate = () => {
  type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'StartPage'>;
  const { navigate } = useNavigation<ProfileScreenNavigationProp>();

  const navigateToChatRoom = () => navigate('ChatPage');
  const navigateToStartPage = () => {
    navigate('StartPage');
  };

  return {
    navigateToChatRoom,
    navigateToStartPage,
  };
};