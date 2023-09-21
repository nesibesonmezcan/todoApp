import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slice/theme";
import localeSlice from "./slice/locale-slice";
import todoSlice from "./slice/todo-slice";

export default configureStore({
    reducer:{
        theme:themeSlice,
        locale:localeSlice,
        todos:todoSlice
    }
})