import { combineReducers } from "redux";
import reducerDakeMode from './reducerDakeMode'
import reducerShowNav from './reducerShowNav'
import reducerGoToTop from "./reducerGoToTop";
import reducerResize from "./reducerResize";
import reducerColors from "./reducerColors";
import reducerClickColor from "./reducerClickColor";
import reducerOpenMenu from "./reducerOpenMenu";

const rootReducer = combineReducers({
    darkMode: reducerDakeMode,
    showNav: reducerShowNav,
    goToTop: reducerGoToTop,
    resize: reducerResize,
    colors: reducerColors,
    clickColor: reducerClickColor,
    openMenu: reducerOpenMenu,
})

export default rootReducer