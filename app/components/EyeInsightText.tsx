'use client'

import { useState, useEffect } from "react";

export default function EyeInsightText(props: {date: Date}) {
    const {date} = props;
    const [insight, setInsight] = useState<string | undefined>("");

    useEffect(() => {
        const fetchInsight = async (date: Date) => {
            try {
                const day = date.getDate().toString().padStart(2, "0");
                const month = (date.getMonth() + 1).toString().padStart(2, "0");
                const url = `https://mt-prd-pp-patient-portal.s3.us-west-2.amazonaws.com/eyeinsights/calendar/${month}${day}.txt`;

                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "text/plain"
                    }
                })

                if (!response.ok) {
                    throw new Error(`Error fetching Eye Insight: ${response.status}`)
                }

                const result = await response.text();
                setInsight(result);
            } catch (err: any) {
                console.error(err)
            }
        }
        fetchInsight(date);
    }, [date]) // update on mount & whenever date changes

    return (
        <div 
            className="eyeInsightText" 
            style={{
                marginTop: 7,
                color: "black",
                fontSize: "larger"
            }}
        >{insight}</div>
    )
}