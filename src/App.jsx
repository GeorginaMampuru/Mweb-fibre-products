import React, { useState, useEffect } from 'react';
import ProviderFilter from './components/ProviderFilter';
import PriceRangeFilter from './components/PriceRangeFilter';
import CampaignFilter from './components/CampaignFilter';
import ProductList from './components/ProductList';
import { getFibreProducts, getFibreCampaigns } from './services/api';

const App = () => {
  const [products, setProducts] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [selectedProviders, setSelectedProviders] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedCampaignCode, setSelectedCampaignCode] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getFibreProducts();
        setProducts(productsData);
        setFilteredProducts(productsData);

        const campaignsData = await getFibreCampaigns();
        setCampaigns(campaignsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleProviderChange = (providerId) => {
    const updatedProviders = selectedProviders.includes(providerId)
      ? selectedProviders.filter(id => id !== providerId)
      : [...selectedProviders, providerId];
    setSelectedProviders(updatedProviders);
    filterProducts(updatedProviders, minPrice, maxPrice, selectedCampaignCode);
  };

  const handlePriceFilterChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
    filterProducts(selectedProviders, min, max, selectedCampaignCode);
  };

  const handleCampaignChange = (campaignCode) => {
    setSelectedCampaignCode(campaignCode);
    filterProducts(selectedProviders, minPrice, maxPrice, campaignCode);
  };

  const filterProducts = (providers, min, max, campaign) => {
    const filtered = products.filter(product =>
      providers.includes(product.providerId) &&
      product.price >= min &&
      product.price <= max &&
      (campaign ? product.campaignCode === campaign : true)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container">
      <ProviderFilter
        providers={products.map(product => ({
          id: product.providerId,
          name: product.provider,
          logo: `${product.providerId}.png`,
        }))}
        onFilterChange={handleProviderChange}
        selectedProviders={selectedProviders}
      />
      <PriceRangeFilter onFilterChange={handlePriceFilterChange} />
      <CampaignFilter campaigns={campaigns} onFilterChange={handleCampaignChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
