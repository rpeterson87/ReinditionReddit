// Seed Data - SAMPLE USE ONLY

const db = require('./index');

const samplePosts = [
    {
        title: 'Yoda meme',
        community: 'memes',
        body: "https://images.theconversation.com/files/177834/original/file-20170712-14488-19lw3sc.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
    },
    {
        title: 'COVID meme',
        community: 'memes',
        body: "https://i.guim.co.uk/img/media/a48763efc6a7f237fa557100fb11aa001b2960c2/0_42_745_447/master/745.jpg?width=620&quality=85&fit=max&s=ac2e557134126fb2f6569aea30c4cb42"
    },    {
        title: 'Overly attached GF',
        community: 'memes',
        body: "https://media.npr.org/assets/img/2015/03/03/overly_custom-39399d2cf8b6395770e3f10fd45b22ce39df70d4-s300-c85.webp"
    }
];

async function reloadData() {
    try {
        let deleted = await db.Posts.deleteMany({});
        console.log(deleted);
        let reloading = await db.Posts.insertMany(samplePosts);
        console.log(realoading);
    } catch(err) {
        console.log(err);
    }
}
reloadData();