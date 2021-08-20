import { CountDown } from "../cmps/CountDown.jsx";

export const Ex2 = () => {
    const playSound = () => {
        const endSound = new Audio("../assets/audio/timer-over.wav");
        endSound.play();
    };

    return (
        <div>
            <CountDown
                targetTime={Date.now() + 1000 * 15}
                dueFunc={playSound}
            />
        </div>
    );
};
