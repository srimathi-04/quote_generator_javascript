function Generate(){
    var quote={
        "Tina Fey":'"My ability to turn good news into anxiety is rivaled only by my ability to turn anxiety into chin acne."',
        "Bill Gates":'"I choose a lazy person to do a hard job, because a lazy person will find an easy way to do it."',
        "Henry Wadsworth Longfellow":'"It takes less time to do a thing right, than it does to explain why you did it wrong."',
        "Mark Twain":'"I don’t like to commit myself about heaven and hell — you see, I have friends in both places."',
        "C.S. Lewis":'"Friendship is born at the moment when one man says to another, "What! You too? I thought I was the only one."',
        "Tallulah Bankhead":'"If I had to live my life again, I\'d make the same mistakes, only sooner"',
        "Mel Brooks":'"If God wanted us to fly, He would have given us tickets."',
        "Lily Tomlin":'"I always wanted to be somebody, but now I realize I should have been more specific."',
        "Thomas A. Edison":'"The chief function of the body is to carry the brain around."',
        "Langston Hughes":'"Like a welcome summer rain, humor may suddenly cleanse and cool the earth, the air and you."'
    }
    var authors=Object.keys(quote);
    var author=authors[Math.floor(Math.random()*authors.length)];
    var quotes=quote[author];

    document.getElementById("Quote").innerHTML=quotes;
    document.getElementById("author").innerHTML=author;
}