import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer
            style={{
                background: "#f9f9f9",
                padding: "4em 1.6em",
                display: "flex",
                justifyContent: "center"
            }}
        >
            <table
                style={{
                    width: 960,
                    justifyContent: "center"
                }}
            >
                <tbody>
                    <tr>
                        <td
                            style={{
                                padding: "0 15px",
                                alignContent: "start"
                            }}
                        >
                            <p
                                style={{
                                    color: "#2a2a2a"
                                }}
                            >
                                <strong>ACCESS OPTICAL</strong>
                                <br/>
                                2169 Merrick Road
                                <br/>
                                <strong>Merrick</strong>, NY 11566
                                <br/>
                                <strong>T- 516-223-1616</strong>
                                <br/>
                                F- 516-223-8590
                                <br/>
                                <strong style={{fontSize: "x-small"}}>SUPPORT@ACCESSOPTICAL.NET</strong>
                            </p>
                        </td>
                        <td
                            style={{
                                padding: "0 15px",
                                alignContent: "start"
                            }}
                        >
                            <p
                                style={{
                                    color: "#2a2a2a"
                                }}
                            >
                                <strong
                                    style={{
                                        fontSize: "large"
                                    }}
                                >
                                    Office Hours
                                </strong>
                                <br/>
                                Mon&nbsp;10:00 am - 6:00 pm
                                <br/>
                                Tue&nbsp;10:00 am - 6:00 pm
                                <br/>
                                Wed&nbsp;10:00 am - 6:00 pm
                                <br/>
                                Thu&nbsp;10:00 am - 6:00 pm
                                <br/>
                                Fri&nbsp;10:00 am - 6:00 pm
                                <br/>
                                Sat&nbsp;0:30 am - 5:00 pm
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                padding: "0 15px"
                            }}
                        >
                            <Link className="text-cyan-600 hover:text-sky-300" href={"/"}>Notice of Privacy</Link>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                padding: "0 15px",
                                alignContent: "start"
                            }}
                        >
                            <a href="https://www.facebook.com/AccessOptical/#"
                                style={{
                                    float: "left",
                                    padding: "0 15px"
                                }}
                            >
                                <Image
                                    alt="facebook logo"
                                    src={"/Facebook_f_logo_(2021).svg"}
                                    width={20}
                                    height={20}
                                />
                            </a>
                            <a href="https://www.instagram.com/AccessOptical/"
                                style={{
                                    float: "left",
                                    padding: "0 15px"
                                }}
                            >
                                <Image
                                    alt="instagram logo"
                                    src={"/Instagram_logo_2022.svg"}
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </footer>
    )
}