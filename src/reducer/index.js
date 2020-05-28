export const initialState = {
    email: '',
    submitted: false,
};

export default function reducer(state, {type, payload}) {
    switch (type) {
        case 'change':
            const {name, value} = payload;
            return {
                ...state,
                [name]: value,
            }
        case 'reset':
            return {...initialState};
        default:
            return state;
    }
}