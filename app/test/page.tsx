"use client";

import { load } from "recaptcha-v3";
import { useState } from "react";

export default function ReCAPTCHATest() {
  const [token, setToken] = useState<string | null>(null);

  const handleTest = async () => {
    try {
      const recaptcha = await load(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""
      );
      const testToken = await recaptcha.execute("test_action");

      console.log("reCAPTCHA Token:", testToken);
      setToken(testToken);
    } catch (error) {
      console.error("reCAPTCHA Test Error:", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">reCAPTCHA Test</h1>
      <button
        onClick={handleTest}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generate Token
      </button>
      {token && (
        <div className="mt-4">
          <p>Token Generated:</p>
          <pre className="bg-gray-100 p-2 rounded">{token}</pre>
        </div>
      )}
    </div>
  );
}
