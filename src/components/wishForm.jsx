import { useState } from "react";
import axios from "axios";

export default function WishForm({ setWish, setLoading }) {
  const [form, setForm] = useState({
    name: "",
    relationship: "Friend",
    tone: "Motivational",
    language: "English",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateWish = async () => {
    setLoading(true);
    setWish("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/wish/generate",
        form
      );
      setWish(res.data.wish);
    } catch (err) {
      alert("Failed to generate wish");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <input
        name="name"
        placeholder="Enter name"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />

      <select name="relationship" className="w-full border p-2 rounded" onChange={handleChange}>
        <option>Friend</option>
        <option>Family</option>
        <option>Teacher</option>
        <option>Boss</option>
      </select>

      <select name="tone" className="w-full border p-2 rounded" onChange={handleChange}>
        <option>Motivational</option>
        <option>Funny</option>
        <option>Emotional</option>
        <option>Professional</option>
      </select>

      <select name="language" className="w-full border p-2 rounded" onChange={handleChange}>
        <option>English</option>
        <option>Hindi</option>
        <option>Hinglish</option>
      </select>

      <button
        onClick={generateWish}
        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
      >
        Generate Wish 🎊
      </button>
    </div>
  );
}
