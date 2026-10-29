'use client';

import Image, {type StaticImageData} from "next/image";
import { LightGallery, LightGalleryItem } from "@lightgallery/react";
import Thumbnail from "@lightgallery/react/plugins/thumbnail";
import Zoom from "@lightgallery/react/plugins/zoom";

export interface Photo {
    image: StaticImageData;
    alt: string;
    caption?: string;
}

export function Gallery({ photos }: { photos: Photo[]}) {
    return (
        <LightGallery plugins={[Thumbnail, Zoom]} thumbnail={{ animateThumb: true }}>
            <div className="grid" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10
            }}>
                {photos.map(({ image, alt, caption }) => (
                    <LightGalleryItem
                        key={image.src}
                        href={image.src}
                        item={{
                            src: image.src,
                            thumb: image.src,
                            alt,
                            caption,
                            lgSize: `${image.width}-${image.height}`
                        }}
                    >
                        <Image
                            src={image}
                            alt={alt}
                            placeholder="blur"
                            sizes="(max-width: 768px) 50vw, 25vw"
                            style={{ width: "100%", height: "auto"}}
                        />
                    </LightGalleryItem>
                ))}
            </div>
        </LightGallery>
    )
}