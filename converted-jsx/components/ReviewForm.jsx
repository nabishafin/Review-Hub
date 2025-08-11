import React from 'react';
import { Edit, ShoppingBag, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ReviewForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  editingId,
  cancelEdit,
  showAlert
}) => {
  return (
    <section id="review-form" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {showAlert && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertDescription className="text-black">
              Please fill in all fields before submitting your review.
            </AlertDescription>
          </Alert>
        )}

        <Card className="shadow-2xl border border-slate-200 overflow-hidden">
          <CardHeader className="bg-red-50 border-b border-slate-200">
            <CardTitle className="flex items-center gap-3 text-2xl text-black">
              {editingId ? (
                <>
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Edit className="w-6 h-6 text-black" />
                  </div>
                  Edit Your Review
                </>
              ) : (
                <>
                  <div className="p-2 bg-red-600">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  Share Your Experience
                </>
              )}
            </CardTitle>
            <CardDescription className="text-black text-lg">
              {editingId
                ? 'Update your review details to reflect your latest experience'
                : 'Help fellow shoppers by sharing your honest shopping experience and insights'}
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-3">
                    Shop Name <span className="text-black">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., Amazon, eBay, Shopify Store..."
                    value={formData.shopName}
                    onChange={(e) => handleInputChange('shopName', e.target.value)}
                    className="w-full p-2 border-slate-300 focus:border-red-600 focus:ring-red-600 h-12 text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-3">
                    Overall Rating <span className="text-black">*</span>
                  </label>
                  <Select
                    value={formData.rating}
                    onValueChange={(value) => handleInputChange('rating', value)}
                  >
                    <SelectTrigger className="w-full border-slate-300 focus:border-red-600 focus:ring-red-600 h-12 text-lg">
                      <SelectValue placeholder="Rate your experience" />
                    </SelectTrigger>
                    <SelectContent className='bg-slate-300 p-2'>
                      <SelectItem value="5" className="text-lg py-3">
                        <div className="flex items-center space-x-2">
                          <span>⭐⭐⭐⭐⭐</span>
                          <span>Excellent (5 stars)</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="4" className="text-lg py-3">
                        <div className="flex items-center space-x-2">
                          <span>⭐⭐⭐⭐</span>
                          <span>Good (4 stars)</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="3" className="text-lg py-3">
                        <div className="flex items-center space-x-2">
                          <span>⭐⭐⭐</span>
                          <span>Average (3 stars)</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="2" className="text-lg py-3">
                        <div className="flex items-center space-x-2">
                          <span>⭐⭐</span>
                          <span>Poor (2 stars)</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="1" className="text-lg py-3">
                        <div className="flex items-center space-x-2">
                          <span>⭐</span>
                          <span>Terrible (1 star)</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-3">
                  Detailed Review <span className="text-black">*</span>
                </label>
                <Textarea
                  placeholder="Share comprehensive details about your shopping experience including product quality, delivery speed, customer service, packaging, value for money, and any other relevant aspects that would help fellow shoppers..."
                  value={formData.reviewText}
                  onChange={(e) => handleInputChange('reviewText', e.target.value)}
                  className="w-full min-h-[150px] resize-none border-slate-300 focus:border-red-600 focus:ring-red-600 text-lg"
                />
                <div className="text-sm text-black mt-2">
                  {formData.reviewText.length}/500 characters (minimum 50 characters recommended)
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h4 className="font-semibold text-black mb-3 flex items-center">
                  <Star className="w-5 h-5 text-black mr-2" />
                  Review Guidelines
                </h4>
                <ul className="text-sm text-black space-y-2">
                  <li>• Be honest and fair in your assessment</li>
                  <li>• Include specific details about your experience</li>
                  <li>• Focus on factual information rather than emotions</li>
                  <li>• Mention both positive and negative aspects</li>
                  <li>• Help other shoppers make informed decisions</li>
                </ul>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleSubmit}
                  className="flex-1 bg-black hover:bg-gray-900 text-red-100 h-12 text-lg font-medium"
                >
                  {editingId ? 'Update Review' : 'Publish Review'}
                </Button>
                {editingId && (
                  <Button
                    variant="outline"
                    onClick={cancelEdit}
                    className="px-8 border-red-600 text-black hover:bg-red-100 h-12 text-lg"
                  >
                    Cancel
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReviewForm;