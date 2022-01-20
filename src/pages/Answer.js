import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentQuestion from '../components/ContentQuestion/ContentQuestion';
import FooterQuestion from '../components/FooterQuestion/FooterQuestion';
import StateListQuestion from '../components/StateListQuestion/StateListQuestion';
import { PAGE_START } from '../constants/constants';
import { QuestionContext } from '../contexts/QuestionContext/QuestionContext';

export default function Answer() {
    //
    const { state: { current, start, list, index }, dispatch, actions } = useContext(QuestionContext);
    const navigation = useNavigate();
    useEffect(() => {
        //
        if (start) {
            dispatch(actions.updateData('current', list[index]));
        }
        else {
            navigation(PAGE_START);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index, start])
    //
    return <div className="w-full flex flex-col h-full overflow-x-hidden overflow-y-hidden">
        {start && <>
            <StateListQuestion index={index} length={list.length} />
            {current && <ContentQuestion />}
        </>}
        <FooterQuestion />
    </div>
}
