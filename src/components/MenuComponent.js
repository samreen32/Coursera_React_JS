import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


//function
function RenderMenuItem ({dish, onClick}){
  return(
    <Card>     {/*<Card key={dish.id} onClick={() => onClick(dish.id)}>.......onClick function from MainComponent.js which is passing 'dish.id' as parameter.*/}
      <Link to={`/menu/${dish.id}`} >       {/* /menu/1,2,3,...  dish id will evaluate according */}
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}


  const Menu =(props)=>{
    const menu = props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">   {/* col-12.... use for larger screen sizes occupy column one below the other. col-md-5... medium to small and extra small screen sizes.*/}
          <RenderMenuItem dish={dish}/>   {/*Passing the parameters of function 'RenderMenuItem' */}
        </div>
      );
  });
  
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
            <h3>Menu</h3>
            <hr />
        </div>                
      </div>
      <div className="row">
        {menu}
      </div>
    </div>
  );
}
   
export default Menu;