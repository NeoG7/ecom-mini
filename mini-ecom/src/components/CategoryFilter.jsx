function CategoryFilter({ setCategory }) {
  return (
    <select onChange={(e) => setCategory(e.target.value)}>
      <option value="all">All</option>
      <option value="phone">Phone</option>
      <option value="laptop">Laptop</option>
    </select>
  );
}

export default CategoryFilter;
