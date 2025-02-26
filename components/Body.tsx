import { Footer } from "./Footer";

export const BodyComp = ({
  children,
  results,
}: {
  children: any;
  results: boolean;
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexFlow: "column",
        minHeight: "80vh", // Use minHeight instead of height
        alignItems: "center",
      }}
    >
      <div
        style={{
          alignItems: "flex-start",
        }}
        className={`text-red-900 ${results ? "mt-5" : "mt-48"} flex`}
      >
        {children}
      </div>

      <Footer />
    </div>
  );
};
