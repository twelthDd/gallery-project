import FullPageImageView from "~/components/Full-Image-Page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = parseInt(photoId);
  if (isNaN(idAsNumber)) throw new Error("Invalid id");
  return <FullPageImageView id={idAsNumber} />;
}
