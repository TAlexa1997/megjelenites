import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample() {
  return (
    <Card className="text-center">
      <Card.Header>{cardsArr[index].country}</Card.Header>
      <Card.Img variant="top" src="{cardsArr[index].img}" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>{cardsArr[index].text}</Card.Text>
      </Card.Body>
      <Button variant="primary">Foglalás</Button>
    </Card>
  );
}

export default BasicExample;
