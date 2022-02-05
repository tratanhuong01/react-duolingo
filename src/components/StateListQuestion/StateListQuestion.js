import React, { useContext } from 'react';
import { QuestionContext } from '../../contexts/QuestionContext/QuestionContext';

export default function StateListQuestion(props) {
    //
    const { index, length } = props;
    const { dispatch, actions } = useContext(QuestionContext);
    //
    return <div className='w-3/4 mx-auto flex items-start pt-6 pb-5'>
        <div className='w-full flex items-center'>
            <div onClick={() => {
                dispatch(actions.updateData('start', false));
                dispatch(actions.updateData('choose', []));
                dispatch(actions.updateData('index', 0));
                dispatch(actions.updateData('correct', []));
                dispatch(actions.updateData('status', null));
            }} className='text-3xl font-bold mr-5 text-gray-500 mx-2 cursor-pointer'>
                &times;
            </div>
            <div className='relative' style={{ width: "calc(100% - 50px)" }}>
                <div className='w-full py-1.5 bg-gray-300 rounded-lg'>

                </div>
                <div className='bg-green-500 py-1.5 absolute top-0 left-0 rounded-lg'
                    style={{ width: `${((index + 1) / length) * 100}%` }}>
                </div>
            </div>
        </div>
    </div>;
}
