import { Injectable } from '@angular/core';
import { SitemapStream, streamToPromise } from 'sitemap';

@Injectable({
  providedIn: 'root'
})
export class SitemapsService {

  constructor() { }

    async  generateSitemap() {
    const sitemap = new SitemapStream({ hostname: 'https://vrnl.net' });

    // Add URLs to the sitemap
    sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  

    // End the sitemap stream
    sitemap.end();

    // Convert the sitemap stream to XML
    const sitemapXml = (await streamToPromise(sitemap)).toString();

    // You now have the sitemap XML in the `sitemapXml` variable
    console.log(sitemapXml);
}
                                                                                                                                    


  
}
