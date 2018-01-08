import { types } from '../types/Home'
const {
    ADD_ACTION
} = types;

export const add = (number) => {
    return {
        type: ADD_ACTION,
        account: number
    }
}