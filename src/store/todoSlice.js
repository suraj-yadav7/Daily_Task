import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    status:false,
    todoData:""
}

const todoSlice = createSlice({
    name:"TodoSlice",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true,
            state.todoData=action.payload
        },
        logout:(state)=>{
            state.status=false
            state.todoData=null
        }
        
    }
});

export const{login,logout} = todoSlice.actions;
export default todoSlice.reducer;