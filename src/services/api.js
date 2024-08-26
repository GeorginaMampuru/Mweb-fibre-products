import axios from 'axios';

const PRODUCTS_URL = 'https://apigw.mweb.co.za/prod/baas/proxy/marketing/products/promos/FTTH-ZOOM-ARMA-G-2024-PROMO-AUGUST,FTTH-MFN-NOVA-ARMA-G-2024-PROMO,FTTH-OCTOTEL-ARMA-G-2024-PROMO-MAY,FTTH-VUMA-ARMA-G-2024-PROMO,FTTH-TTCONNECT-CLAWBACK-100MBUP,FTTH-LIGHTSTRUCK-ARMA-G-2024-PROMO-APRIL,FTTH-LINKAFRICA-ARMA-G-2024-PROMO,FTTH-WEBCONNECT-M2M,FTTH-CCC-SETUP-100MBUP,FTTH-MFN-ARMA-G-2024-PROMO-AUGUST,FTTH-EVOTEL-ARMA-G-2024-PROMO,FTTH-CLEARACCESS-ARMA-G-2024-PROMO,FTTH-VUMA-12MONTH-CLAWBACK-25MBPS,FTTH-VODA-CLAWBACK-100MBUP,FTTH-TTCONNECT-ARMA-G-2024-PROMO-AUGUST,FTTH-OPEN-ARMA-G-2024-PROMO-APRIL,FTTH-FROG-ARMA-G-2024-PROMO,FTTH-CCC-CLARA-CLAWBACK,FTTH-BALWIN-ARMA-G-2024-PROMO-JUNE,FTTH-VODA-ARMA-G-2024-PROMO,FTTH-FROGFOOTAIR-CLAWBACK,FTTH-LINKAFRICA-SETUP-CLAWBACK-100MBUP?sellable_online=true';
const CAMPAIGNS_URL = 'https://apigw.mweb.co.za/prod/baas/proxy/marketing/campaigns/fibre?channels=120&visibility=public';

export const getFibreProducts = async () => {
  try {
    const response = await axios.get(PRODUCTS_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching fibre products:', error);
    throw error;
  }
};

export const getFibreCampaigns = async () => {
  try {
    const response = await axios.get(CAMPAIGNS_URL);
    return response.data.campaigns;
  } catch (error) {
    console.error('Error fetching fibre campaigns:', error);
    throw error;
  }
};
