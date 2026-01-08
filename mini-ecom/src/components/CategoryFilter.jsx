function CategoryFilter({ setCategory }) {  //React component ner CategoryFilter
    //{ setCategory } neriin prop awna, ene prop n function
    //setCategory function n category state iig shine utgaar shinechleh uildel hiine
    //category state n App.jsx file dotor bga
    //category state n yamar angilalaar filter hiih ve gej hadgalna
    //CategoryFilter component n select element haruulna
    //select element n onChange eventtei, event bolon e
    //event n target propertytei, target property n select element iig zaana
    //select element iin value n e.target.value deer bna
    //select element iin value n shine utga songogdohod onChange event ajillana
    //onChange event ajillahaar setCategory function duudagdana, e.target.value iig damjuulj ogno
  return (   //Component delgetsend yu haruulahaa zaana
    <select onChange={(e) => setCategory(e.target.value)}>   //select gedeg elementtei, onChange eventtei
    {/*select element n category songohod ashiglaj baina
    onChange event ajillahaar setCategory function duudagdana, e.target.value iig damjuulj ogno
    e.target.value n select element iin value
    //select element iin dotor option elementuudiig haruulna
    option elementuudiin value n category iin utguud baigaa
    option elementuudiin text n delgetsend haruulah utguud baigaa
    option elementuudiin value n all, phone, laptop
    option elementuudiin text n All, Phone, Laptop
    category state n all bolon utga songogdohod buh angilaluudiig haruulna
    category state n phone bolon utga songogdohod zovhon phone angilaliin baraag haruulna
    category state n laptop bolon utga songogdohod zovhon laptop angilaliin baraag haruulna*/}
      <option value="all">All</option>  //option gedeg elementtei, value n all
      <option value="phone">Phone</option>   //option gedeg elementtei, value n phone 
      <option value="laptop">Laptop</option>   //option gedeg elementtei, value n laptop 
    </select>
  );
}

export default CategoryFilter;
