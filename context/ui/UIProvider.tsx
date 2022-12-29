import { FC, ReactElement, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
	sideMenuOpen: boolean;
	currentTheme: "lightTheme" | "darkTheme"
}


const UI_INITIAL_STATE: UIState = {
	sideMenuOpen: false,
	currentTheme: "lightTheme",
}

interface Props {
	children: ReactElement
}

export const UIProvider: FC<Props> = ({ children }) => {

	const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);


	const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' });

	const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' });

	const setDarkTheme = () => dispatch({ type: 'UI - Dark Theme' });

	const setLightTheme = () => dispatch({ type: 'UI - Light Theme' });

	return (
		<UIContext.Provider value={{
			...state,

			// Methods
			closeSideMenu,
			openSideMenu,
			setLightTheme,
			setDarkTheme,
		}}>
			{children}
		</UIContext.Provider>
	)
};