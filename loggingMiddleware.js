export const loggingMiddleware = (req, res, next) => {
    const startTime = Date.now(); // Capture start time
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    console.log('From Middleware: Request is coming');
    console.log(`Request IP: ${ip}`);
    console.log(`Request Method: ${req.method}`);
    console.log(`Requested URL: ${req.url}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);

    // Listen for the finish event on the response object to log the processing time
    res.on('finish', () => {
        const endTime = Date.now(); // Capture end time
        const timeTaken = endTime - startTime; // Calculate time taken
        console.log(`From Middleware: Response is going`);
        console.log(`Time Taken: ${timeTaken}ms`);
    });

    next(); 
};
