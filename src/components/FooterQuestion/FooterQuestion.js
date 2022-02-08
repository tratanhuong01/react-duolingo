import React, { useContext } from 'react';
import StatusQuestion from '../StatusQuestion/StatusQuestion';
import success from "../../assets/audio/success.mp3";
import faild from "../../assets/audio/faild.mp3";
import { QuestionContext } from '../../contexts/QuestionContext/QuestionContext';

export default function FooterQuestion(props) {
    //
    const { state: { choose, current, status, correct }, dispatch, actions } = useContext(QuestionContext);
    let audio = new Audio();
    //
    return <div className={`border-b-2 border-solid border-gray-200 w-full flex items-center justify-center h-40 
        ${status === true ? 'bg-green-100' : status === null ? '' : 'bg-red-100'}`}>
        <div className='w-full xl:w-3/4 px-3 flex justify-between items-center'>
            {status === true ? <StatusQuestion /> :
                status === null ? <>
                    <button onClick={() => {
                        dispatch(actions.updateData('status', false));
                        audio.src = faild;
                        audio.play();
                    }} className='px-6 py-3 font-bold border-2 border-gray-200 text-gray-600 rounded-xl'>
                        Bỏ qua
                    </button>
                    <button onClick={() => {
                        let string = "";
                        [...choose].forEach((item, index) => {
                            string += item.value + (index === choose.length - 1 ? '' : ' ');
                        });
                        if (string.toLowerCase() === current.answer.toLowerCase()) {
                            dispatch(actions.updateData('status', true));
                            audio.src = success;
                            dispatch(actions.updateData('correct', [...correct, current]))
                        }
                        else {
                            dispatch(actions.updateData('status', false));
                            audio.src = faild;
                        }
                        audio.play();
                    }} className={`px-6 py-3 font-bold border-2 border-gray-200 ${choose.length > 0 ? 'bg-green-500 text-white' :
                        'bg-gray-100 text-gray-600'} rounded-xl`}
                        disabled={choose.length > 0 ? false : true}>
                        Kiểm tra
                    </button>
                </> : <StatusQuestion />}
        </div>
    </div >
}
