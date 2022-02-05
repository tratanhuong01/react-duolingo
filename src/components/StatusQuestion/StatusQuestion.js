import React, { useContext } from 'react';
import { QuestionContext } from '../../contexts/QuestionContext/QuestionContext';

export default function StatusQuestion(props) {
    //
    const { state: { status, current, index, list }, dispatch, actions } = useContext(QuestionContext);
    //
    return <div className='w-full flex items-center relative'>
        <div className={`text-7xl relative bg-white font-bold text-${status ? 'green' : 'red'}-500 w-20 h-20 rounded-full`}>
            <span className={`${status ? 'bx bx-check' : ''} absolute top-1/2 left-1/2 transform -translate-x-1/2 -mt-1.5 
            -translate-y-1/2`}>{status ? '' : <>&times;</>}</span>
        </div>
        <div className='ml-3'>
            {status ? <span className='text-green-500 font-bold text-2xl mb-1'>Làm tốt lắm!</span> : <>
                <span className={`text-2xl font-bold mb-1 text-${status ? 'green' : 'red'}-500`}>Đáp án đúng:</span>
                <br />
                <span className={`text-${status ? 'green' : 'red'}-500 mb-1`}>{current.answer}</span>
                <br />
            </>}
            <ul className='flex items-center gap-4 py-1'>
                <li className={`text-${status ? 'green' : 'red'}-400 font-semibold flex items-center cursor-pointer hover:text-${status ? 'green' : 'red'}-500`}>
                    <span className='bx bx-flag text-xl mr-2'></span>
                    <span>BÁO CÁO</span>
                </li>
                <li className={`text-${status ? 'green' : 'red'}-400 font-semibold flex items-center cursor-pointer hover:text-${status ? 'green' : 'green'}-500`}>
                    <span className='bx bx-comment-dots text-xl mr-2'></span>
                    <span>PHẢN HỒI</span>
                </li>
            </ul>
        </div>
        <button onClick={() => {
            if (list.length <= index + 1) {
                dispatch(actions.updateData('completed', true));
            }
            else {
                dispatch(actions.updateData('status', null));
                dispatch(actions.updateData('index', index + 1));
                dispatch(actions.updateData('choose', []));
            }
        }} className={`px-6 py-3 font-bold border-2 border-gray-200 text-white font-bold rounded-xl 
        ${status ? 'bg-green-500' : 'bg-red-500'} absolute top-1/2 right-5 transform -translate-y-1/2`}>
            {list.length > index + 1 ? 'Tiếp tục' : 'Kết thúc'}
        </button>
    </div >;
}
