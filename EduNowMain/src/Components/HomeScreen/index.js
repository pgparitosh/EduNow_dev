import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import SideBar from "../SideBar/SideBar.js";
import CoursesScreen from "../CoursesScreen/CoursesScreen.js";
import LoginScreen from "../LoginScreen/LoginScreen.js";
import { createDrawerNavigator,createAppContainer } from "react-navigation";

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Courses: { screen: CoursesScreen },
    Login: { screen:  LoginScreen}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
const App = createAppContainer(HomeScreenRouter);

export default App;