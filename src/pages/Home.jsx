import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';


function Home() {
  const onAddToCart = (product) => {
    console.log(`Adding ${product.name} to cart`);
  };

  return (
    <div className="container mx-auto px-0 py-8">
      <h2 className="font-reenie-beanie text-xl font-semibold mb-4 text-center">welcome to aqua beads</h2>
      <p className="font-reenie-beanie text-2xl text-center">discover the best beads!</p>
      <div
        className="home-page w-full h-screen bg-cover bg-center mt-4"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/10835540/pexels-photo-10835540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      ></div>

      <FeaturedProducts onAddToCart={onAddToCart} />
    </div>

  );

}

export default Home;
