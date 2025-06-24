"use client";
import { ReactNode } from "react";
import {
  ErrorBoundary as ReactErrorBoundary,
  FallbackProps
} from "react-error-boundary";
import { Typography } from "@/components";
import styles from "./errorBoundary.styles.module.css";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  variant?: "home" | "canva";
}

interface ErrorFallbackProps extends FallbackProps {
  variant?: "home" | "canva";
}

function ErrorFallback({
  error,
  resetErrorBoundary,
  variant
}: ErrorFallbackProps) {
  return (
    <div
      className={`${styles.errorContainer} ${variant === "canva" ? "canva" : ""}`}
    >
      <div className={styles.errorContent}>
        <Typography
          type="h2"
          size="xl"
          canva={variant === "canva"}
          className={styles.errorTitle}
        >
          Something went wrong
        </Typography>
        <Typography canva={variant === "canva"} className={styles.errorMessage}>
          We&apos;re sorry, but something unexpected happened. Please try
          refreshing the page.
        </Typography>
        <button className={styles.retryButton} onClick={resetErrorBoundary}>
          Try Again
        </button>
        <button
          className={`${styles.retryButton} ${styles.refreshButton}`}
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button>
        {process.env.NODE_ENV === "development" && (
          <details className={styles.errorDetails}>
            <summary>Error Details (Development Only)</summary>
            <Typography size="sm" className={styles.errorMessage}>
              Error: {error.message}
            </Typography>
            <pre className={styles.errorStack}>{error.stack}</pre>
          </details>
        )}
      </div>
    </div>
  );
}

export function ErrorBoundary({
  children,
  fallback,
  variant = "home"
}: ErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: { componentStack: string }) => {
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    // In production, you might want to send this to an error reporting service
    if (process.env.NODE_ENV === "production") {
      // Example: sendToErrorReporting(error, errorInfo);
    }
  };

  if (fallback) {
    return (
      <ReactErrorBoundary
        FallbackComponent={() => <>{fallback}</>}
        onError={handleError}
      >
        {children}
      </ReactErrorBoundary>
    );
  }

  return (
    <ReactErrorBoundary
      FallbackComponent={(props) => (
        <ErrorFallback {...props} variant={variant} />
      )}
      onError={handleError}
      onReset={() => {
        // Optional: Clear any error state or perform cleanup
        console.log("Error boundary reset");
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
