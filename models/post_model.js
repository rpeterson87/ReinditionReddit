// Seed Data - SAMPLE USE ONLY

const db = require('./index');

const samplePosts = [
    {
        title: 'Check out this Yoda meme!',
        community: 'memes',
        image: "https://images.theconversation.com/files/177834/original/file-20170712-14488-19lw3sc.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
        body: "things can be said here"
    },
    {
        title: 'Lorem Ipsum been around since 1500',
        community: 'software',
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: 'Can we all stop doing this?',
        community: 'memes',
        image: "https://i.guim.co.uk/img/media/a48763efc6a7f237fa557100fb11aa001b2960c2/0_42_745_447/master/745.jpg?width=620&quality=85&fit=max&s=ac2e557134126fb2f6569aea30c4cb42",
        body: "things can be said here"
    },    {
        title: 'meme throwback',
        community: 'memes',
        image: "https://media.npr.org/assets/img/2015/03/03/overly_custom-39399d2cf8b6395770e3f10fd45b22ce39df70d4-s300-c85.webp",
        body: "things can be said here"
    }
];

async function reloadData() {
    try {
        let deleted = await db.Posts.deleteMany({});
        console.log(deleted);
        let reloading = await db.Posts.insertMany(samplePosts);
        console.log(reloading);
    } catch(err) {
        console.log(err);
    }
}
reloadData();