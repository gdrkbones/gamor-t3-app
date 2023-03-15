import { createContext } from "react";

type ScrollContextType = {
  scroll: boolean;
  setScroll: (scroll: boolean) => void;
};

const ScrollContext = createContext<ScrollContextType>({
  scroll: true,
  setScroll: () => {},
});

export default ScrollContext;
