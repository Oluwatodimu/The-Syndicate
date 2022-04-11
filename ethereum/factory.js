import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x5b72Ad8C86f7e4936a79f8BcDD78AfE52C164eb7'
);

export default instance;