const GET_HOMES = "GET_HOMES";

let initialState = {
    cardsListPage: [],
        cardsListPagesecond: []
};

const homeReducer = (state = initialState, action) => {
    switch(action.type){
                    case GET_HOMES: {
                        return {
                            ...state,
                            cardsListPage: action.homes,
                            cardsListPagesecond: action.materials
                        };
                    }
            default : 
                return state;
    }
};

export const getHomesActionCreater = (homes, materials) => ({
    type: GET_HOMES, 
    homes,
    materials
})
export default homeReducer;