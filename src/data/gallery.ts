import type { ImageMetadata } from "astro";
import type { Lang } from "../i18n";

const images = import.meta.glob<{ default: ImageMetadata }>("../assets/img/*.{jpg,jpeg}", { eager: true });
export const img = (file: string) => {
  const mod = images[`../assets/img/${file}`];
  if (!mod) throw new Error(`Image not found: ${file}`);
  return mod.default;
};

type Photo = { src: ImageMetadata; alt: Record<Lang, string> };

const photo = (file: string, de: string, en: string): Photo => ({ src: img(file), alt: { de, en } });

/** Order matches the photo section of the original homepage */
export const gallery: Photo[] = [
  photo("IMG_9260-scaled.jpg", "Hauseingang Am Fischerheim 5 mit Buchsbaumkugeln", "Front entrance at Am Fischerheim 5 with box hedges"),
  photo("cropped-IMG_3858-scaled-1.jpeg", "Wohnzimmer mit Sofa und Fernseher", "Living room with sofa and TV"),
  photo("cropped-IMG_3859-scaled-1.jpeg", "Wohnzimmer mit Ecksofa und Couchtisch", "Living room with corner sofa and coffee table"),
  photo("IMG_3857-1-scaled.jpeg", "Wohnzimmer mit Blick zum Fenster", "Living room looking towards the window"),
  photo("IMG_3856-1-scaled.jpeg", "Graues Ecksofa im Wohnzimmer", "Grey corner sofa in the living room"),
  photo("cropped-Albert-Rohloff-Wohnung-Jens-Oesterling-17-scaled-2.jpg", "Dekoration in der Ferienwohnung", "Decor in the apartment"),
  photo("cropped-Bilder-22-1.jpg", "Schlafzimmer mit Doppelbett", "Bedroom with double bed"),
  photo("cropped-Albert-Rohloff-Wohnung-Jens-Oesterling-21-1-scaled-1.jpg", "Doppelbett mit Nachttisch", "Double bed with bedside table"),
  photo("Albert-Rohloff-Wohnung-Jens-Oesterling-22-scaled.jpg", "Schlafzimmer mit Kleiderschrank", "Bedroom with wardrobe"),
  photo("IMG_9252-scaled.jpg", "Zweites Schlafzimmer mit Stuhl und Spiegel", "Second bedroom with chair and mirror"),
  photo("IMG_9254-scaled.jpg", "Zweites Schlafzimmer mit ausgeklapptem Schrankbett und Tür zum Garten", "Second bedroom with the wall bed folded down and a door to the garden"),
  photo("cropped-IMG_9257-scaled-1.jpg", "Schreibtisch mit Pflanze", "Desk with a plant"),
  photo("cropped-IMG_9255-scaled-2.jpg", "Zweites Schlafzimmer mit Bildern und Stuhl an der Gartentür", "Second bedroom with paintings and a chair by the garden door"),
  photo("IMG_9241-scaled.jpg", "Einbauküche mit Esstisch", "Fitted kitchen with dining table"),
  photo("IMG_9240-scaled.jpg", "Esstisch für zwei in der Küche", "Dining table for two in the kitchen"),
  photo("IMG_E9238-scaled.jpg", "Blumen auf der Glasablage im Bad", "Flowers on the glass shelf in the bathroom"),
  photo("IMG_9236-scaled.jpg", "Badezimmer mit Dusche, WC und Waschtisch", "Bathroom with shower, toilet and washbasin"),
  photo("IMG_9233-scaled.jpg", "Waschbecken mit Spiegel im Bad", "Washbasin and mirror in the bathroom"),
  photo("IMG_9263-scaled.jpg", "Grüne Hecke im Garten", "Green hedge in the garden"),
  photo("IMG_9224-scaled.jpg", "Terrasse mit Tisch und Stühlen", "Terrace with table and chairs"),
  photo("IMG_9262-scaled.jpg", "Sitzecke im Garten mit Rosen", "Garden seating area with roses"),
  photo("IMG_9264-scaled.jpg", "Rosenstrauch am Haus", "Rose bush by the house"),
  photo("IMG_9265-scaled.jpg", "Garten mit Rosen", "Garden with roses"),
];
