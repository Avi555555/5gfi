import { Card, ListGroup } from 'react-bootstrap';

export const CustomCard = ({ variant, title, content, Header, className,  links }) =>{
  return (
    <Card
      bg={variant.toLowerCase()}
      text={variant.toLowerCase() === 'light' ? 'dark' : 'dark'}
      style={{ width: '100%' }}
      className=""
      Header={""}
      links={[
        { href: "#link1", text: "Link 1" },
        { href: "#link2", text: "Link 2" }
      ]}
    >
      {/* <Card.Header>{Header}</Card.Header> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        {/* <Card.link>{link}</Card.link> */}
      </Card.Body>
      <Card.Body>
      {Array.isArray(links) && links.length > 0 && (
      <Card.Body>
        {links.map((link, index) => (
          <Card.Link className='' href={link.href} key={index}>
            {link.text}
          </Card.Link>
        ))}
      </Card.Body>
    )}
      </Card.Body>
       
     
    </Card>
  );
}

const PlansCard = ({ 
  title, 
  imageSrc, 
  text, 
  listItems, 
  links, 
  className=""
}) => {
  return (
    <Card className={className}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title className='cards-title'>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {listItems.map((item, index) => (
          <ListGroup.Item key={index}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Body>
        {links.map((link, index) => (
          <Card.Link href={link.href} key={index}>
            {link.text}
          </Card.Link>
        ))}
      </Card.Body>
    </Card>
  );
};

export default PlansCard;