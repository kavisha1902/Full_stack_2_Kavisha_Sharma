import { Card, Button } from "react-bootstrap";
import { Rating, Box, Chip, IconButton } from "@mui/material";
import { FavoriteBorder, Favorite, Visibility } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import QuickView from "./QuickView";

export default function BookCard({ book, onAddToCart, onAddToWishlist, isInWishlist }) {
  const [inWishlist, setInWishlist] = useState(isInWishlist);
  const [openQuick, setOpenQuick] = useState(false);

  const handleWishlist = (e) => {
    e.preventDefault();
    setInWishlist(!inWishlist);
    onAddToWishlist(book);
  };

  const handleOpenQuick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenQuick(true);
  };

  const handleCloseQuick = () => setOpenQuick(false);

  return (
    <Link to={`/book/${book.id}`} style={{ textDecoration: "none" }}>
      <Card className="h-100 shadow-sm book-card" style={{ transition: "transform 0.3s" }}>
        <div className="book-img-wrap">
           <img src={book.image} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

          <div className="quick-view">
            <Button size="small" variant="outlined" startIcon={<Visibility />} onClick={handleOpenQuick}>
              Quick View
            </Button>
          </div>

          <IconButton
            onClick={handleWishlist}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              bgcolor: "rgba(255, 255, 255, 0.9)",
              "&:hover": { bgcolor: "white" }
            }}
          >
            {inWishlist ? (
              <Favorite sx={{ color: "red" }} />
            ) : (
              <FavoriteBorder />
            )}
          </IconButton>
        </div>

        <Card.Body className="d-flex flex-column">
          <Card.Title className="mb-1 clamp-2" style={{ fontSize: "1rem" }}>
            {book.title}
          </Card.Title>
          <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
            {book.author}
          </Card.Text>

          <Box sx={{ my: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Rating value={book.rating} readOnly size="small" />
            <span style={{ fontSize: "0.8rem", color: '#6b6b6b' }}>
              ({Math.floor(book.rating * 42) + 12})
            </span>
          </Box>

          <Box sx={{ mb: 2, display: "flex", gap: 0.5, flexWrap: "wrap" }}>
            {book.moods.map((m) => (
              <Chip
                key={m}
                label={m}
                size="small"
                variant="outlined"
                sx={{ fontSize: "0.75rem" }}
              />
            ))}
          </Box>

          <div className="mt-auto">
            <div style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "10px" }}>
              ${book.price}
            </div>
            <Button
              variant="contained"
              size="sm"
              className="w-100"
              onClick={(e) => {
                e.preventDefault();
                onAddToCart(book);
              }}
              style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}
            >
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
      <QuickView open={openQuick} onClose={handleCloseQuick} book={book} onAddToCart={onAddToCart} />
    </Link>
  );
}
