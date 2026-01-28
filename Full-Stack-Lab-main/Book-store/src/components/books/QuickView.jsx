import { Modal, Box, Typography, Button } from "@mui/material";

export default function QuickView({ open, onClose, book, onAddToCart }) {
  if (!book) return null;
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', bgcolor: 'background.paper', p: 3, borderRadius: 2, width: 520 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <img src={book.image} alt={book.title} style={{ width: 140, height: 200, objectFit: 'cover', borderRadius: 6 }} />
          <Box>
            <Typography variant="h6" fontWeight={700}>{book.title}</Typography>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>{book.author}</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>{book.description}</Typography>
            <Typography variant="h6" sx={{ color: 'var(--color-primary)', mb: 2 }}>${book.price}</Typography>
            <Button variant="contained" onClick={() => onAddToCart(book)} sx={{ backgroundColor: 'var(--color-primary)' }}>Add to cart</Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
