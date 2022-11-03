export const USERS = {
    "Girls'_Own_advice": "https://pbs.twimg.com/profile_images/436035798132338688/6JJnj8ka_400x400.jpeg",
    "Martin_Luther_King": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Martin_Luther_King%2C_Jr..jpg/800px-Martin_Luther_King%2C_Jr..jpg",
    "Tweets_of_Old": "https://pbs.twimg.com/profile_images/1352720777028788226/SrvPvvBY_400x400.jpg",
};

export const TWEETS = [
    {
        username: "Girls'_Own_advice",
        tweet: "If he is your intended husband, you may walk under one umbrella, but otherwise you had better keep to your own.",
    },
    {
        username: "Martin_Luther_King",
        tweet: "All Tweeters are Created Equal",
    },
    {
        username: "Girls'_Own_advice",
        tweet: "You have unintentionally been guilty of a somewhat forward action in shaking hands with the young gentleman",
    },
    {
        username: "Tweets_of_Old",
        tweet: "Good morning! Have you been vaccinated? North Carolina 1899",
    },
    {
        username: "Tweets_of_Old",
        tweet: "A kitten with two heads was born in a Charles street stable this week. The little monstrosity was perfect in all other particulars.",
    },
].map(tweet => ({ ...tweet, avatar: USERS[tweet.username]}));