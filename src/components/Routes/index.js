import LoginLayout from "../Layout/LoginLayout";
import DefaultLayout from "../Layout/DefaultLayout";
import FindLocationLayout from "../Layout/FindLocationLayout";
import FindLocation from '../../pages/FindLocation';
import { BrowserRouter as Route } from "react-router-dom";


const location = {
  hasLocation : false,
}

export const CustomRoute = (route) => {

  const Layout = route.layout || DefaultLayout
  const exact = route.exact || false

  return (
    <Route
      exact={exact}
      path={route.path}>
      {
        location.hasLocation
          ? <Layout>
            <route.component.default />
          </Layout>
          : <FindLocationLayout>
              <FindLocation />
            </FindLocationLayout>
      }

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
    path: '/',
    component: require("../../pages/Home"),
  },
  {
    path: '/restaurant',
    component: require("../../pages/RestaurantDetail"),
  },
  {
    path: '/cuisines',
    component: require("../../pages/RestaurantDetail"),
  },
]
