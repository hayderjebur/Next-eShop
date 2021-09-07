import nc from 'next-connect';
import { isAuth } from '../../../utils/auth';

const handler = nc();

handler.use(isAuth);

handler.get(async (req, res) => {
  res.sendDate(process.env.PAYPAL_CLIENT_ID);
});
export default handler;
