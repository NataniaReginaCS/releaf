import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/marketplace")({
  component: MarketplaceComponent,
});

function MarketplaceComponent() {
  return (
    <div className="p-2">
      <h3>MarketPlace</h3>
    </div>
  );
}
