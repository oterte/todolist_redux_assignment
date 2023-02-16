import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import nextId from "react-id-generator";
import { addTodo } from "../../../redux/modules/todos.js";

const Form = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.todos
  })
  
  const id = useRef(2)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  

  // const initialState = {
  //   todos: [
  //     {
  //       id: "1",
  //       title: "리액트",
  //       body: "리액트를 배워봅시다",
  //       isDone: false,
  //     }
  //   ]
  // };

  // 추가하기 버튼
  // dispatch를 통해서 state 값이 store로 들어가지 못했던 것 같음
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!title || !body) return;
    dispatch(
      addTodo({
        id:id.current,
        title,
        body,
        isDone:false
      })
    )
    id.current += 1;
    setTitle('');
    setBody('');
  };

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <StFormLabel>내용</StFormLabel>
        <StAddInput
          type="text"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </StInputGroup>
      <StAddButton>추가하기</StAddButton>
    </StAddForm>
  );
};

export default Form;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
