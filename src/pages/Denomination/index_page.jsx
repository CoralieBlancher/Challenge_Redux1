import { useSelector } from 'react-redux';

import DenominationForm from '../../components/DenominationForm';
import DenominationList from '../../components/DenominationList';
import { selectDenominationsResult } from '../../store/selectors/denomination-selector';

import './style.css';

const DenominationPage = () => {
    const denominationsResult = useSelector(selectDenominationsResult);

    console.log(denominationsResult.length)
    return (
        <div className="denomination-page">
            <h1>Dénomination</h1>
            <DenominationForm />

            {denominationsResult.length > 0 && <DenominationList />}
        </div>
    );
};

export default DenominationPage;
