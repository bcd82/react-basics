import { userService } from "../services/watchUser.service.js";
import { UserCard } from "../cmps/UserCard.jsx";

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
        userService.unSelectUser();
        this.setState({ showUserMovies: false });
        this.setUsers();
    };

    onDeleteUser = (ev, userKey) => {
        ev.stopPropagation();
        userService.deleteUser(userKey);
        if (this.state.showUserMovies) {
            this.onBackToUsers();
            return;
        }
        this.setUsers();
    };

    onAddUser = () => {
        const name = prompt("Your name please !");
        userService.createUser(name);
        this.setUsers();
    };

    movieList = (user) => {
        return (
            <div className="watch-list">
                <ul>
                <strong>Watched:</strong>
                    {user.watched.map((title, idx) => {
                        return <li key={idx}>{title}</li>;
                    })}
                </ul>
                <button
                    onClick={() => {
                        this.onBackToUsers(user.key);
                    }}
                >
                    Back
                </button>
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
                                    <UserCard
                                        userKey={user.key}
                                        key={user.key}
                                        name={user.userName}
                                        id={idx}
                                        deleteFunc={(ev) => {
                                            onDeleteUser(ev, user.key);
                                        }}
                                        onClick={() => onClickUser(user.key)}
                                    />
                                );
                        })}
                        {!showUserMovies && (
                            <div
                                className="user-card"
                                onClick={() => onAddUser()}
                            >
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
