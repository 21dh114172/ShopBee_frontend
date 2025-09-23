"use client";

import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Divider,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

export default function ShopeeLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });

  return (
    <div className="flex min-h-screen bg-[#ee4d2d]">
      {/* Left - Logo + text */}
      <div className="w-1/2 hidden md:flex items-center justify-center text-white flex-col">
        <img src="/shopee_logo.svg" alt="Shopee" className="w-20 mb-4" />
        <h1 className="text-4xl font-bold">Shopee</h1>
        <p className="mt-4 text-center max-w-[250px] text-sm leading-5">
          Nền tảng thương mại điện tử yêu thích ở Đông Nam Á & Đài Loan
        </p>
      </div>

      {/* Right - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="relative w-full max-w-sm p-6 rounded-md">
          {/* QR Code Login */}
          <div className="absolute right-4 top-4">
            <Button
              size="small"
              variant="outlined"
              className="!text-yellow-600 !border-yellow-400"
              endIcon={<img src="/qr-icon.svg" alt="QR" className="w-4 h-4" />}
            >
              Đăng nhập với mã QR
            </Button>
          </div>

          <Typography variant="h6" className="font-semibold mb-4">
            Đăng nhập
          </Typography>

          {/* Username */}
          <TextField
            fullWidth
            label="Email/Số điện thoại/Tên đăng nhập"
            size="small"
            variant="outlined"
            className="mb-3"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />

          {/* Password */}
          <TextField
            fullWidth
            label="Mật khẩu"
            size="small"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            className="mb-1"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword((s) => !s)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Forgot password */}
          <div className="text-right text-sm mb-4">
            <a href="#" className="text-[#05a] hover:underline">
              Quên mật khẩu
            </a>
          </div>

          {/* Login button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#ee4d2d",
              "&:hover": { backgroundColor: "#d84315" },
            }}
            className="mb-4"
          >
            ĐĂNG NHẬP
          </Button>

          {/* Hoặc */}
          <div className="my-4 flex items-center gap-2">
            <Divider className="flex-1" />
            <span className="text-gray-400 text-sm">HOẶC</span>
            <Divider className="flex-1" />
          </div>

          {/* Social login */}
          <div className="flex gap-2 mb-4">
            <Button
              variant="outlined"
              fullWidth
              startIcon={<FacebookIcon />}
              className="!normal-case"
            >
              Facebook
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              className="!normal-case"
            >
              Google
            </Button>
          </div>

          {/* Register */}
          <p className="text-sm text-center">
            Bạn mới biết đến Shopee?{" "}
            <a href="/signup" className="text-[#ee4d2d] font-medium">
              Đăng ký
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
