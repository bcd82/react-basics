import { ShowTime } from "../cmps/ShowTime.jsx";

export class Ex1 extends React.Component {
    now = new Date();
    month = this.now.getMonth();

    state = {
        hours: this.now.getHours(),
        minutes: this.now.getMinutes(),
        theme: "dark",
    };

    onToggleTheme = () => {
        this.state.theme === "dark"
            ? this.setState({ theme: "light" })
            : this.setState({ theme: "dark" });
    };

    componentDidMount = () => {
        this.interval = setInterval(() => {
            this.now = new Date();
            const hours = this.now.getHours();
            const minutes = this.now.getMinutes();
            // console.log("checking time every second");
            if (minutes !== this.state.minutes || hours !== this.state.hours) {
                this.setState({ hours, minutes });
            }
        }, 1000);
    };
    componentDidUpdate = () => {
        console.log("componenet updated");
    };
    componentWillUnmount = () => {
        clearInterval(this.interval);
    };

    render() {
        const { minutes, hours, theme } = this.state;
        return (
            <div>
                <ShowTime
                    minutes={minutes}
                    hours={hours}
                    theme={theme}
                    month={this.month}
                    onClick={this.onToggleTheme}
                />
            </div>
        );
    }
}
