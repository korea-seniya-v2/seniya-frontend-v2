import { loadTossPayments, type TossPaymentsWidgets } from '@tosspayments/tosspayments-sdk';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function generateRandomString() {
  if (typeof window !== 'undefined') {
    return window.btoa(Math.random().toString()).slice(0, 20);
  }
  return '';
}

const clientKey = 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm';

interface Amount {
  currency: string;
  value: number;
}

export default function CheckoutPage() {
  const location = useLocation();
  const selectedPass = location.state?.selectedPass;

  const [amount, setAmount] = useState<Amount>({
    currency: 'KRW',
    value: 0,
  });
  const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState<TossPaymentsWidgets | null>(null);

  const customerKey = generateRandomString();

  useEffect(() => {
    async function fetchPaymentWidgets() {
      try {
        const tossPayments = await loadTossPayments(clientKey);
        const widgets = tossPayments.widgets({ customerKey });
        setWidgets(widgets);
      } catch (error) {
        console.error('Error fetching payment widget:', error);
      }
    }

    fetchPaymentWidgets();
  }, []);

  useEffect(() => {
    if (selectedPass && selectedPass.price) {
      setAmount({
        currency: 'KRW',
        value: selectedPass.price,
      });
    }
  }, [selectedPass]);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (!widgets) return;

      await widgets.setAmount(amount);

      await widgets.renderPaymentMethods({
        selector: '#payment-method',
        variantKey: 'DEFAULT',
      });

      await widgets.renderAgreement({
        selector: '#agreement',
        variantKey: 'AGREEMENT',
      });

      setReady(true);
    }

    renderPaymentWidgets();
  }, [widgets, amount]);

  return (
    <div className="wrapper">
      <div className="box_section">
        <div id="payment-method" />
        <div id="agreement" />
        <button
          className="button"
          style={{ marginTop: '30px' }}
          disabled={!ready}
          onClick={async () => {
            const count = selectedPass?.count || 1;

            try {
              await widgets!.requestPayment({
                orderId: generateRandomString(),
                orderName: `수강권 ${count}개`,
                successUrl: window.location.origin + `/success?count=${count}`,
                failUrl: window.location.origin + '/fail',
              });
            } catch (error) {
              console.error(error);
            }
          }}
        >
          결제하기
        </button>
      </div>
    </div>
  );
}
