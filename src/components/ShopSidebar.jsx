function ShopSidebar({ category, setCategory }) {
  return (
    <aside className="border rounded-2xl p-6 h-fit sticky top-28">

      <h2 className="font-black text-2xl mb-8">
        Categories
      </h2>

      <div className="space-y-4">

        <button
          onClick={() => setCategory("all")}
          className={`w-full text-left ${
            category === "all"
              ? "text-[#4CAF50] font-bold"
              : ""
          }`}
        >
          All Jerseys
        </button>

        <button
          onClick={() => setCategory("club")}
          className={`w-full text-left ${
            category === "club"
              ? "text-[#4CAF50] font-bold"
              : ""
          }`}
        >
          Clubs
        </button>

        <button
          onClick={() => setCategory("international")}
          className={`w-full text-left ${
            category === "international"
              ? "text-[#4CAF50] font-bold"
              : ""
          }`}
        >
          International
        </button>

        <button
          onClick={() => setCategory("retro")}
          className={`w-full text-left ${
            category === "retro"
              ? "text-[#4CAF50] font-bold"
              : ""
          }`}
        >
          Retro
        </button>

      </div>

    </aside>
  );
}

export default ShopSidebar;