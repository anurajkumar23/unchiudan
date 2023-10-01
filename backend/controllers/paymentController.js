const {
  CFConfig,
  CFPaymentGateway,
  CFEnvironment,
  CFCustomerDetails,
  CFOrderRequest,
  CFUPIPayment,
  CFUPI,
  CFOrderPayRequest,
} = require('cashfree-pg-sdk-nodejs');
const catchAsync = require('./../utils/catchAsync');

const cfConfig = new CFConfig(
  CFEnvironment.SANDBOX,
  '2023-08-01',
  'TEST10029050f0191f770bef07b9eaa405092001',
  'TESTa581bbfb034c15e39f848ec3a7e3a279b7f64fdc',
);

const paymentGateway = new CFPaymentGateway();

const createOrder = catchAsync(async (req, res) => {
  const { name, phone, email, amount } = req.body;
  console.log('working');
  console.log(req.body);
  try {
    const customerDetails = new CFCustomerDetails();
    customerDetails.customerId = name;
    customerDetails.customerPhone = phone;
    customerDetails.customerEmail = email;

    const cFOrderRequest = new CFOrderRequest();
    cFOrderRequest.orderAmount = amount;
    cFOrderRequest.orderCurrency = 'INR';
    cFOrderRequest.customerDetails = customerDetails;

    // Generate the payment session ID
    const paymentSessionResponse = await paymentGateway.orderCreate(
      cfConfig,
      cFOrderRequest,
    );

    if (paymentSessionResponse && paymentSessionResponse.cfOrder) {
      const paymentSessionId = paymentSessionResponse.cfOrder.paymentSessionId;
      res.json({ paymentSessionId });
    } else {
      res.status(500).json({ error: 'Failed to generate payment session ID' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const payWithUPI = catchAsync(async (req, res) => {
  try {
    const { paymentSessionId, paymentMethod } = req.body;

    // Payment method for UPI
    const cFUpiPayment = {
      upi: {
        channel: 'collect',
        upiId: 'testsuccess@gocash', // Replace with your UPI ID
      },
    };

    const cFOrderPayRequest = {
      paymentSessionId,
      paymentMethod: cFUpiPayment, // Use UPI payment method
    };

    const cfPayResponse = await paymentGateway.orderSessionsPay(
      cfConfig,
      cFOrderPayRequest,
    );

    if (cfPayResponse && cfPayResponse.cfOrderPayResponse) {
      const paymentUrl = cfPayResponse.cfOrderPayResponse;
      console.log(paymentUrl);
      res.json({ paymentUrl });
    } else {
      res.status(500).json({ error: 'Payment initiation failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = { createOrder, payWithUPI };
