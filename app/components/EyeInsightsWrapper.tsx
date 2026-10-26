'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import EyeInsightText from "./EyeInsightText";

export default function EyeInsights() {
    const [date, setDate] = useState(new Date(1900, 1, 1));

    useEffect(() => {
        setDate(new Date());
    }, []);

    return (
        <div className="eyeInsights"
            style={{
                display: "flex",
                alignItems: "center"
            }}
        >
            <Image 
                alt="Pair of cartoon eyes looking to the right"
                src={"/eyes1.png"}
                width={149}
                height={157}
                style={{paddingRight: 10, alignSelf: "flex-start", flexShrink: 0}}
            />
            <div className="eyeInsightMain" style={{justifyContent: "start"}}>
                <Image
                    alt="Eye Insights"
                    src={"/eyeInsightsLogo1.png"}
                    width={200}
                    height={40}
                />
                <EyeInsightText date={date}/>
                <div className="eyeInsightDateController" style={{display: "flex", alignItems: "center"}}>
                    <button
                        style={{
                            color: "#61b2d6",
                            fontSize: "x-large",
                            paddingLeft: 5,
                            transform: "scaleX(-1)"
                        }}
                        onClick={() => {
                            const upDate = new Date(date);
                            upDate.setDate(upDate.getDate() - 1);
                            setDate(upDate);
                        }}
                    >
                        ➤
                    </button>
                    <span
                        style={{
                            color: "#178cc0"
                        }}
                    >
                        {`${date.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })}`}
                    </span>
                    <button
                        style={{
                            color: "#61b2d6",
                            fontSize: "x-large",
                            paddingLeft: 5
                        }}
                        onClick={() => {
                            const upDate = new Date(date);
                            upDate.setDate(upDate.getDate() + 1);
                            setDate(upDate);
                        }}
                    >
                        ➤
                    </button>
                </div>
            </div>
            
        </div>
    )
}