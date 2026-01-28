import { Container, Row, Col } from "react-bootstrap";
import { Typography, Box, Button } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { books } from "../data/books";
import BookGrid from "../components/books/BookGrid";
import MoodChips from "../components/books/MoodChips";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMood, setSelectedMood] = useState("All Moods");
  const { searchTerm } = useContext(StoreContext);

  const categories = ["All", "Fiction", "Self-Help", "Sci-Fi", "Classic", "Thriller", "Memoir", "Nature"];

  useEffect(() => {
    console.log('Filtering books with:', { selectedCategory, selectedMood, searchTerm });
    let res = books.slice();
    console.log('Initial books count:', res.length);

    // Filter by category
    if (selectedCategory !== "All") {
      res = res.filter(book => book.category === selectedCategory);
      console.log('After category filter:', res.length);
    }

    // Filter by mood
    if (selectedMood !== "All Moods") {
      res = res.filter(book => book.moods.includes(selectedMood));
      console.log('After mood filter:', res.length, 'mood:', selectedMood);
    }

    // Filter by search term
    if (searchTerm && searchTerm.trim() !== "") {
      const q = searchTerm.toLowerCase();
      res = res.filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q));
      console.log('After search filter:', res.length, 'search:', q);
    }

    console.log('Final filtered books:', res);
    setFilteredBooks(res);
  }, [selectedCategory, selectedMood, searchTerm]);

  const handleAddToCart = (book) => {
    setCartItems([...cartItems, book]);
    alert(`${book.title} added to cart!`);
  };

  const handleAddToWishlist = (book) => {
    const isInWishlist = wishlistItems.some(item => item.id === book.id);
    if (isInWishlist) {
      setWishlistItems(wishlistItems.filter(item => item.id !== book.id));
    } else {
      setWishlistItems([...wishlistItems, book]);
    }
  };

  return (
    <Container fluid className="py-4" style={{ backgroundColor: "#F5F1ED" }}>
      {/* Hero Section */}
      <Box className="container-max hero" sx={{ backgroundColor: "#D4C5B0", color: "#6B5344", py: 6, px: 4, borderRadius: 2, mb: 5 }}>
        <div className="hero-inner">
          <div className="hero-left">
            <Typography variant="h2" component="h1" fontWeight={700} sx={{ mb: 2, fontFamily: "'Cormorant Garamond', serif", fontSize: { xs: '36px', md: '56px' }, lineHeight: 1.05 }}>
              Welcome to Leaf & Lore
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95, fontSize: '17px' }}>
              Discover curated books and cozy picks from our indie shelves — warm, thoughtful, and unexpected.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Button variant="contained" size="large" sx={{ bgcolor: '#6B5344', color: 'white', fontWeight: '700', px: 3, '&:hover': { bgcolor: '#8B5F3F' } }}>
                Explore Books
              </Button>
              <Button variant="outlined" size="large" sx={{ borderColor: '#6B5344', color: '#6B5344', fontWeight: '600', px: 3 }}>
                Take a Mood Quiz
              </Button>
            </Box>
          </div>

          <div className="hero-right">
          </div>
        </div>
      </Box>

      {/* Mood Reads Feature */}
      <Container>
        <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
          Mood Reads
        </Typography>
        <MoodChips selectedMood={selectedMood} onMoodChange={setSelectedMood} />

        {/* Showing Label */}
        <Typography variant="body2" sx={{ mb: 3, color: "#6B5344", fontStyle: "italic", opacity: 0.8 }}>
          {selectedMood === "All Moods" ? "Showing: All Books" : `Showing: ${selectedMood} Reads`}
        </Typography>

        {/* Category Filter */}
        <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
          Browse by Category
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mb: 4, overflowX: "auto", pb: 1 }}>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "contained" : "outlined"}
              size="small"
              onClick={() => setSelectedCategory(cat)}
              sx={{ whiteSpace: "nowrap", color: selectedCategory === cat ? "white" : "#6B5344", borderColor: "#A89968", backgroundColor: selectedCategory === cat ? "#6B5344" : "transparent", "&:hover": { backgroundColor: selectedCategory === cat ? "#6B5344" : "#F5E6D3" } }}
            >
              {cat}
            </Button>
          ))}
        </Box>

        {/* Books Grid or Empty State */}
        <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
          {selectedCategory === "All" ? "All Books" : selectedCategory}
        </Typography>
        
        {filteredBooks.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 6, px: 3 }}>
            <Typography variant="h6" sx={{ color: "#6B5344", mb: 2, fontFamily: "'Cormorant Garamond', serif" }}>
              📚 No books found for this mood yet
            </Typography>
            <Typography variant="body2" sx={{ color: "#999", mb: 3 }}>
              Try selecting a different mood or category to discover more reads.
            </Typography>
            <Button 
              variant="outlined" 
              onClick={() => {
                setSelectedMood("All Moods");
                setSelectedCategory("All");
              }}
              sx={{ borderColor: "#6B5344", color: "#6B5344" }}
            >
              Browse All Books
            </Button>
          </Box>
        ) : (
          <BookGrid
            books={filteredBooks}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            wishlistItems={wishlistItems}
          />
        )}

        {/* Stats */}
        <Row className="mt-5 pt-5 border-top">
          <Col md={4} className="text-center mb-4">
            <Typography variant="h4" fontWeight={700} sx={{ color: "#6B5344", fontFamily: "'Cormorant Garamond', serif" }}>
              1000+
            </Typography>
            <Typography variant="body1" className="text-muted">
              Books Available
            </Typography>
          </Col>
          <Col md={4} className="text-center mb-4">
            <Typography variant="h4" fontWeight={700} sx={{ color: "#6B5344", fontFamily: "'Cormorant Garamond', serif" }}>
              50K+
            </Typography>
            <Typography variant="body1" className="text-muted">
              Happy Readers
            </Typography>
          </Col>
          <Col md={4} className="text-center mb-4">
            <Typography variant="h4" fontWeight={700} sx={{ color: "#6B5344", fontFamily: "'Cormorant Garamond', serif" }}>
              4.6/5
            </Typography>
            <Typography variant="body1" className="text-muted">
              Average Rating
            </Typography>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
