type VacationRentalSchemaProps = {
  name: string;
  description: string;
  checkInDate?: string;
  checkOutDate?: string;
  priceRange?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
};

export default function VacationRentalSchema({
  name,
  description,
  checkInDate,
  checkOutDate,
  priceRange = "$200-$500",
  address = {
    streetAddress: "Holmes Beach",
    addressLocality: "Holmes Beach",
    addressRegion: "FL",
    postalCode: "34217",
    addressCountry: "US",
  },
}: VacationRentalSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name,
    description,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.4989",
      longitude: "-82.7065",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Private Pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Beach Access",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Pet Friendly",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "WiFi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Kitchen",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Air Conditioning",
        value: true,
      },
    ],
    numberOfRooms: 2,
    numberOfBedrooms: 2,
    numberOfBathroomsTotal: 1.5,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: 6,
    },
    petsAllowed: "Yes",
    ...(checkInDate &&
      checkOutDate && {
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceRange,
          validFrom: checkInDate,
          validThrough: checkOutDate,
          url: "https://sandboxbeachhouse.com",
        },
      }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
    },
    image: [
      "https://sandboxbeachhouse.com/Backyard.avif",
      "https://sandboxbeachhouse.com/Front.webp",
      "https://sandboxbeachhouse.com/64de59fb.webp",
    ],
    url: "https://sandboxbeachhouse.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
