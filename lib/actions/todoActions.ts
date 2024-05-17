"use server";

import { PrismaClient } from "@prisma/client";

import { connect } from "../db";
import { currentUser } from "@clerk/nextjs/server";
import { title } from "process";

const prisma = new PrismaClient();

export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await prisma.user.create({ data: user });
    return JSON.parse(JSON.stringify(newUser));
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function createPost(todo: FormData) {
  try {
    await connect();
    const user = await currentUser();
    console.log(user?.id);

    const currentDbUser = await prisma.user.findFirst({
      where: {
        clerkId: user?.id,
      },
    });

    if (!currentDbUser) {
      console.log("no user found!!!");
      return;
    }

    const postData = {
      title: todo.get("title") as string,
      body: todo.get("body") as string,
      authorId: currentDbUser.id,
    };

    const newPosts = await prisma.post.create({
      data: postData,
    });
    console.log(newPosts);

    return newPosts;
  } catch (err) {
    console.error("error creating a new post" + err);
  }
}

export async function getPosts() {
  try {
    const user = await currentUser();

    const currentDbUser = await prisma.user.findFirst({
      where: {
        clerkId: user?.id,
      },
    });

    if (!currentDbUser) {
      console.log("user not found please login!!! ");
      return;
    }

    const allPosts = await prisma.post.findMany({
      where: {
        authorId: currentDbUser.id,
      },
    });
    return allPosts;
  } catch (err) {
    console.error("error while fetching posts " + err);
  }
}
