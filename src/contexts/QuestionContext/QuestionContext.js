import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import * as actions from "./Action";
import questions from "../../questions";

const initialState = {
    start: false,
    index: 0,
    current: questions[0],
    list: questions,
    choose: [],
    status: null,
    correct: [],
};

export const QuestionContext = createContext();

export const QuestionProvider = (props) => {
    //
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //
    return (
        <QuestionContext.Provider value={
            {
                state,
                dispatch,
                actions,
            }
        }>
            {props.children}
        </QuestionContext.Provider>
    )
}