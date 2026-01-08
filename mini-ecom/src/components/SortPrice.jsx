function SortPrice({ setSort }) { //props n setSort function
    //SortPrice gedeg functional component
    //{ setSort } neriin 1 prop awna
    //setSort bol sort state iig shine utgaar shinechleh function
    //sort state n App.jsx file dotor bga
  return (
    <select onChange={(e) => setSort(e.target.value)}>
      <option value="">Sort</option>
      <option value="asc">Price ↑</option>
      <option value="desc">Price ↓</option>
    </select>
  );
}

export default SortPrice;
