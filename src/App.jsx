import { useState } from "react";
import WishForm from "./components/wishForm";
import WishOutput from "./components/wishOutput";
import "./App.css";

export default function App() {
  const [wish, setWish] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
<h1>
   <span className="blink-text">🎊  HAPPY NEW YEAR 🎊</span>
 </h1>

        <WishForm setWish={setWish} setLoading={setLoading} />
        <WishOutput wish={wish} loading={loading} />
      </div>
    </div>
  );
}
