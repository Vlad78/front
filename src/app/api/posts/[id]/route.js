import Post from "../../../models/Post";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    await connect();

    const post = await Post.findById(params.id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("DB error", { status: 500 });
  }
};
