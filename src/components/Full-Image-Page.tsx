/* eslint-disable @next/next/no-img-element */
import { getImage } from "~/server/queries";


export default async function fullPageImageView(props: { id: number }) {
    const image = await getImage(props.id);
    return (
        <div className="flex w-full h-full min-w-0 min-h-0">
            <div className="flex flex-shrink justify-center items-center">
            <img src={image.url} alt={image.name} className="flex-shrink object-contain" />
            </div>

            <div className="w-48 flex flex-col flex-shrink-0 border-l">
                <h1 className="text-2xl font-bold">{image.name}</h1>
            </div>
        </div>
    )
}
