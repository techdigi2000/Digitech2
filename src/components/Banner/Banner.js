import React from 'react';

const Banner = ({ type, offer }) => {
  let bgColor, textColor, icon;

  switch (type) {
    case 'sale':
      bgColor = 'bg-red-50';
      textColor = 'text-red-700';
      icon = (
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd" />
        </svg>
      );
      break;
    case 'freeShipping':
      bgColor = 'bg-green-50';
      textColor = 'text-green-700';
      icon = (
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
        </svg>
      );
      break;
    case 'newArrival':
      bgColor = 'bg-blue-50';
      textColor = 'text-blue-700';
      icon = (
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      );
      break;
    default:
      bgColor = 'bg-gray-50';
      textColor = 'text-gray-700';
      icon = (
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      );
  }

  return (
    <div className={`${bgColor} ${textColor} px-6 py-4 rounded-lg shadow-sm mb-6`}>
      <div className="flex items-center">
        {icon}
        <h2 className="text-lg font-semibold">{getBannerTitle(type)}</h2>
      </div>
      <p className="mt-2 text-sm">{getBannerDescription(type, offer)}</p>
    </div>
  );
};

function getBannerTitle(type) {
  switch (type) {
    case 'sale': return 'Limited Time Offer';
    case 'freeShipping': return 'Free Shipping';
    case 'newArrival': return 'New Product Alert';
    default: return 'HP Printers';
  }
}

function getBannerDescription(type, offer) {
  switch (type) {
    case 'sale': return `Save ${offer}% on select HP printers. Don't miss out!`;
    case 'freeShipping': return `Enjoy free shipping on all orders over $${offer}. Shop now!`;
    case 'newArrival': return `Introducing the all-new HP ${offer}. Discover amazing features!`;
    default: return 'Explore our wide range of high-quality HP printers for all your needs.';
  }
}

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Banner type="sale" offer={20} />
      <Banner />
    </div>
  );
}

export default App;
