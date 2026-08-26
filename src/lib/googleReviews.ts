const PLACE_ID = 'ChIJLxhJofu7yhQRzwK1qV16pOQ';

export type GoogleReview = {
  author: string;
  authorPhoto?: string;
  authorProfileUrl?: string;
  rating: number;
  text: string;
  relativeTime: string;
  googleMapsUri?: string;
};

type GooglePlacesResult = {
  rating: number;
  reviewCount: number;
  reviews: GoogleReview[];
};

type PlacesApiReview = {
  authorAttribution?: { displayName?: string; photoUri?: string; uri?: string };
  rating?: number;
  text?: { text?: string };
  relativePublishTimeDescription?: string;
  googleMapsUri?: string;
};

export async function getGoogleReviews(): Promise<GooglePlacesResult | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=tr`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
        },
        next: { revalidate: 60 * 60 * 24 },
      }
    );

    if (!res.ok) return null;

    const data = await res.json();
    const reviews: PlacesApiReview[] = data.reviews ?? [];

    return {
      rating: data.rating ?? 0,
      reviewCount: data.userRatingCount ?? 0,
      reviews: reviews.map((r) => ({
        author: r.authorAttribution?.displayName ?? 'Google Kullanıcısı',
        authorPhoto: r.authorAttribution?.photoUri,
        authorProfileUrl: r.authorAttribution?.uri,
        rating: r.rating ?? 5,
        text: r.text?.text ?? '',
        relativeTime: r.relativePublishTimeDescription ?? '',
        googleMapsUri: r.googleMapsUri,
      })),
    };
  } catch {
    return null;
  }
}
