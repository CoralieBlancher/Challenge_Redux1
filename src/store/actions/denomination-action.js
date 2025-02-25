import { SET_AMOUNT, CALCULATE_DENOMINATIONS, RESET_AMOUNT } from "../actions-types/denomination-action-type.js";

export const setAmount = (amount) => ({
    type: SET_AMOUNT,
    payload: amount,
});

export const calculateDenominations = () => ({
    type: CALCULATE_DENOMINATIONS,
});

export const resetAmount = () => ({
    type: RESET_AMOUNT,
});
