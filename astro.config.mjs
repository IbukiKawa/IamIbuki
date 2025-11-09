// @ts-check
import { defineConfig } from 'astro/config';
import awsAmplify from "astro-aws-amplify";

// https://astro.build/config
export default defineConfig({
    site: "https://example.com",
    adapter: awsAmplify(),
});
    
