export async function testContactForm() {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    subject: "Test Contact Form Submission",
    message: `This is a test message sent at ${new Date().toISOString()}.
      
      Testing contact form functionality.
      Please ignore this message.`,
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    if (response.ok) {
      console.log("✅ Test Submission Successful!", result);
      return { success: true, result };
    } else {
      console.error("❌ Test Submission Failed:", result);
      return { success: false, error: result };
    }
  } catch (error) {
    console.error("❌ Test Submission Error:", error);
    return { success: false, error };
  }
}

// Make available globally for testing
if (typeof window !== "undefined") {
  (window as any).testContactForm = testContactForm;
}
