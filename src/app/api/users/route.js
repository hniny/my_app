import { NextResponse } from "next/server";

export async function GET(){
    const data = [
        {
            name: 'Developer 1',
            age: 23
        },
        {
            name: 'Developer 1',
            age: 23
        },
        {
            name: 'Developer 1',
            age: 23
        },
    ];

    return NextResponse.json({data});
}