// 추가된 코드 👇 - 액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE";


// 추가된 코드 👇 - Action Creator를 만들어 줍니다. 
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

const initialState={
    number:0,
};

const counter=(state=initialState,action)=>{
    console.log(action);
    switch(action.type){
        case PLUS_ONE:
            return {number:state.number +1,};
        case MINUS_ONE:
            return {number:state.number -1,};
        default:
            return state;
    }
};

export default counter;