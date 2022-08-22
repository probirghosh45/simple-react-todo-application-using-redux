import { COLORCHANGED, STATUSCHANGED } from "./actionTypes"

export const statusChanged = (Status) =>{
    return {
        type : STATUSCHANGED,
        payload : Status
    }
}

export const colorChanged = (color , changeType)=>{
    return {
        type : COLORCHANGED,
        payload : {
         color,
         changeType
        }
    }
}