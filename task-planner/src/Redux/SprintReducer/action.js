import { ADD_SPRINT_FAILURE, ADD_SPRINT_REQUEST, ADD_SPRINT_SUCCESS } from "./actionTypes"

export const addSprintRequest=(payload)=>{
    return {type:ADD_SPRINT_REQUEST,payload}
}

export const addSprintSuccess=(payload)=>{
    return {type:ADD_SPRINT_SUCCESS,payload}
}

export const addSprintFailure=(payload)=>{
    return {type:ADD_SPRINT_FAILURE,payload}
}