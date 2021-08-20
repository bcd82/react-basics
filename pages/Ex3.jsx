import { userService } from "../services/watchUser.service.js";
import { watchProfile } from "../cmps/watchProfile.jsx";

export class Ex3 extends React.Component {
    state = {
        users: [],
        showUserMovies: false,
        selectedIdx: -1,
    };

    componentDidMount = () => {
        this.setUsers();
        console.log(this.state.users);
    };

    setUsers = () => {
        this.setState({ users: userService.getUsers() });
    };

    onClickUser = (userKey) => {
        userService.selectUser(userKey);
        this.setState({
            showUserMovies: true,
            selectedIdx: userService.getSelectedUserIdx(),
        });
        this.setUsers();
    };

    onBackToUsers = () => {
        userService.unSelectUser()
        this.setState({showUserMovies:false})
        this.setUsers()
    };


    onDeleteUser = (ev, userKey) => {
        ev.stopPropagation();
        userService.deleteUser(userKey);
        if(this.state.showUserMovies){
            this.onBackToUsers()
            return
        }
        this.setUsers();
    };

    onAddUser = () => {
        const name = prompt("Your name please !");
        userService.createUser(name);
        this.setUsers();
    };

    movieList = (user) => {
        console.log(this.users);
        return (
            <div className="movie-list">
                <ul>
                    {user.watched.map((movie, idx) => {
                        return <li key={idx}>{movie.toString()}</li>;
                    })}
                </ul>
                <button onClick={()=>{this.onBackToUsers(user.key)}}>Back</button>
            </div>
        );
    };

    render() {
        const { users, showUserMovies, selectedIdx } = this.state;
        const { onAddUser, onClickUser, onDeleteUser, movieList } = this;
        return (
            <div className="who-watch-page">
                <div className="main-layout">
                <div className="top-bar">
                    <h1>Who's watching?</h1>
                </div>
                <div className="users-container">
                    {users.map((user, idx) => {
                        if (!user.isHidden)
                            return (
                                <div
                                    className="user-card"
                                    key={user.key}
                                    id={idx}
                                    onClick={() => onClickUser(user.key)}
                                >
                                    <img
                                        src={`https://robohash.org/https://robohash.org/${user.userName}?set=set5?set=set5`}
                                    />
                                    <button
                                        onClick={(ev) =>
                                            onDeleteUser(ev, user.key)
                                        }
                                    >
                                        delete
                                    </button>
                                    <h2>{user.userName}</h2>
                                </div>
                            );
                    })}
                    {!showUserMovies && (
                        <div className="user-card" onClick={() => onAddUser()}>
                            <p>Add New User +</p>
                        </div>
                    )}
                    {showUserMovies && movieList(users[selectedIdx])}
                </div>
            </div>
            </div>
        );
    }
}
