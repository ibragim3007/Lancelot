import { useNavigate } from "../../../../hooks/useNavigate";
import { AppDispatch, RootState } from "../../../store";
import { snackAction } from "../../snackbar/snackbarSlice";
import { userAction } from "../userSlice";

export const connectUser = (name: string) => (dispath: AppDispatch, getState: () => RootState) => {
  try {
    if (!name) {
      dispath(snackAction.open('введите имя!'))
      return;
    }
      
      dispath(userAction.setUserInfo({
        name,
        id: String(new Date().getMilliseconds()),
      }));


  }
  catch (e) {
    
    console.log(e);
    const error = 'Something wrong with connection user!';
    dispath(userAction.errorGettingsCustomerOfProductInfo(error));
    dispath(snackAction.open(error))
  }
};