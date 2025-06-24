"use client";
import dynamic from "next/dynamic";

// Lazy load heavy components with animations and complex logic
const DynamicGregLife = dynamic(
  () => import("../../../../components").then((mod) => mod.GregLife),
  {
    loading: () => <div className="loading-centered loading-greg-life">Loading Greg Life...</div>,
  },
);

const DynamicMyContribution = dynamic(
  () => import("../../../../components").then((mod) => mod.MyContribution),
  {
    loading: () => <div className="loading-centered loading-contribution">Loading Contribution...</div>,
  },
);

const DynamicTestimonials = dynamic(
  () => import("../../../../components").then((mod) => mod.Testimonials),
  {
    loading: () => <div className="loading-centered loading-testimonials">Loading Testimonials...</div>,
  },
);

const DynamicGregsValues = dynamic(
  () => import("../../../../components").then((mod) => mod.GregsValues),
  {
    loading: () => (
      <div className="loading-centered">Loading Greg&apos;s Values...</div>
    )
  }
);
const DynamicGregLifeMural = dynamic(
  () => import("../../../../components").then((mod) => mod.GregLifeMural),
  {
    loading: () => (
      <div className="loading-centered">Loading Greg Life Mural...</div>
    )
  }
);
const DynamicMyJobs = dynamic(
  () => import("../../../../components").then((mod) => mod.MyJobs),
  {
    loading: () => <div className="loading-centered">Loading My Jobs...</div>
  }
);
const DynamicBeHired = dynamic(
  () => import("../../../../components").then((mod) => mod.BeHired),
  {
    loading: () => <div className="loading-centered">Loading Be Hired...</div>
  }
);

export default function Home() {
  return (
    <main>
      <DynamicGregLife />
      <DynamicMyContribution />
      <DynamicGregsValues />
      <DynamicMyJobs />
      <DynamicGregLifeMural />
      <DynamicTestimonials variant="canva" />
      <DynamicBeHired />
    </main>
  );
}
