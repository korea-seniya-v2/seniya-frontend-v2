import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function PaymentFail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const message = searchParams.get('message') || '결제가 취소되었거나 실패했습니다.';

    alert(message);

    navigate('/api/v1/purchases', { replace: true });
  }, [navigate, searchParams]);

  return <div>결제 실패 처리 중입니다...</div>;
}
