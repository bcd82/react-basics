import { utilService } from '../services/util.service.js'

const users = [
    {
        userName: 'Moshe',
        key: utilService.makeId(),
        watched: ['South Park', 'Fight Club', 'Requiem For a Dream'],
        isHidden: false,        
        isSelected:false

    },
    {
        userName: 'Moti',
        key: utilService.makeId(),
        watched: ['Movie A', 'Tv Show C', 'More Things'],
        isHidden: false,        
        isSelected:false

    },
    {
        userName: 'Shulman',
        key: utilService.makeId(),
        watched: ['ארץ נהדרת', 'American Dad', 'Loki'],
        isHidden: false,        
        isSelected:false

    },
]

const getUsers = () => users;

const createUser = (userName = 'John Doe') => {
    users.push(
        {
            userName,
            key: utilService.makeId(),
            watched: [],
            isHidden: false
        }
    )
}

const deleteUser = key => {
    const userIdx = users.findIndex((user => key === user.key))
    users.splice(userIdx, 1)
}

const selectUser = (key) => {
    users.forEach((user,idx) => {
        if (key !== user.key) user.isHidden = true
        else user.isSelected = true;
    })
}

const unSelectUser = () =>{
    users.forEach((user) => {
        user.isHidden = false
        user.isSelected = false;
    })

}

const getSelectedUserIdx = () => users.findIndex((user)=> user.isSelected === true)

export const userService = {
    getUsers,
    createUser,
    deleteUser,
    selectUser,
    unSelectUser,
    getSelectedUserIdx
}
