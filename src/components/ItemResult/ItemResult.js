import React, { useContext } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { QuestionContext } from '../../contexts/QuestionContext/QuestionContext';

export default function ItemResult(props) {
    //
    const { state: { current, choose }, dispatch, actions } = useContext(QuestionContext);
    const { value, item, hide } = props;
    const { speak } = useSpeechSynthesis();
    //
    return <div onClick={() => {
        if (value) {
            dispatch(actions.updateData('choose', [...choose].filter(dt => dt.id !== item.id)));
        }
        else {
            if (current.type !== "speak" && !value) {
                let voices = speechSynthesis.getVoices();
                speak(voices.length > 0 ? {
                    text: item.value, voice: voices[Math.random() * voices.length]
                } : {
                    text: item.value
                });
            }
            const index = [...choose].findIndex(dt => dt.id === item.id);
            if (index === -1)
                dispatch(actions.updateData('choose', [...choose, item]));
        }
    }} className={`py-2.5 rounded-2xl px-5 border-gray-200 border-solid border-2 cursor-pointer ${value ? '' :
        hide ? 'bg-gray-200' : ''}`}>
        <span className={`${hide ? 'invisible' : ''}`}>{item.value}</span>
    </div >;
}
