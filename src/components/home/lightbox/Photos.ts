const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
    `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
    { id: "6mcVaoGNz1w", width: 1080, height: 780 },
    { id: "T5jzpRTVF1U", width: 1171, height: 781 },
    { id: "LR5O79shvro", width: 1080, height: 720 },
    { id: "93G0Daoyj0U", width: 1080, height: 721 },
    { id: "EwoyDPlT_H0", width: 687, height: 1031 },
    { id: "Th-9zLM-190", width: 687, height: 1031 },

];

const photos = unsplashPhotos.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: unsplashLink(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: unsplashLink(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
