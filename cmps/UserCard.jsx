export const UserCard = (props) => {
    const {userKey,id,name,deleteFunc,onClick} = props;
    return (
        <div
            className="user-card"
            key={userKey}
            id={id}
            onClick={onClick}
        >
            <img
                src={`https://robohash.org/https://robohash.org/${name}?set=set5?set=set5`}
            />
            <button onClick={deleteFunc}>delete</button>
            <h2>{name}</h2>
        </div>
    );
};
