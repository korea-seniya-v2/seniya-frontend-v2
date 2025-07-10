import { Route } from "react-router-dom";
import PurchasePass from "../pages/payment/PurchasePass";
import CheckoutPage from "../pages/payment/CheckoutPage";
import PaymentSuccess from "../pages/payment/SuccessPage";
import PaymentFail from "../pages/payment/FailPage";

export const PaymentRoutes = (
  <>
    <Route path="/purchases" element={<PurchasePass />} />
    <Route path="/payments/request" element={<CheckoutPage />} />
    <Route path="/success" element={<PaymentSuccess />} />
    <Route path="/fail" element={<PaymentFail />} />
  </>
);