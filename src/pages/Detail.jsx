import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/todos.js";

const Detail = () => {
  //  params를 통해 해당 아이디 획득
  const params = useParams()
  console.log(params)

  // 데이터를 불러오기위해 스토어에 저장된 값 가져옴
  const data = useSelector((state) => {
    return state.todos
  })
  console.log("data", data)
  // 데이터를 불러오기위해 파라미터의 id와 스토어에 저장된 todo의 id 비교하여 일치하는 todo 객체 찾아 변수에 담기
  const todo = data.todos.find((e) =>  String(e.id) === params.id)
  const navigate = useNavigate();

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>ID :{todo.id}</div>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </StButton>
          </StDialogHeader>
          <StTitle>{todo.title}</StTitle>
          <StBody>{todo.body}</StBody>
        </div>
      </StDialog>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
