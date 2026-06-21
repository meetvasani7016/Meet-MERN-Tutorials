// Mock JWT Signature validation logic
const crypto = require('crypto');
const SECRET = "secret_key";

function signToken(payload) {
  const data = JSON.stringify(payload);
  const signature = crypto.createHmac('sha256', SECRET).update(data).digest('hex');
  return `${Buffer.from(data).toString('base64')}.${signature}`;
}

function verifyToken(token) {
  const [base64Payload, signature] = token.split('.');
  const data = Buffer.from(base64Payload, 'base64').toString('utf8');
  const expectedSignature = crypto.createHmac('sha256', SECRET).update(data).digest('hex');
  
  if (signature === expectedSignature) {
    return { valid: true, payload: JSON.parse(data) };
  }
  return { valid: false };
}

const token = signToken({ userId: 101 });
console.log("Token:", token);
console.log("Verified:", verifyToken(token));