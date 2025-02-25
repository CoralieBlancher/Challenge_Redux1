import { useSelector } from 'react-redux';

import { selectDenominationsResult } from '../../store/selectors/denomination-selector';

import './style.css';

const DenominationList = () => {
    const denominationsResult = useSelector(selectDenominationsResult);

    return (
        <div className="denomination-list">
            {denominationsResult.length > 0 && (
                <ul>
                    {denominationsResult.map(({ value, count }) => (
                        <li key={value}>
                            Dénomination {value} unité(s) : {count}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DenominationList;
