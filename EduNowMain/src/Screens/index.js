import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen.js";
import SideBar from "../Components/SideBar.js";
import CoursesScreen from "./CoursesScreen.js";
import LoginScreen from "./LoginScreen.js";
import CourseDetailsTabsScreen from "./CourseDetailsTabsScreen.js";

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Courses: { screen: CoursesScreen },
    Login: { screen:  LoginScreen},
    Details: {screen: CourseDetailsTabsScreen}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
const App = createAppContainer(HomeScreenRouter);

export default App;