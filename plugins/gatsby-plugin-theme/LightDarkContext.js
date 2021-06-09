
import { createContext } from 'react';

const LightDarkContext = createContext({
	theme: 'dark',
	changeTheme: () => null
});

export default LightDarkContext;