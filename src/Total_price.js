function TotalPrice(props) {
    const itemsData = props.itemsData;
  
    let totalPrice = 0;
  
    for(let i = 0; i < itemsData.length; i++) {
      const item = itemsData[i];
      totalPrice += item.quantity * item.price;
    }

    return (
      <div>
        {totalPrice}
      </div>
    );
  }
  console.log('TotalPrice');
  
  export default TotalPrice;