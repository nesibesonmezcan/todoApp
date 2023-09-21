import store from '../store'
import { setLang } from '../store/slice/locale-slice'
export const langs=[
    {title:"England", code:"en", country:"gb"},
    {title:"Turkce", code:"tr", country:"tr"}, 
    {title:"Francais", code:"fr", country:"fr"}
]
export const getCurrentLang = () => { 
    return store.getState().locale.lang;
 }
 export const setCurrentLangs = (lang) => { 
    store.dispatch (setLang(lang))
 }
export const $t=(key)=>{
const currentLang= getCurrentLang()
const langFile =require(`../helpers/langs/${currentLang.code}.json`)
return langFile[key]
 }