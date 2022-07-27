import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

/*
constructor(props) {
    super(props);
    this.state = {
        selectedDish: null,
    };
    console.log("Dishdetail constructor invoked");
}

//lifecycle methods.
componentDidMount(){
  console.log("Dishdetail componentDidMount invoked");
}
componentDidUpdate(){
  console.log("Dishdetail componentDidUpdate invoked");
}
*/

//function
function RenderDish({dish}) //Passing dish as props in {} for converting class base to function base.
{
  if (dish != null){
      return(
        <div className="col-12 col-md-5 m-1">
          <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
          </Card>
        </div>
      );
      }
  else{
    return(
        <div></div>
    );
  }
}


//comment function
function RenderComments({comments}){
  if (comments === null) {
    return (<div></div>);
  }
  const com = comments.map((comment) => {
    return (
      <ul className="list-unstyled" key={comment.id}>
      <li>
        <p>{comment.comment}</p>
        <p>
          -- {comment.author}, {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(comment.date))}
        </p>
      </li>
      </ul>
    );
  });
  return (
    <div className="col-12 col-md-5 m-1">
      <h4> Comments </h4>
      {com}
    </div>
  );
}

 
const Dishdetail = (props) => {
  console.log("Dishdetail render method invoked");

    const dish = props.dish;
    if (dish === null) {
      return (<div></div>);
    }

      return (
        <div className="container">
          <div className="row">
              <RenderDish dish={props.dish}/>
              <RenderComments comments={props.dish.comments}/>
          </div>
        </div>
      );
    }

export default Dishdetail;