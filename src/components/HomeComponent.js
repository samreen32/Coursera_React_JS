import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';


function Home(props) {
  return(
    <div className="container">
        <div className="row align-items-start">
            <div className="col-12 col-md m-1">
                <RenderCard item={props.dish} />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.promotion} />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.leader} />
            </div>
        </div>
    </div>
  );
}


//method 
function RenderCard({item}) {
  return(
      <Card>
          <CardImg src={item.image} alt={item.name} />
          <CardBody>
          <CardTitle>{item.name}</CardTitle>
        {/* As designation is only present for leaders so we are apply JSX here if designation is not null then shows the card subtitle as designation otherwise show null. */}
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }  
          <CardText>{item.description}</CardText>
          </CardBody>
      </Card>
  );
}


export default Home;   