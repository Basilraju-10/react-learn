import { useContext } from "react";   // <-- Missing import
import CountContext from "../context/CountContext";

export default function useCount() {
    return useContext(CountContext);
}