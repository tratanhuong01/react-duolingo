import React, { useContext, useEffect, useState } from 'react';
import { QuestionContext } from '../../contexts/QuestionContext/QuestionContext';

export default function TimeCount() {
    //
    const inital = 180;
    const { state: { completed, correct }, dispatch, actions } = useContext(QuestionContext);
    const [count, setCount] = useState(inital);
    useEffect(() => {
        //
        const timeOut = setTimeout(() => {
            const reset = async () => {
                clearTimeout(timeOut);
                alert(`Thời gian hoàn thành bài làm của bạn là ${`${Math.floor((inital - count) / 60) < 10 ? `0${Math.floor((inital - count) / 60)}` :
                    Math.floor((inital - count) / 60)}:${((inital - count) % 60) < 10 ?
                        `0${(inital - count) % 60}` : (inital - count) % 60}`} và số câu trả lời đúng là ${correct.length} câu.`)
                dispatch(actions.updateData('start', false));
                dispatch(actions.updateData('choose', []));
                dispatch(actions.updateData('index', 0));
                dispatch(actions.updateData('correct', []));
                dispatch(actions.updateData('completed', false));
                dispatch(actions.updateData('status', null));
            }
            if (completed) {
                reset();
            }
            else {
                if (count - 1 === 0) {
                    reset();
                }
                else {
                    setCount(count - 1);
                }
            }
        }, 1000)
        return () => {
            clearTimeout(timeOut);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count, completed])
    //
    return <div className='absolute top-9 md:top-2 text-5xl font-bold right-2 z-50'>
        {`${Math.floor(count / 60) < 10 ? `0${Math.floor(count / 60)}` :
            Math.floor(count / 60)}:${(count % 60) < 10 ?
                `0${count % 60}` : count % 60}`}
    </div>;
}
