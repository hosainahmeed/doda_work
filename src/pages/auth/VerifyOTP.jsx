import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get email from location state or use a default
  const email = location.state?.email || 'your.email@example.com';

  const handleChange = (e, index) => {
    const value = e.target.value;
    
    // Only allow numbers and ensure single digit
    if (value === '' || /^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError('');
      
      // Auto focus next input
      if (value !== '' && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace to move to previous input
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpString = otp.join('');
    
    if (otpString.length !== 6) {
      setError('Please enter a valid 6-digit code');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('OTP submitted:', otpString);
      setIsLoading(false);
      // Navigate to reset password page with the OTP in state
      navigate('/reset-password', { 
        state: { 
          email,
          otp: otpString 
        } 
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verify your email
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We've sent a 6-digit verification code to {email}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBA00] focus:border-[#FFBA00]"
                autoFocus={index === 0}
              />
            ))}
          </div>

          {error && (
            <p className="mt-2 text-center text-sm text-red-600">
              {error}
            </p>
          )}

          <div className="text-center text-sm text-gray-600">
            Didn't receive a code?{' '}
            <button 
              type="button" 
              className="font-medium text-[#FFBA00] hover:text-yellow-600"
              onClick={() => console.log('Resend OTP')}
            >
              Resend code
            </button>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading || otp.some(digit => digit === '')}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FFBA00] hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFBA00] ${isLoading || otp.some(digit => digit === '') ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? 'Verifying...' : 'Verify Code'}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Wrong email?{' '}
            <button 
              onClick={() => navigate('/forgot-password')}
              className="font-medium text-[#FFBA00] hover:text-yellow-600"
            >
              Go back
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
