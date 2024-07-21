/* eslint-disable @next/next/no-img-element */
import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";


export default async function fullPageImageView(props: { id: number }) {
    const image = await getImage(props.id);

    const uploaderInfo = await clerkClient.users.getUser(image.userId);
    return (
        <div className="flex w-full h-full min-w-0 min-h-0">
            <div className="flex flex-shrink justify-center items-center">
            <img src={image.url} alt={image.name} className="flex-shrink object-contain" />
            </div>

            <div className="w-48 flex flex-col flex-shrink-0 border-l">
                <div className="text-lg border-b text-center p-2 ">{image.name}</div>

                <div className="flex flex-col p-2">
                    <span>Uploaded by:</span>
                    <span>{uploaderInfo.fullName}</span>
                    </div>
                    <div className="flex flex-col p-2">
                    <span>created at:</span>
                    <span>{new Date(image.createdAt).toLocaleDateString()}</span>
                </div>
                </div>
        </div>
    )
}
