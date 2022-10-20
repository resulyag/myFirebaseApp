export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz e posta adresi';
    default:
      return errorCode;
  }
}
