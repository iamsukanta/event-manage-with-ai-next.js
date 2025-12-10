import { query } from "./_generated/server";
import { v } from "convex/values";

// Search events by title
export const searchEvents = query({
  args: {
    query: v.string(),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    if (!args.query || args.query.trim().length < 2) {
      return [];
    }

    const now = Date.now();

    // Search by title
    const searchResults = await ctx.db
      .query("events")
      .withSearchIndex("search_title", (q) => q.search("title", args.query))
      .filter((q) => q.gte(q.field("startDate"), now))
      .take(args.limit ?? 5);

    return searchResults;
  },
});
