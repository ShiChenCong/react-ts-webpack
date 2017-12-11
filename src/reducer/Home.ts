import { types } from "../types/Home";
const { ADD_ACTION } = types

export default function (state = { name: 'scc' }, action) {
    switch (action.type) {
        case ADD_ACTION:
            console.log(action.account);
            break;
    }
    return state
}