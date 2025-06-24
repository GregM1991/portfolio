"use client";
import dynamic from "next/dynamic";
import { GregLife, MyContribution, Testimonials } from "@/components";

const DynamicGregsValues = dynamic(
  () => import("../../../../components").then((mod) => mod.GregsValues),
  {
    loading: () => <p>Loading...</p>,
  },
);
const DynamicGregLifeMural = dynamic(
  () => import("../../../../components").then((mod) => mod.GregLifeMural),
  {
    loading: () => <p>Loading...</p>,
  },
);
const DynamicMyJobs = dynamic(
  () => import("../../../../components").then((mod) => mod.MyJobs),
  {
    loading: () => <p>Loading...</p>,
  },
);
const DynamicBeHired = dynamic(
  () => import("../../../../components").then((mod) => mod.BeHired),
  {
    loading: () => <p>Loading...</p>,
  },
);

export default function Home() {
  return (
    <main>
      <GregLife />
      <MyContribution />
      <DynamicGregsValues />
      <DynamicMyJobs />
      <DynamicGregLifeMural />
      <Testimonials variant="canva" />
      <DynamicBeHired />
    </main>
  );
}
