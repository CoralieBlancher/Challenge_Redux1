const initialState = {
    amount: '',
    denominationsResult: [],
    availableDenominations: [100, 50, 1],
};

const denominationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AMOUNT':
            return { ...state, amount: action.payload };

        case 'CALCULATE_DENOMINATIONS':
            let amount = parseInt(state.amount, 10);
            const denominationsResult = [];

            state.availableDenominations.forEach((value) => {
                if (amount >= value) {
                    denominationsResult.push({ value, count: Math.floor(amount / value) });
                    amount %= value;
                }
            });

            return { ...state, denominationsResult };

        case 'RESET_AMOUNT':
            return { ...state, amount: '', denominationsResult: [] };

        default:
            return state;
    }
};

export default denominationReducer;
