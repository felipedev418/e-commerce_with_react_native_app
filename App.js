import React, { useState } from "react";
//Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//Reducer
import {
  authReducer,
  cartReducer,
  favoriteReducer,
  orderReducer,
  productReducer,
} from "./src/reducers";
//Navigator
import { AppNavigator } from "./src/navigation";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";

//redux form
import { reducer as formReducer } from "redux-form";
import { StatusBar } from "expo-status-bar";
//Notification
import LocalNotication from "./src/components/Notification/LocalNotification";

const rootReducer = combineReducers({
  store: productReducer,
  cart: cartReducer,
  order: orderReducer,
  auth: authReducer,
  fav: favoriteReducer,
  form: formReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
const LoadAssets = () => {
  return [
    Asset.loadAsync([
      require("./src/assets/Images/banner1.jpg"),
      require("./src/assets/Images/banner3.jpg"),
      require("./src/assets/Images/banner4.jpg"),
      require("./src/assets/Images/banner5.jpg"),
      require("./src/assets/Images/banner6.jpg"),
      require("./src/assets/Images/bg1.jpg"),
      require("./src/assets/Images/bg2.jpg"),
      require("./src/assets/Images/bg3.jpg"),
      require("./src/assets/Images/defaultprofile.jpg"),
      require("./src/assets/Images/flower3.jpg"),
      require("./src/assets/Images/logoNoText.png"),
      require("./src/assets/Images/logo1.png"),
      require("./src/assets/Images/logoTextWhite.png"),
      require("./src/assets/Images/slide1.png"),
      require("./src/assets/Images/slide2.png"),
      require("./src/assets/Images/slide3.png"),
      require("./src/assets/Images/social1.png"),
      require("./src/assets/Images/social2.png"),
      require("./src/assets/Images/social3.png"),
      require("./src/assets/Images/creditcards.png"),
    ]),
  ];
};
export default function App() {
  const [assetLoaded, setAssetLoaded] = useState(false);
  if (!assetLoaded) {
    return (
      <AppLoading
        startAsync={LoadAssets}
        onFinish={() => setAssetLoaded(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <StatusBar />
      <LocalNotication />
      <AppNavigator />
    </Provider>
  );
}
