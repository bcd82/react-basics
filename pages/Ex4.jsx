
export class Ex4 extends React.Component {
    state = {
        mousePosition: ''
    };

    componentDidMount = () => {
        document.querySelector('body').addEventListener('mousemove',this.getMousePos)
    }
    componentWillUnmount = () => { 
        document.querySelector('body').removeEventListener('mousemove',this.getMousePos)

    }
    getMousePos = ({clientX,clientY}) => {
        const pos = 
        this.setState({mousePosition:` mouse position: ${clientX} , ${clientY}`}) 
    }
    render() {
        const {mousePosition} = this.state
        return (
            <div className="move-mouse-page">
                <h1>Move The mouse !</h1>
                <div className="mouse-position">
                    <p>{mousePosition}</p>
                </div>
            </div>
        
        );
    }
}
