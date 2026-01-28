import { Row, Col } from "react-bootstrap";
import BookCard from "./BookCard";

export default function BookGrid({ books, onAddToCart, onAddToWishlist, wishlistItems }) {
  return (
    <Row className="g-4">
      {books.map((book) => (
        <Col key={book.id} xs={12} sm={6} md={4} lg={3}>
          <BookCard
            book={book}
            onAddToCart={onAddToCart}
            onAddToWishlist={onAddToWishlist}
            isInWishlist={wishlistItems.some(item => item.id === book.id)}
          />
        </Col>
      ))}
    </Row>
  );
}
