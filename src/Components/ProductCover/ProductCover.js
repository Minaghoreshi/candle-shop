import React from "react";
import { Cover, Button } from "../UI";

export function ProductCover() {
  return (
    <Cover>
      <div className="CoverCard">
        <span className="title">The Nature Candle</span>
        <span variant="description">
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments{" "}
        </span>
        <Button>Discover Our Collection</Button>
      </div>
    </Cover>
  );
}
