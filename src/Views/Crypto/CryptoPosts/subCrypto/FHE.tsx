import React from "react";
import { HeaderPost } from "../../../../Single/HeaderPost";

const FHE = ({ postID }: { postID: string }) => {
  return (
    <HeaderPost
      name={"Fully Homomorphic Encryption Tool"}
      date={"19/03/2023"}
      back={`/cryptography/`}
    />
  );
};

export default FHE;
