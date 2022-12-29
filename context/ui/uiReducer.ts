import { UIState } from './';


type UIActionType =
	| { type: 'UI - Open Sidebar' }
	| { type: 'UI - Close Sidebar' }
	| { type: 'UI - Dark Theme' }
	| { type: 'UI - Light Theme' }


export const uiReducer = (state: UIState, action: UIActionType): UIState => {

	switch (action.type) {
		case 'UI - Open Sidebar':
			return {
				...state,
				sideMenuOpen: true,
			}

		case 'UI - Close Sidebar':
			return {
				...state,
				sideMenuOpen: false,
			}

		case 'UI - Dark Theme':
			return {
				...state,
				currentTheme: "darkTheme",
			}

		case 'UI - Light Theme':
			return {
				...state,
				currentTheme: "lightTheme",
			}

		default:
			return state;
	}

}