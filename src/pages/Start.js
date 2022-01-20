import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import main from "../assets/images/main.png";
import { PAGE_ANSWER } from '../constants/constants';
import { QuestionContext } from '../contexts/QuestionContext/QuestionContext';

export default function Start() {
    //
    const { dispatch, actions } = useContext(QuestionContext);
    const navigation = useNavigate();
    //
    return <div className='w-full h-full flex flex-col'>
        <div className='w-full flex-1 flex items-center'>
            <div className='flex items-center mx-auto' style={{ width: "45%" }}>
                <img src={main} alt='' className='w-56 object-cover' />
                <div className='ml-6'>
                    <p className='text-2xl font-bold mb-2'>Học tiếng anh với A Hưởng Dev!</p>
                    <p className='text-gray-500 font-semibold text-sm'>
                        Chỉ tốn 5 phút thôi, còn nhanh hơn uống một cốc trà sữa nữa đó!
                    </p>
                </div>
            </div>
        </div>
        <div className='w-full flex items-end border-t-2 border-solid border-gray-200'>
            <div className='py-16 w-3/4 mx-auto text-right'>
                <button onClick={() => {
                    dispatch(actions.updateData('start', true));
                    navigation(PAGE_ANSWER)
                }} className='bg-green-500 px-10 rounded-xl py-3 text-white font-bold'>Bắt đầu học</button>
            </div>
        </div>
    </div>;
}
