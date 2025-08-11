import React, { useState, useEffect, useRef } from 'react';
import { Star, Edit, Trash2, Search, ShoppingBag, Filter, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const ReviewsSection = ({
  reviews = [],
  searchTerm = '',
  setSearchTerm = () => { },
  ratingFilter = null,
  handleRatingFilter = () => { },
  handleEdit,
  handleDelete,
  renderStars
}) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef(null);

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.shopName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = ratingFilter ? review.rating === ratingFilter : true;
    return matchesSearch && matchesRating;
  });

  const getRecentReviews = () => {
    return [...reviews]
      .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
      .slice(0, 3);
  };

  const getTopRatedShops = () => {
    const shopRatings = {};
    reviews.forEach(review => {
      if (!shopRatings[review.shopName]) {
        shopRatings[review.shopName] = { total: 0, count: 0 };
      }
      shopRatings[review.shopName].total += review.rating;
      shopRatings[review.shopName].count += 1;
    });

    return Object.entries(shopRatings)
      .map(([shop, data]) => ({
        shop,
        average: (data.total / data.count).toFixed(1),
        count: data.count
      }))
      .sort((a, b) => b.average - a.average)
      .slice(0, 5);
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6 select-none">
            <TrendingUp className="w-4 h-4" />
            <span>Community Reviews</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">
            What Our Community{' '}
            <span className="block mt-2 bg-red-600 py-2 bg-clip-text text-transparent">
              Is Saying
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover authentic shopping experiences shared by our verified community members
          </p>
        </div>

        {reviews.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="bg-gradient-to-br from-red-50 to-purple-50 p-6 rounded-xl border border-red-100 shadow-sm flex flex-col items-center">
                <div className="text-4xl font-extrabold text-red-600 mb-1">{reviews.length}</div>
                <div className="text-sm font-medium text-slate-600 uppercase tracking-wider">Total Reviews</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 shadow-sm flex flex-col items-center">
                <div className="text-4xl font-extrabold text-green-600 mb-1">
                  {(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)}★
                </div>
                <div className="text-sm font-medium text-slate-600 uppercase tracking-wider">Average Rating</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-sm flex flex-col items-center">
                <div className="text-4xl font-extrabold text-blue-600 mb-1">
                  {new Set(reviews.map(r => r.shopName)).size}
                </div>
                <div className="text-sm font-medium text-slate-600 uppercase tracking-wider">Unique Shops</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 shadow-sm flex flex-col items-center">
                <div className="text-4xl font-extrabold text-purple-600 mb-1">98%</div>
                <div className="text-sm font-medium text-slate-600 uppercase tracking-wider">Verified Reviews</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="relative flex-1 max-w-md mx-auto sm:mx-0">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                <Input
                  type="search"
                  placeholder="Search by shop name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 border-slate-300 focus:border-red-600 focus:ring-red-600 text-lg rounded-lg"
                />
              </div>

              <div className="relative" ref={filterRef}>
                <Button
                  variant="outline"
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="border-slate-300 hover:border-red-500 hover:text-red-600 rounded-lg shadow-sm flex items-center gap-2 px-4 py-2 text-sm font-semibold"
                  aria-haspopup="true"
                  aria-expanded={filterOpen}
                >
                  <Filter className="w-5 h-5" />
                  {ratingFilter ? `Filter: ${ratingFilter}★` : 'Filter by Rating'}
                </Button>
                {filterOpen && (
                  <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div className="py-1">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <button
                          key={rating}
                          onClick={() => {
                            handleRatingFilter(rating);
                            setFilterOpen(false);
                          }}
                          className={`block w-full px-4 py-2 text-left text-sm ${ratingFilter === rating ? 'bg-red-50 text-red-700' : 'text-gray-700'}`}
                        >
                          {Array(rating).fill('⭐').join('')} ({rating} stars)
                        </button>
                      ))}
                      <button
                        onClick={() => {
                          handleRatingFilter(null);
                          setFilterOpen(false);
                        }}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 border-t border-gray-100"
                      >
                        Clear Filter
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            {filteredReviews.length > 0 ? (
              filteredReviews.map((review) => (
                <Card
                  key={review.id}
                  className="border border-slate-200 hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 rounded-xl"
                >
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-5 mb-4">
                          <div className="w-14 h-14 bg-gradient-to-r from-red-600 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                            <ShoppingBag className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">
                              {review.shopName}
                            </h3>
                            <div className="flex items-center gap-4">
                              <div className="flex">{renderStars(review.rating)}</div>
                              <Badge
                                variant="secondary"
                                className="bg-gradient-to-r from-red-100 to-purple-100 text-red-700 border-red-200 rounded-full px-3 py-1 font-semibold text-sm select-none"
                              >
                                {review.rating}/5
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(review)}
                          className="h-10 w-10 p-0 border-slate-300 hover:border-red-400 hover:text-red-700 hover:bg-red-50 rounded-md transition"
                          title="Edit Review"
                        >
                          <Edit className="w-5 h-5" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(review.id)}
                          className="h-10 w-10 p-0 border-slate-300 hover:border-red-400 hover:text-red-700 hover:bg-red-50 rounded-md transition"
                          title="Delete Review"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>

                    <p className="text-slate-700 mb-6 leading-relaxed text-lg whitespace-pre-line">
                      {review.reviewText}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-sm text-slate-500">
                      <p>Reviewed on {new Date(review.dateTime).toLocaleDateString()}</p>
                      <Badge
                        variant="outline"
                        className="text-green-600 border-green-300 rounded-full px-2 py-1 font-semibold select-none"
                      >
                        ✓ Verified Purchase
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : reviews.length > 0 ? (
              <div className="text-center py-16 bg-slate-50 rounded-2xl shadow-inner">
                <Search className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                  No reviews found
                </h3>
                <p className="text-slate-500 mb-6 text-lg max-w-md mx-auto">
                  {searchTerm
                    ? `No reviews match "${searchTerm}"${ratingFilter ? ` with ${ratingFilter}★ rating` : ''}`
                    : `No reviews with ${ratingFilter}★ rating found`}
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    handleRatingFilter(null);
                  }}
                  className="border-slate-300 hover:border-red-500 hover:text-red-600 rounded-lg px-6 py-2 font-semibold"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="text-center py-20 bg-gradient-to-br from-slate-50 to-red-50 rounded-2xl shadow-inner">
                <ShoppingBag className="w-20 h-20 text-slate-400 mx-auto mb-6" />
                <h3 className="text-2xl font-extrabold text-slate-700 mb-4">
                  No Reviews Yet
                </h3>
                <p className="text-slate-500 mb-8 text-lg max-w-md mx-auto">
                  Be the first to share your online shopping experience and help build our community!
                </p>
                <Button
                  onClick={() => document.querySelector('#review-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-lg shadow-md transition"
                >
                  Write First Review
                </Button>
              </div>
            )}
          </div>

          <aside className="space-y-8 mt-10 lg:mt-0">
            {reviews.length > 0 && (
              <Card className="border border-slate-200 rounded-xl shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <TrendingUp className="w-6 h-6 text-red-600 mr-3" />
                    Recent Reviews
                  </h3>
                  <div className="space-y-5">
                    {getRecentReviews().map((review) => (
                      <div
                        key={review.id}
                        className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
                      >
                        <div className="font-semibold text-slate-900">{review.shopName}</div>
                        <div className="flex items-center mt-1">
                          {renderStars(review.rating)}
                          <span className="ml-2 text-sm text-slate-500">{review.rating}/5</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {reviews.length > 0 && (
              <Card className="border border-slate-200 rounded-xl shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <Star className="w-6 h-6 text-yellow-500 mr-3" />
                    Top Rated Shops
                  </h3>
                  <div className="space-y-4">
                    {getTopRatedShops().map((shop, index) => (
                      <div
                        key={shop.shop}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold select-none ${index === 0
                              ? 'bg-yellow-100 text-yellow-600'
                              : index === 1
                                ? 'bg-slate-100 text-slate-600'
                                : index === 2
                                  ? 'bg-orange-100 text-orange-600'
                                  : 'bg-slate-50 text-slate-500'
                              }`}
                          >
                            {index + 1}
                          </div>
                          <span className="font-semibold text-slate-900">
                            {shop.shop}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-red-600 text-lg">
                            {shop.average}★
                          </div>
                          <div className="text-xs text-slate-500">{shop.count} reviews</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
