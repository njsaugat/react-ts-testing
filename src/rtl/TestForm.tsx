import React from "react";

const TestForm = () => {
  return (
    <form role="form">
      <div>
        <label htmlFor="username" data-testid="username">
          Username
        </label>
        <input type="text" role="input-username" defaultValue={"user-input"} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default TestForm;
