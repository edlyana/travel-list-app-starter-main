
export default function Stats({items}) {
    const totalItem = items.length;
    const totalPacked = items.filter((item) => item.packed).length;   // Call for items array, to count the no. of item that has packed as true
    const compRate = totalItem > 0 ? Math.round((totalPacked/totalItem)*100):0;
    
    // Display status 
    return (
      <footer className="stats">
        {/* <em>You have {totalItem} items in the list. You already packed {totalPacked} ({compRate}%).</em> */}
        <em>{compRate===100 ? "Yippee! You're ready for your trip!" : `You have ${totalItem} items in the list. You already packed ${totalPacked} (${compRate}%).`}</em>
      </footer>
    );
  }