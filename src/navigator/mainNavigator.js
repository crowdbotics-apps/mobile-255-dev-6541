import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging56737Navigator from '../features/Messaging56737/navigator';
import Messaging66736Navigator from '../features/Messaging66736/navigator';
import Messaging76735Navigator from '../features/Messaging76735/navigator';
import BlankScreen16709Navigator from '../features/BlankScreen16709/navigator';
import Messaging6699Navigator from '../features/Messaging6699/navigator';
import EmailAuth6698Navigator from '../features/EmailAuth6698/navigator';
import CalendarView6697Navigator from '../features/CalendarView6697/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Messaging56737: { screen: Messaging56737Navigator },
Messaging66736: { screen: Messaging66736Navigator },
Messaging76735: { screen: Messaging76735Navigator },
BlankScreen16709: { screen: BlankScreen16709Navigator },
Messaging6699: { screen: Messaging6699Navigator },
EmailAuth6698: { screen: EmailAuth6698Navigator },
CalendarView6697: { screen: CalendarView6697Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
