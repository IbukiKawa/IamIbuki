import rss, {pagesGlobToRssItems} from "@astrojs/rss";

export async function GET(context) {
    return rss({
        title: "Astro学習者 | ブログ",
        description: "Astroを学ぶ旅",
        site: context.site,
        items: await pageGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>ja-jp</language>`,
    });
}