/**
 * PaymentMapper: mapea datos de pago entre formatos internos y gateway
 */
class PaymentMapper {
  toGatewayFormat(payment) {
    return {
      amount: payment.amount,
      currency: payment.currency || 'USD',
      description: payment.description || 'Pago reserva',
      metadata: payment.metadata || {}
    };
  }

  fromGatewayResponse(resp) {
    return {
      id: resp.id || null,
      status: resp.status || 'unknown',
      raw: resp
    };
  }
}

module.exports = PaymentMapper;
