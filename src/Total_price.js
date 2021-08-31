//import './itemsData.js'

function TotalPrice(props) {
    const itemsData = props.itemsData;
  
    const itemPrice = [];
  
    for(let i = 0; i < itemsData.length; i++) {
      const item = itemsData[i];
  
      itemPrice.push(
        <Item title={Item.title} message={Item.message} />
      )
    }
    <TotalPrice item={itemData} />

    return (
      <div>
        {itemPrice * quantity}
      </div>
    );
  }
  console.log('TotalPrice');
  
  export default TotalPrice;