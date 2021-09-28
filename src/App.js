import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import "./styles/index.css";
import { actionCreators } from "./state/index";
const App = () => {
  const state = useSelector((state) => state.account);
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  // console.log(state);

  return (
    <div className="">
      <p>{state}</p>
      <p>{userState ? "loggedin" : "not loggedin"}</p>
      {userState ? (
        <button
          className=" bg-yellow-500 ml-4 px-5 cursor-pointer active:scale-50"
          onClick={() => dispatch({ type: "logout" })}
        >
          logout
        </button>
      ) : (
        <button
          className=" bg-yellow-500 ml-4 px-5 cursor-pointer active:scale-50"
          onClick={() => dispatch({ type: "login" })}
        >
          login
        </button>
      )}

      <button
        className=" bg-yellow-500 ml-4 px-5 cursor-pointer active:scale-50"
        onClick={() => depositMoney(1000)}
      >
        +
      </button>
      <button
        className=" bg-yellow-500 ml-4 px-5 cursor-pointer active:scale-50"
        onClick={() => withdrawMoney(50)}
      >
        -
      </button>
    </div>
  );
};

export default App;
