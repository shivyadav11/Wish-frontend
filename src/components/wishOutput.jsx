export default function WishOutput({ wish, loading }) {
  if (loading) {
    return <p className="text-center mt-4">Generating wish...</p>;
  }

  if (!wish) return null;

  return (
    <div className="mt-4 p-3 bg-gray-100 rounded">
      <p className="text-center">{wish}</p>
      <button
        className="mt-2 text-sm text-blue-600"
        onClick={() => navigator.clipboard.writeText(wish)}
      >
        Copy Wish 📋
      </button>
    </div>
  );
}
