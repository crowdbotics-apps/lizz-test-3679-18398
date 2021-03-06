import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1781962Navigator from '../features/BlankScreen1781962/navigator';
import BlankScreen1680282Navigator from '../features/BlankScreen1680282/navigator';
import BlankScreen1279502Navigator from '../features/BlankScreen1279502/navigator';
import BlankScreen1179501Navigator from '../features/BlankScreen1179501/navigator';
import BlankScreen1079496Navigator from '../features/BlankScreen1079496/navigator';
import BlankScreen979113Navigator from '../features/BlankScreen979113/navigator';
import BlankScreen878968Navigator from '../features/BlankScreen878968/navigator';
import BlankScreen778051Navigator from '../features/BlankScreen778051/navigator';
import BlankScreen675037Navigator from '../features/BlankScreen675037/navigator';
import BlankScreen574761Navigator from '../features/BlankScreen574761/navigator';
import BlankScreen471619Navigator from '../features/BlankScreen471619/navigator';
import BlankScreen871064Navigator from '../features/BlankScreen871064/navigator';
import BlankScreen771063Navigator from '../features/BlankScreen771063/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen1781962: { screen: BlankScreen1781962Navigator },
BlankScreen1680282: { screen: BlankScreen1680282Navigator },
BlankScreen1279502: { screen: BlankScreen1279502Navigator },
BlankScreen1179501: { screen: BlankScreen1179501Navigator },
BlankScreen1079496: { screen: BlankScreen1079496Navigator },
BlankScreen979113: { screen: BlankScreen979113Navigator },
BlankScreen878968: { screen: BlankScreen878968Navigator },
BlankScreen778051: { screen: BlankScreen778051Navigator },
BlankScreen675037: { screen: BlankScreen675037Navigator },
BlankScreen574761: { screen: BlankScreen574761Navigator },
BlankScreen471619: { screen: BlankScreen471619Navigator },
BlankScreen871064: { screen: BlankScreen871064Navigator },
BlankScreen771063: { screen: BlankScreen771063Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
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
