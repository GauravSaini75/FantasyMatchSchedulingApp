import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';
import { AppLoading, CreateMatch, HomeScreen } from '../screens';
import { RootStackParamList } from './types';
import { useDispatch } from 'react-redux';
import { getMatchList } from '../store/matchs/actions';
import { AppDispatch } from '../store';

const Stack = createNativeStackNavigator<RootStackParamList>();
const SplashStack = createNativeStackNavigator();

const LoadingSplash = (): JSX.Element => {
    return(
      <SplashStack.Navigator screenOptions={{ headerShown:false, animation:'slide_from_right' }}>
        <SplashStack.Screen name='AppLoading' component={AppLoading}/>
      </SplashStack.Navigator>
    )
}

const Root = (): JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const [loadingSplash, setLoadingSplash] = React.useState<boolean>(true);

    const initialiesData = () => {
        dispatch(getMatchList(
            () => {
                setLoadingSplash(false);
            },
            (error) => {
                setLoadingSplash(false);
                console.log('Error => ', error) 
            }
        ))
    }

    React.useEffect(() => {
        setTimeout(() => {
            initialiesData();
        }, 2500);
    }, [])
    

    return (
        <NavigationContainer
            ref={navigationRef}
            theme={{
                ...DefaultTheme,
                dark: false
            }}
        >
            {loadingSplash ?
                <LoadingSplash />
                :
                <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false, animation:'slide_from_right' }}>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="CreateMatch" component={CreateMatch} />
                </Stack.Navigator>
            }
        </NavigationContainer>
    );
}

export default Root