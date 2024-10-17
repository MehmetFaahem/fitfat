"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const res = await fetch('/api/products?featured=true');
      const data = await res.json();
      setFeaturedProducts(data);
    };
    fetchFeaturedProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="h-[60vh] rounded-lg overflow-hidden"
        >
          {[1, 2, 3].map((index) => (
            <SwiperSlide key={index}>
              <div 
                className="w-full h-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(https://source.unsplash.com/random/1600x900?shopping=${index})` }}
              >
                <div className="text-center text-white">
                  <h2 className="text-4xl font-bold mb-4">Summer Collection {index}</h2>
                  <p className="text-xl mb-6">Discover our latest arrivals</p>
                  <Button asChild>
                    <Link href="/products">Shop Now</Link>
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p>On orders over $50</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
            <p>30-day return policy</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p>100% secure checkout</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}