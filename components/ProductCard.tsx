"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full flex flex-col">
        <CardContent className="p-4 flex-grow">
          <Link href={`/products/${product._id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          </Link>
          <p className="text-gray-600 mb-2">{product.description.substring(0, 100)}...</p>
          <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Add to Cart</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;