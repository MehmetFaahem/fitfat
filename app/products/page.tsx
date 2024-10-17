"use client";

import { motion } from 'framer-motion';
import ProductList from '@/components/ProductList';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Our Products
      </motion.h1>
      <ProductList />
    </div>
  );
}