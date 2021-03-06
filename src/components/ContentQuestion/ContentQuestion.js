import React, { useContext, useEffect, useRef } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import person_1 from "../../assets/images/person_1.png";
import { QuestionContext } from '../../contexts/QuestionContext/QuestionContext';
import ItemResult from '../ItemResult/ItemResult';
import TimeCount from '../TimeCount/TimeCount';

export default function ContentQuestion(props) {
    //
    const { state: { current, choose, status } } = useContext(QuestionContext);
    const { speak } = useSpeechSynthesis();
    const refButton = useRef();
    const refWrapper = useRef();
    const refHidden = useRef();
    const generateArray = (length) => {
        let array = [];
        for (let index = 0; index < length; index++) {
            array.push(index)
        }
        return array;
    }
    useEffect(() => {
        //
        if (current) {
            if (current.type === "speak") {
                refButton.current.click();
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current]);
    useEffect(() => {
        //
        if (refWrapper.current && refHidden.current) {
            refHidden.current.style.width = refWrapper.current.offsetWidth + "px";
            refHidden.current.style.height = refWrapper.current.offsetHeight + "px";
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refWrapper, refHidden])
    //
    return <div ref={refWrapper} className='xl:w-3/4 w-11/12 md:w-3/4 lg:w-2/3 mx-auto my-10 flex flex-1 relative'>
        <button ref={refButton} className='hidden' onClick={() => {
            let voices = speechSynthesis.getVoices();
            speak(voices.length > 0 ? {
                text: current.name ? current.name : current.answer, voice: voices[Math.random() * voices.length]
            } : {
                text: current.name
            });
        }}></button>
        <div className='w-full px-2 md:w-4/5 xl:w-7/12 mx-auto relative'>
            <TimeCount />
            <p className='w-full text-3xl font-bold'>{current.type === "speak" && current.name ? 'Vi???t l???i b???ng Ti???ng Vi???t' :
                'Vi???t l???i b???ng Ti???ng Anh'}</p>
            <div className='w-full flex items-center justify-start border-b-2 border-solid border-gray-200'>
                <img alt='' src={person_1} className='mr-5 w-32 object-contain' />
                <div className='flex items-center'>
                    {current.name ? <>
                        {current.type === "speak" &&
                            <span onClick={() => {
                                let voices = speechSynthesis.getVoices();
                                speak(voices.length > 0 ? {
                                    text: current.name, voice: voices[Math.random() * voices.length]
                                } : {
                                    text: current.name
                                });
                            }} className='bx bx-volume-full text-blue-500 mr-5 text-3xl cursor-pointer'></span>}
                        <div className={`border-2 relative arrow_left border-gray-300 border-solid rounded-3xl px-6 py-4`}>
                            {current.name}
                        </div>
                    </>
                        : <>
                            <span onClick={() => {
                                let voices = speechSynthesis.getVoices();
                                speak(voices.length > 0 ? {
                                    text: current.answer, voice: voices[Math.random() * voices.length]
                                } : {
                                    text: current.answer
                                });
                            }} className='bx bx-volume-full text-white mr-5 text-5xl cursor-pointer w-16 h-16 rounded-xl 
                             bg-blue-400 flex items-center justify-center'></span>
                            <span onClick={async () => {
                                let arr = current.answer.split(" ");
                                for (let index = 0; index < arr.length; index++) {
                                    let voices = speechSynthesis.getVoices();
                                    speak(voices.length > 0 ? {
                                        text: arr[index], voice: voices[Math.random() * voices.length]
                                    } : {
                                        text: arr[index]
                                    });
                                }
                            }} className='bx bxs-hand text-white mr-5 text-2xl cursor-pointer w-11 h-11 rounded-xl 
                        bg-blue-400 flex items-center justify-center'></span>
                        </>}
                </div>
            </div>
            {generateArray(current.line).map((item, index) =>
                <div key={index} className='w-full flex items-center justify-center gap-2 border-b-2 border-solid border-gray-200' style={{ height: 70 }}>
                    {[...choose].slice(index * 7, 7 * (index + 1)).map((item, index) =>
                        <ItemResult item={item} key={index + item + "true"} value={true} />)}
                </div>
            )}
            <div className='w-full flex items-center gap-2 flex-wrap justify-center my-5' style={{ height: 70 }}>
                {current.options.map((item, index) => {
                    const pos = [...choose].findIndex(dt => dt.id === item.id);
                    return <ItemResult item={item} key={index + item + "false"} hide={pos === -1 ? false : true} />
                })}
            </div>
        </div>
        <div ref={refHidden} className='z-50 absolute top-0 left-0' style={{
            display: status === null ? 'none' : 'block'
        }}>

        </div>
    </div>;
}
