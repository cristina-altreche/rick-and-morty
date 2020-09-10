// Write your Character component here
import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";

const Character = (props) => {
  const { charData } = props;

  return (
    <div className="char-container">
      {charData.map((characters) => {
        return (
          <Card>
            <CardTitle className="front">{characters.name}</CardTitle>
            <CardImg className="front" src={characters.image}></CardImg>

            <Card className="front back">{characters.status}</Card>
          </Card>
        );
      })}
    </div>
  );
};

export default Character;
