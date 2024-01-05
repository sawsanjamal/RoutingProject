import { Fragment } from "react";

export function Skeleton({ short }) {
  return (
    <div
      className="skeleton"
      style={{ width: short ? "15em" : undefined }}
    ></div>
  );
}
export function SkeletonButton({ short }) {
  return <div className="skeleton skeleton-btn"></div>;
}
export function SkeletonList({ amount, children }) {
  return (
    <>
      {Array.from({ length: amount }).map((_, i) => (
        <Fragment key={i}>{children}</Fragment>
      ))}
    </>
  );
}
