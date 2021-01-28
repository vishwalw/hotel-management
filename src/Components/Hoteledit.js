import { gql } from "@apollo/client";
import React from "react";
import PageLayout from "./Navbar";

const EDITHOTEL = gql`
  mutation UPDATEHOTEL(
    $name: String!
    $description: String
    $rooms: Int
    $phone: String
    $website: String
  ) {
    updateHotel(
      data: {
        name: $name
        description: $description
        rooms: $rooms
        phone: $phone
        website: $website
      }
      where: { id: "ckkgi0cfx2yfa0872klci6ku5" }
    ) {
      name
      id
      phone
      rooms
      website
    }
  }
`;

function Hoteledit() {
  return <PageLayout>Edit page</PageLayout>;
}

export default Hoteledit;
