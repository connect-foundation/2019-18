
export interface portfolioProp{
    thumbnailUrl: string;
    introSimple: string;
    introDetail: string;
    activeFields: string[];
    isMyPortfolio: boolean;
    PortfolioOwnerId: string;
    PortfolioOwnerName: string;
    portfolioFollower: { following: string[], follower: string[]};
    isLogin: boolean;
    LoginedId: string;
}
