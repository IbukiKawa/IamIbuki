// @ts-check
import { defineConfig } from 'astro/config';
import awsAmplify from "astro-aws-amplify";

// https://astro.build/config
export default defineConfig({
    site: "https://main.d1d7i8gxj6sut0.amplifyapp.com/",
    adapter: awsAmplify(),
});
    
