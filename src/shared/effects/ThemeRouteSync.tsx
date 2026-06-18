import { useEffect } from "react";
// Haza Munguia — always dark, no toggle
export default function ThemeRouteSync() {
    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("theme", "dark");
    }, []);
    return null;
}
