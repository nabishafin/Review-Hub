import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ReviewForm from './components/ReviewForm';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [reviews, setReviews] = useState(() => {
    try {
      const savedReviews = localStorage.getItem('shopReviews');
      return savedReviews ? JSON.parse(savedReviews) : [];
    } catch (error) {
      console.error('Failed to parse reviews from localStorage', error);
      return [];
    }
  });

  const [formData, setFormData] = useState({
    shopName: '',
    reviewText: '',
    rating: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [ratingFilter, setRatingFilter] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('shopReviews', JSON.stringify(reviews));
    } catch (error) {
      console.error('Failed to save reviews to localStorage', error);
    }
  }, [reviews]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRatingFilter = (rating) => {
    setRatingFilter(rating === ratingFilter ? null : rating);
  };

  const handleSubmit = () => {
    if (!formData.shopName.trim() || !formData.reviewText.trim() || !formData.rating) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }

    const newReview = {
      id: editingId || Date.now(),
      shopName: formData.shopName.trim(),
      reviewText: formData.reviewText.trim(),
      rating: parseInt(formData.rating, 10),
      dateTime: editingId
        ? reviews.find(r => r.id === editingId)?.dateTime
        : new Date().toISOString(),
    };

    if (editingId) {
      setReviews(prev => prev.map(review => (review.id === editingId ? newReview : review)));
      setEditingId(null);
    } else {
      setReviews(prev => [newReview, ...prev]);
    }

    setFormData({ shopName: '', reviewText: '', rating: '' });
  };

  const handleEdit = (review) => {
    setFormData({
      shopName: review.shopName,
      reviewText: review.reviewText,
      rating: review.rating.toString(),
    });
    setEditingId(review.id);
    document.querySelector('#review-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      setReviews(prev => prev.filter(review => review.id !== id));
    }
  };

  const cancelEdit = () => {
    setFormData({ shopName: '', reviewText: '', rating: '' });
    setEditingId(null);
    setShowAlert(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating
          ? 'fill-yellow-400 text-yellow-400'
          : 'text-slate-300'
          }`}
        aria-hidden="true"
      />
    ));
  };

  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <HeroSection reviewsCount={reviews.length} />

      <FeaturesSection />

      <ReviewForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        editingId={editingId}
        cancelEdit={cancelEdit}
        showAlert={showAlert}
      />

      <ReviewsSection
        reviews={reviews}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        ratingFilter={ratingFilter}
        handleRatingFilter={handleRatingFilter}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        renderStars={renderStars}
      />

      <Footer reviews={reviews} averageRating={averageRating} />
    </div>
  );
}

export default App;