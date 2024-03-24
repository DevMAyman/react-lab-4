import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ResCard({product}) {
  return (
    <Link to={`/product-details/${product.id}`} className='col-md-3 mb-5 d-flex'>
    <div className='d-flex'>
    <Card className='me-1 ms-1'>
      <Card.Img variant="top" src={`${product.thumbnail}`} />
      <Card.Body className='d-flex flex-column align-items-center justify-content-between'>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <div className="flex w-100 gap-2 align-items-center justify-content-around">
        <Button variant="success">Buy now</Button>
        <Button variant="success">Details</Button>     
        </div>
      </Card.Body>
    </Card>
    </div>
    </Link>
  );
}

export default ResCard;