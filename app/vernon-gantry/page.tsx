import Image from "next/image"
import { Gallery, type Photo } from "../components/Gallery"

// Static import of different frames
import campbell from "./vernon-frames/campbell-34-01_orig.png";
import chrissy from "./vernon-frames/chrissy-34-01_orig.png";
import darcy from "./vernon-frames/darcy-34-01_orig.png";
import devin from "./vernon-frames/devin-34-01_orig.png";
import gillete from "./vernon-frames/gillette-34-01_orig.png";
import holly from "./vernon-frames/holly-34-01_orig.png";
import hunter from "./vernon-frames/hunter-34-01_orig.png";
import madeline from "./vernon-frames/madeline-34-01_orig.png";
import mariel from "./vernon-frames/mariel-34-01_orig.png";
import pauline from "./vernon-frames/pauline-34-01_orig.png";
import peeler from "./vernon-frames/peeler-34-01_orig.png";
import scotty from "./vernon-frames/scotty-34-01_orig.png";
import vance from "./vernon-frames/vance-34-01_orig.png";

const photos: Photo[] = [
    { image: campbell, alt: "Campbell frames by Vernon Gantry", caption: "Campbell" },
    { image: chrissy, alt: "Chrissy frames by Vernon Gantry", caption: "Chrissy" },
    { image: darcy, alt: "Darcy frames by Vernon Gantry", caption: "Darcy" },
    { image: devin, alt: "Devin frames by Vernon Gantry", caption: "Devin" },
    { image: gillete, alt: "Gillete frames by Vernon Gantry", caption: "Gillete" },
    { image: holly, alt: "Holly frames by Vernon Gantry", caption: "Holly" },
    { image: hunter, alt: "Hunter frames by Vernon Gantry", caption: "Hunter" },
    { image: madeline, alt: "Madeline frames by Vernon Gantry", caption: "Madeline" },
    { image: mariel, alt: "Mariel frames by Vernon Gantry", caption: "Mariel" },
    { image: pauline, alt: "Pauline frames by Vernon Gantry", caption: "Pauline" },
    { image: peeler, alt: "Peeler frames by Vernon Gantry", caption: "Peeler" },
    { image: scotty, alt: "Scotty frames by Vernon Gantry", caption: "Scotty" },
    { image: vance, alt: "Vance frames by Vernon Gantry", caption: "Vance" }
]


export default function Vernon() {
    return (
        <div className="vernonGantryGallery">
            <div className="imageContainer" style={{
                position: "relative",
                padding: "15px 0"
            }}>
                <Image
                    alt="Black & White photo of two women, both wearing Vernon Gaantry Eyewear"
                    src={"/vernon-promo-cropped.png"}
                    width={960}
                    height={360}
                    loading="eager"
                />
                <h2 style={{
                    fontSize: "xxx-large",
                    position: "absolute",
                    top: 16,
                    left: 16,
                    color: "white"
                }}>
                    Vernon Gantry Eyewear
                </h2>
            </div>
            <div>
                <p style={{
                    fontSize: "large",
                    color: "#24678d",
                    textAlign: "center"
                }}>
                    <strong>
                        Thinking of buying new glasses online
                        <br/>
                        but need the help of an Eyecare professional?
                        <br/>
                        Worry no more!
                        <br/>
                        Access Optical is pleased to introduce
                        <br/>
                        Vernon Gantry vintage inspired eyewear.
                        <br/>
                        <br/>
                        Contact us today to learn more about our frame and lens pricing.
                    </strong>
                </p>
                <p style={{
                    fontSize: "large",
                    color: "#da8044",
                    textAlign: "center"
                }}>
                    <strong>
                        <br/>
                        Vernon Gantry Eyewear complete with single vision glare free lenses!
                        <br/>
                        Stop in today for amazing pricing and see if Vernon Gantry is right for you.
                    </strong>
                </p>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td style={{ width: "25%", padding: "0 10px" }}>
                                <Image
                                    alt=""
                                    src={"/vernon-collage/vgc1.png"}
                                    width={1100}
                                    height={733}
                                    style={{
                                        padding: "10px 0",
                                        width: "auto",
                                        maxWidth: "100%"
                                    }}
                                />
                                <Image
                                    alt=""
                                    src={"/vernon-collage/vgc2.png"}
                                    width={960}
                                    height={1440}
                                    style={{
                                        padding: "10px 0",
                                        width: "auto",
                                        maxWidth: "100%"
                                    }}
                                />
                            </td>
                            <td style={{ width: "25%", padding: "0 10px" }}>
                                <Image
                                    alt=""
                                    src={"/vernon-collage/vgc3.png"}
                                    width={960}
                                    height={1440}
                                    style={{
                                        padding: "10px 0",
                                        width: "auto",
                                        maxWidth: "100%"
                                    }}
                                />
                                <Image
                                    alt=""
                                    src={"/vernon-collage/vgc4.png"}
                                    width={1100}
                                    height={733}
                                    style={{
                                        padding: "10px 0",
                                        width: "auto",
                                        maxWidth: "100%"
                                    }}
                                />
                            </td>
                            <td style={{ width: "25%", padding: "0 10px" }}>
                                <Image
                                    alt=""
                                    src={"/vernon-collage/vgc5.png"}
                                    width={361}
                                    height={92}
                                    style={{
                                        padding: "10px 0",
                                        width: "auto",
                                        maxWidth: "100%"
                                    }}
                                />
                                <Image
                                    alt=""
                                    src={"/vernon-collage/vgc6.png"}
                                    width={960}
                                    height={1440}
                                    style={{
                                        padding: "10px 0",
                                        width: "auto",
                                        maxWidth: "100%"
                                    }}
                                />
                            </td>
                            <td style={{ width: "25%", padding: "0 10px" }}>
                                <Image
                                    alt=""
                                    src={"/vernon-collage/vgc7.png"}
                                    width={960}
                                    height={1440}
                                    style={{
                                        padding: "10px 0",
                                        width: "auto",
                                        maxWidth: "100%"
                                    }}
                                />
                                <Image
                                    alt=""
                                    src={"/vernon-collage/vgc8.png"}
                                    width={1100}
                                    height={733}
                                    style={{
                                        padding: "10px 0",
                                        width: "auto",
                                        maxWidth: "100%"
                                    }}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <Gallery photos={photos}/>
            </div>
        </div>
    )
}