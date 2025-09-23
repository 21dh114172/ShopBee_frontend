// src/components/Auth/ShopeeSignupForm.tsx
'use client';

import { useState } from 'react';
import { Box, TextField, Button, Divider, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

export default function ShopeeSignupForm() {
  const [phone, setPhone] = useState('');

  return (
    <div className="flex min-h-screen bg-[#ee4d2d]">
      {/* Background image side */}
      <div
        className="hidden md:flex w-1/2 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: `url('https://down-vn.img.susercontent.com/file/sg-11134004-824ir-mei8shzqcverb4')`,
        }}
      >
        {/* Anti-fraud captcha container if needed */}
        <div id="anti_fraud_captcha" />
      </div>

      {/* Form side */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white px-6 py-10">
        <Box className="w-full max-w-sm">
          {/* Title */}
          <Typography variant="h5" className="font-semibold mb-6 text-center text-[#222]">
            Đăng ký
          </Typography>

          {/* Phone Input */}
          <TextField
            fullWidth
            variant="outlined"
            label="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            size="small"
            className="mb-4"
          />

          {/* Next Button */}
          <Button
            fullWidth
            variant="contained"
            disabled={!phone}
            sx={{
              backgroundColor: '#ee4d2d',
              '&:hover': { backgroundColor: '#d84315' },
            }}
          >
            Tiếp theo
          </Button>

          {/* Hoặc */}
          <div className="flex items-center gap-2 my-4">
            <Divider className="flex-1" />
            <span className="text-gray-400 text-sm">hoặc</span>
            <Divider className="flex-1" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-2 mb-4">
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FacebookIcon />}
              className="!normal-case"
            >
              Facebook
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              className="!normal-case"
            >
              Google
            </Button>
          </div>

          {/* Điều khoản */}
          <Typography variant="caption" className="block text-center text-gray-500 text-sm">
            Bằng việc đăng kí, bạn đã đồng ý với Shopee về{' '}
            <a
              href="https://help.shopee.vn/portal/article/77243"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ee4d2d]"
            >
              Điều khoản dịch vụ
            </a>{' '}
            &{' '}
            <a
              href="https://help.shopee.vn/portal/article/77244"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ee4d2d]"
            >
              Chính sách bảo mật
            </a>
          </Typography>

          {/* Đăng nhập */}
          <Typography className="text-center mt-6 text-sm">
            Bạn đã có tài khoản?{' '}
            <a href="/buyer/login" className="text-[#ee4d2d] font-medium">
              Đăng nhập
            </a>
          </Typography>
        </Box>
      </div>
    </div>
  );
}
