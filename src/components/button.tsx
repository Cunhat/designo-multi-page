import { useState } from "react";

export const Button: React.FC<{}> = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className="p-2 bg-slate-500" onClick={() => setCount(count + 1)}>
        Press Me
      </button>
      {count}
    </div>
  );
};

//export default Button;
