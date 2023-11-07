import React from "react";
import { Cover, Button, CoverTitle, CoverText, CoverCard } from "../UI";

export function ProductCover() {
  return (
    <Cover>
      <CoverCard>
        <CoverTitle>The Nature Candle</CoverTitle>
        <CoverText>
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments{" "}
        </CoverText>
        <Button>Discover Our Collection</Button>
      </CoverCard>
    </Cover>
  );
}
