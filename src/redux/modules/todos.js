// Action value
const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

// Action Creator
// Todo를 추가하는 action creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// Todo를 지우는 action creator
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// Todo를 isDone를 변경하는 action creator
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

// 상세 페이지에서 특정 Todo만 조회하는 action creator
export const getTodoByID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

// initial state
const initialState = {
  todos: [
    {
      id:  1,
      title: "리액트",
      body: "리액트를 배워봅시다",
      isDone: false,
    }
  ]
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // 기존의 아이템이 사라진 이유는 기존의 아이템을 유지해 주면서 새로운 아이템을 추가해야 하는데
      // 이전에는 기존의 아이템을 유지해주지 않아서 사라졌음
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
      // 삭제기능 재설계
    case DELETE_TODO:{
      return{
        todos: state.todos.filter((item) => item.id !== action.payload.id)
      } 
    }

    case TOGGLE_STATUS_TODO:
      console.log(state)
      return {
       todos: state.todos.map((item) => item.id === action.payload.id
       ? {...item, isDone: !item.isDone}
       :item)
      };

    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default todos;
