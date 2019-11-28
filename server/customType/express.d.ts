declare global {
    namespace Express {
        interface Request {
            decodedUser?: string;
        }
    }
}
