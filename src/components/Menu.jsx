const Menu = () => {
  return (
    <div className="mx-6">
      <h3 className="font-semibold text-xl text-gray-800 mb-3">
        Find the best food
      </h3>
      <div className="space-x-3">
        <button className="px-2 lg:px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
          All :
        </button>
        <button className="px-2 lg:px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
          Lunch
        </button>
        <button className="px-2 lg:px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
          Breakfast
        </button>
        <button className="px-2 lg:px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
          Dinner
        </button>
      </div>
    </div>
  );
};

export default Menu;
