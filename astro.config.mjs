// @ts-check
import { defineConfig } from 'astro/config';
import awsAmplify from "astro-aws-amplify";

// https://astro.build/config
export default defineConfig({
    site: "hhttps://main.d1d7i8gxj6sut0.amplifyapp.com/",
    adapter: awsAmplify(),
});
    
