import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { setAmount, calculateDenominations, resetAmount } from '../../store/actions/denomination-action';
import { selectAmount } from '../../store/selectors/denomination-selector';

import './style.css';

const DenominationForm = () => {
    const dispatch = useDispatch();
    const amount = useSelector(selectAmount);
    const [error, setError] = useState('');

    const handleCalculate = () => {
        if (!amount.trim() || isNaN(amount) || amount <= 0) {
            setError('Merci de saisir un montant valide.');
            return;
        }
        setError('');
        dispatch(calculateDenominations());
    };

    return (
        <div className="denomination-form">
            <input
                type="number"
                value={amount}
                placeholder="Montant à saisir"
                onChange={(e) => dispatch(setAmount(e.target.value))}
            />
            <button onClick={handleCalculate}>Dénomination</button>
            <button onClick={() => dispatch(resetAmount())}>Reset</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default DenominationForm;
