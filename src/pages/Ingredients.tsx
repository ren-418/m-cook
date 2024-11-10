import React from 'react';
import MainHeader from '../components/ui/header/mainHeader/MainHeader';
import NavBar from "../components/ui/footer/navBar/NavBar";
import SeachBar from "../components/common/searchBar/searchBar";
import OrderByItem from "../components/orderByItem/OrderByItem";

function Ingredients() {
  return (
      <div className="flex flex-col min-h-screen">
        <div>
          <MainHeader productsInCart={10} text={"Ingredients"} />
        </div>
        <div className="flex-grow px-[16px] pt-[16px]">
            <SeachBar isSelector={false} placeholder={"Search products"}/>
            <OrderByItem criteria={''} index={0} onClick={function(): void {
                  throw new Error('Function not implemented.');
              } } />
        </div>
        <div>
          <NavBar />
        </div>
      </div>
  );
}

export default Ingredients;