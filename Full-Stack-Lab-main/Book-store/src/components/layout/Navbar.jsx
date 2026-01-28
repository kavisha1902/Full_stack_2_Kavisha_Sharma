import { AppBar, Toolbar, Button, Badge, TextField, InputAdornment } from "@mui/material";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShoppingCart, Favorite, Search } from "@mui/icons-material";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

export default function Navbar() {
  const { searchTerm, setSearchTerm } = useContext(StoreContext);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#F5F1ED", color: "inherit", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
      <Container>
        <Toolbar className="d-flex justify-content-between">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.25rem", fontWeight: 400, letterSpacing: "1.1px", lineHeight: 1.1 }}>
              <span style={{ color: "#6B5344", opacity: 1 }}>Leaf</span>
              <span style={{ color: "#8B7F73", marginLeft: "0.4em", opacity: 0.85 }}>& Lore</span>
            </div>
          </Link>

          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <TextField
              size="small"
              placeholder="Search books, authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ width: 520, maxWidth: '60%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: '#8B9E7A' }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="d-flex gap-3">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <Button color="inherit" startIcon={<ShoppingCart />} sx={{ color: "#6B5344" }}>
                Cart
              </Button>
            </Link>
            <Link to="/wishlist" style={{ textDecoration: "none" }}>
              <Button color="inherit" startIcon={<Favorite />} sx={{ color: "#6B5344" }}>
                Wishlist
              </Button>
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
