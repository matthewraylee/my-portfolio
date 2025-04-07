"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TestContactPage() {
  if (process.env.NODE_ENV !== "development") {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <p>This page is only available in development mode.</p>
      </div>
    );
  }

  const testScenarios = [
    {
      name: "Valid Submission",
      data: {
        name: "John Doe",
        email: "john.doe@example.com",
        subject: "Test Submission",
        message: "This is a valid test message with sufficient length.",
      },
    },
    {
      name: "Invalid Email",
      data: {
        name: "John Doe",
        email: "invalid-email",
        subject: "Test Submission",
        message: "This is a test message with sufficient length.",
      },
    },
    {
      name: "Short Name",
      data: {
        name: "J",
        email: "john.doe@example.com",
        subject: "Test Submission",
        message: "This is a test message with sufficient length.",
      },
    },
    {
      name: "Short Subject",
      data: {
        name: "John Doe",
        email: "john.doe@example.com",
        subject: "Hi",
        message: "This is a test message with sufficient length.",
      },
    },
    {
      name: "Short Message",
      data: {
        name: "John Doe",
        email: "john.doe@example.com",
        subject: "Test Submission",
        message: "Too short",
      },
    },
  ];

  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [submissionResult, setSubmissionResult] = useState<{
    scenario?: string;
    success?: boolean;
    error?: string;
    errors?: string[];
  } | null>(null);

  const handleSubmit = async () => {
    const currentScenario = testScenarios[currentScenarioIndex];

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentScenario.data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionResult({
          scenario: currentScenario.name,
          success: true,
        });
        console.log(`Scenario (${currentScenario.name}) successful:`, result);
      } else {
        setSubmissionResult({
          scenario: currentScenario.name,
          success: false,
          error: result.error,
          errors: result.errors,
        });
        console.error(`Scenario (${currentScenario.name}) failed:`, result);
      }

      // Move to next scenario or loop back to first
      setCurrentScenarioIndex((prev) => (prev + 1) % testScenarios.length);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionResult({
        scenario: currentScenario.name,
        success: false,
        error: "Network or unexpected error",
      });
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Contact Form Test</h1>

      <div className="space-y-4">
        <Button onClick={handleSubmit}>Run Next Test Scenario</Button>

        {submissionResult && (
          <div
            className={`
            p-4 rounded-md 
            ${
              submissionResult.success
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }
          `}
          >
            <p>Current Scenario: {submissionResult.scenario}</p>
            {submissionResult.success ? (
              <p>Submission Successful!</p>
            ) : (
              <>
                <p>Submission Failed</p>
                {submissionResult.error && (
                  <p>Error: {submissionResult.error}</p>
                )}
                {submissionResult.errors && (
                  <div>
                    <p>Validation Errors:</p>
                    <ul>
                      {submissionResult.errors.map((err, index) => (
                        <li key={index}>{err}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
