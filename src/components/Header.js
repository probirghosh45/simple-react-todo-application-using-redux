import React, { useState } from "react";
import { useDispatch } from "react-redux";
import doubleTick from "../../src/images/double-tick.png";
import notes from "../../src/images/notes.png";
import plusImage from "../../src/images/plus.png";
import { added } from "../redux/todos/actions";

const Header = () => {
  const [input, setInput] = useState("");
  console.log(input);
  const dispatch = useDispatch()

  const handleInput = (e) => {
    // console.log(e.target.value)
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(added(input))
    setInput("")
  };

  return (
    <div>
      <form
        class="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleSubmit}
      >
        <img src={notes} class="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handleInput}
        />
        <button
          type="submit"
          class={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul class="flex justify-between my-4 text-xs text-gray-500">
        <li class="flex space-x-1 cursor-pointer">
          <img class="w-4 h-4" src={doubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li class="cursor-pointer">Clear completed</li>
      </ul>
    </div>
  );
};

export default Header;
