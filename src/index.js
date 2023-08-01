import React from 'react';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider} from "react-redux";
import {store,persistor} from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
Kommunicate.init("24b33dee2fa742a22cf49242c8c0a8e4c",{"popupWidget":true,"automaticChatOpenOnNavigation":true})
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

