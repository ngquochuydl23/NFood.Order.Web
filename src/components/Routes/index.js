import LoginLayout from "../Layout/LoginLayout";
import DefaultLayout from "../Layout/DefaultLayout";
import FindLocationLayout from "../Layout/FindLocationLayout";
import { BrowserRouter as Route } from "react-router-dom";

export const CustomRoute = (item) => {
  const Layout = item.layout || DefaultLayout
  return (
    <Route
      exact
      path={item.path}>
      <Layout>
        <item.component.default />
      </Layout>
    </Route>
  )
}

export const routes = [
  {
    path: "/login",
    component: require("../../pages/Login"),
    layout: LoginLayout
  },
  {
    path: '/location',
    component: require("../../pages/FindLocation"),
    layout: FindLocationLayout
  },
  {
    path: '/',
    component: require("../../pages/Home"),
  },
  {
    path: '/restaurantDetail/:id',
    component: require("../../pages/RestaurantDetail"),
  }
]
