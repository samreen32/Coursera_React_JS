import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderMenuItem ({dish, onClick}){
  return(
    <Card key={dish.id} onClick={() => onClick(dish.id)}>     {/* onClick function from MainComponent.js which is passing 'dish.id' as parameter.*/}
      <CardImg width="100%" src={dish.image} alt={dish.name} />
  
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}


  const Menu =(props)=>{
    const menu = props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">   {/* col-12.... use for larger screen sizes occupy column one below the other. col-md-5... medium to small and extra small screen sizes.*/}
          <RenderMenuItem dish={dish} onClick={props.onClick}/>   {/*Passing the parameters of function 'RenderMenuItem' */}
        </div>
      );
  });
  
  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
  
    </div>
  );
}
   
export default Menu;