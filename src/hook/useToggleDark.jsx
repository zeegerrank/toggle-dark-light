import { useEffect, useState } from "react";

function useToggleDark(initialState = false) {
  const [dark, setDark] = useState(initialState);
  console.log("🚀 ~ useToggleDark ~ dark:", dark);

  const toggle = () => {
    setDark((dark) => !dark);
  };

  useEffect(() => {
    if (dark === true) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [dark]);

  return { dark, toggle };
}

export default useToggleDark;
