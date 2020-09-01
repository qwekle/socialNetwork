const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {
        //     id: 1, photoUrl: 'https://www.skoltech.ru/app/data/uploads/sites/19/2017/09/dmitrygorin_avatar_1505213955.jpg',
        //     followed: true, fullName: 'Viktor', status: 'i am a boss', location: { city: 'Vologda', country: 'Russia' }
        // },
        // {
        //     id: 2, photoUrl: 'https://www.skoltech.ru/app/data/uploads/sites/19/2017/09/dmitrygorin_avatar_1505213955.jpg',
        //     followed: true, fullName: 'Dmityr', status: 'i am a boss', location: { city: 'Moskow', country: 'Russia' }
        // },
        // {
        //     id: 3, photoUrl: 'https://www.skoltech.ru/app/data/uploads/sites/19/2017/09/dmitrygorin_avatar_1505213955.jpg',
        //     followed: false, fullName: 'Max', status: 'i am a boss', location: { city: 'Yaroslavl', country: 'Russia' }
        // },
        // {
        //     id: 4, photoUrl: 'https://www.skoltech.ru/app/data/uploads/sites/19/2017/09/dmitrygorin_avatar_1505213955.jpg',
        //     followed: false, fullName: 'Alex', status: 'i am a boss', location: { city: 'Novgorod', country: 'Russia' }
        // },
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}


export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;