"use strict";

module.exports = {
	/**
	 * [currentUser description]
	 * TODO: add documentation
	 */
    currentUser:
    {
        id			: '001',
        firstName	: 'John',
        lastName	: 'Smith',
        email 		: 'john_smith@gmail.com',
        tier		: 0,
        remainingMinutes : 325,
        totalMinutes	 : 600, 
        slideshows	: [{
            id			: 's001',
            hashtag		: 'SomeEventName',
            photoCount	: 25,
            videoCount	: 4,
            tweetCount	: 13,
            useInstagram: true,
            useTwitter	: false,
            animationId	: 2,
            location 	: {
				lat: 51.0,
				lng: -0.1,
				accuracy: 100
			}
        }]
    }
};
