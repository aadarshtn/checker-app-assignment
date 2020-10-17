export default function names(state = [],action) {
    if(action.type == 'ADD'){
        return action.names;
    }
    return state;
}