import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export const POST = async (req: NextRequest) => {
    try {
        const {data} 
        = await req.json(); 
        console.log("Webhook received:",);
        
        const emailAddress = data?.email_addresses[0].email_address;
        const firstName = data?.first_name;
        const lastname = data?.last_name;
        const imageUrls = data?.image_url;
        const id = data?.id;

        
    await prisma.user.create({
    data: {
        email: emailAddress,
        first_name: firstName,
        last_name: lastname,
        imageUrl: imageUrls,
        userId: id,
    }

})

console.log("User created:", emailAddress);







        return NextResponse.json({ message: "DB User added" }, { status: 200 });
    } catch (error) {
        console.error("Error processing webhook:", error);
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
};
