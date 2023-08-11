import { CDN_URL } from "../utils/contants";

const ItemList = ({ items }) => {
  // console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-b-2 border-gray-400 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 ">
              <span className="font-bold">{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price / 100
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>

            <p className="text xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button className="p-2 mx-16 mt-14 rounded-lg shadow-lg bg-black text-white">
                {" "}
                Add +
              </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId}></img>
            </div>
          </div>
        
      ))}
    </div>
  );
};
export default ItemList;