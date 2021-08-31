import Item from "./Item";
import './ItemList.css';

function ItemList(props) {
  const itemData = props.itemData;

  const itemElements = [];

  for (let i = 0; i < itemData.length; i++) {
    const item = itemData[i];

    itemElements.push(<Item name={item.name} quantity={item.quantity} price={item.price} />);
  }

  return (
    // <table>
    //   <tr>
    //     <th>Name</th>
    //     <th>Quantity</th>
    //     <th>Unit Price</th>
    //   </tr>
      <div>{itemElements}</div>
    //</table>
  );
}

export default ItemList;
