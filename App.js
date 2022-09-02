import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/Screens/SearchScreen";
import SingleResultScreen from "./src/Screens/SingleResultScreen";

const navigator = createStackNavigator({
 Search : SearchScreen,
 ResultScreen: SingleResultScreen,
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Resturant Search'
  }
})

export default createAppContainer(navigator);