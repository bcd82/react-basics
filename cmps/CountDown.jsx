export class CountDown extends React.Component {
    state = {
        minsRemaining: "",
        secsRemaining: "",
    };

    componentDidMount = () => {
        this.interval = setInterval(() => {
            this.countDown();
        }, 50);
    };

    componentWillUnmount = () => {
        clearInterval(this.interval);
    };

    countDown = () => {
        const msRemainig = new Date(this.props.targetTime - Date.now());
        this.checkIfTimeOver(msRemainig);
        const minsRemaining =
            msRemainig.getMinutes() >= 10
                ? msRemainig.getMinutes()
                : "0" + msRemainig.getMinutes();
        const secsRemaining =
            msRemainig.getSeconds() >= 10
                ? msRemainig.getSeconds()
                : "0" + msRemainig.getSeconds();

        this.setState({ minsRemaining, secsRemaining });
    };

    checkIfTimeOver = (ms) => {
        if (ms <= 1000) {
            clearInterval(this.interval);
            this.props.dueFunc();
        }
    };

    render() {
        const { targetTime, onTimeOver } = this.props;
        const { minsRemaining, secsRemaining } = this.state;
        return (
            <div className="count-down">
                <div className="count-down-box">
                    <h1 className="title">COUNTDOWN</h1>
                    <h1>
                        {minsRemaining}:
                        <span className={secsRemaining <= 10 ? "red" : ""}>
                            {secsRemaining}
                        </span>
                    </h1>
                </div>
            </div>
        );
    }
}
