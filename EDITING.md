# Your portfolio

Built from solilius/portfolio-template, preserving its layout, fonts, background and galleries.

## Replace the media
Put each image or GIF in `public/images/games/<project>/`. Change its `source` path in `src/data.ts`; GIFs use `MediaType.Image`, just like PNGs. Add more items to the media array for gallery thumbnails. No YouTube account or link is needed. Use a real gameplay GIF for Driving Simulator, or remove its entry until ready.

## Finish your details
Edit `src/data.ts`: set `cvUri` to `/files/my_cv.pdf` and put your CV there; add GitHub, LinkedIn and `contactEmail`. Empty details show “coming soon” rather than broken links. Review project descriptions and add your specific contributions before submitting.

## Run and deploy
`npm ci`, then `npm start`. Production: `npm run build`. Vercel uses the included vercel.json.
