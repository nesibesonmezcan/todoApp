import {createSlice} from '@reduxjs/toolkit'
//import { langs } from '../../helpers/locale-helper'
export const localeSlice =createSlice( {
    name:"locale",
    initialState:{
        lang:   {title:"Francais", code:"fr", country:"fr"},
        currency:"use"
    },
    reducers:{
        setLang :(state ,action) =>{
            state.lang =action.payload
        }
    }
})
export const {setLang}=localeSlice.actions

export default localeSlice.reducer