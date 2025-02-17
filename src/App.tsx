import { Provider } from "react-redux";
import "./App.css";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import "./i18n";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import HomeRoute from "./routes/HomeRoute";
import CountriesRoute from "./routes/CountriesRoute";
import CountryRoute from "./routes/CountryRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <HomeRoute /> },
        { path: "countries", element: <CountriesRoute /> },
        { path: "countries/:country", element: <CountryRoute /> },
      ],
      errorElement: <></>,
    },
  ]);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
