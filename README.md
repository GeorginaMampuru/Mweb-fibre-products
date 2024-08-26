# Fibre Products Display Application

This application fetches and displays fibre products from various providers. Users can filter products by provider and price range.

## Project Structure
src/
│   ├── components/
│   │   ├── ProviderFilter.jsx
│   │   ├── ProviderIcons.jsx
│   │   ├── ProductList.jsx
│   │   ├── PriceRangeFilter.jsx
│   │   └── ProductCard.jsx
│   ├── services/
│   │   └── api.jsx

## Components

- **ProviderFilter.jsx**: Allows users to select multiple providers.
- **ProviderIcons.jsx**: Displays icons for each provider.
- **ProductList.jsx**: Displays the list of products.
- **PriceRangeFilter.jsx**: Allows users to filter products by price range.
- **ProductCard.jsx**: Displays individual product details.

## Services

- **api.js**: Contains functions to fetch fibre products from the API.

## Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
3. Start the application:
npm run dev

##Usage
Provider Filter: Select one or more providers to filter the products.
Price Range Filter: Adjust the price range slider to filter products within the selected range.
## Filtering Process

The filtering process is not working as expected. Here are the details:

### Issue

When multiple providers are selected, the application does not correctly filter the products associated with the selected providers.

### Cause

The filtering logic in `ProviderFilter.jsx` might not be correctly implemented or the state management might be causing issues.

### Solution

Review the filtering logic and ensure that the state updates correctly when multiple providers are selected. Debugging the state management and the filtering function should help identify the root cause.

### Project Status

Due to the issues with the filtering process, the application is currently incomplete. Further debugging and development are required to resolve these issues and complete the application.
