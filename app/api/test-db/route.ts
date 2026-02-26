import { NextResponse } from "next/server";
import { connectToDatabase } from "@/database/mongoose";

export async function GET() {
    try {
        await connectToDatabase();

        return NextResponse.json({
            success: true,
            message: "MongoDB connesso correttamente"
        });

    } catch (error) {
        return NextResponse.json(
            { success: false, error: String(error) },
            { status: 500 }
        );
    }
}