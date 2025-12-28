
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const sendInquiry = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const inquiryId = await ctx.db.insert("inquiries", {
      ...args,
      createdAt: Date.now(),
    });
    return inquiryId;
  },
});
